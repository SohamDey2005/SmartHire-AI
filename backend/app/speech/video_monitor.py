import os

try:
    import cv2
    CV2_AVAILABLE = True
except Exception:
    cv2 = None
    CV2_AVAILABLE = False

from app.speech.emotion_detector import EmotionDetector
from app.speech.eye_contact_detector import EyeContactDetector


class VideoMonitor:
    def __init__(self):
        if not CV2_AVAILABLE:
            raise RuntimeError(
                "Video monitoring is disabled on free deployment"
            )

        # These will also raise if deepface/mediapipe are unavailable
        self.emotion = EmotionDetector()
        self.eye = EyeContactDetector()

    def analyze(
        self,
        video_path: str,
        frame_interval: int = 10,
    ):
        if not CV2_AVAILABLE or cv2 is None:
            raise RuntimeError(
                "Video monitoring is disabled on free deployment"
            )

        cap = cv2.VideoCapture(video_path)

        frame_no = 0
        frames_processed = 0
        emotion_counts = {}
        eye_contact_count = 0

        while cap.isOpened():
            success, frame = cap.read()

            if not success:
                break

            if frame_no % frame_interval == 0:
                temp_frame = "temp_frame.jpg"

                cv2.imwrite(temp_frame, frame)

                emotion = self.emotion.detect(temp_frame)
                eye = self.eye.detect(temp_frame)

                dominant = emotion["dominant_emotion"]
                emotion_counts[dominant] = (
                    emotion_counts.get(dominant, 0) + 1
                )

                if eye["eye_contact"]:
                    eye_contact_count += 1

                frames_processed += 1

                if os.path.exists(temp_frame):
                    os.remove(temp_frame)

            frame_no += 1

        cap.release()

        if frames_processed == 0:
            return {
                "frames_processed": 0,
                "dominant_emotion": "unknown",
                "eye_contact_percentage": 0,
            }

        dominant = max(emotion_counts, key=emotion_counts.get)

        eye_percentage = round(
            eye_contact_count / frames_processed * 100,
            2,
        )

        return {
            "frames_processed": frames_processed,
            "dominant_emotion": dominant,
            "emotion_distribution": emotion_counts,
            "eye_contact_percentage": eye_percentage,
        }