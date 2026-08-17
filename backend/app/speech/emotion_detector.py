try:
    from deepface import DeepFace
    DEEPFACE_AVAILABLE = True
except Exception:
    DeepFace = None
    DEEPFACE_AVAILABLE = False


class EmotionDetector:
    def __init__(self):
        if not DEEPFACE_AVAILABLE:
            raise RuntimeError(
                "Emotion detection is disabled on free deployment"
            )

    def detect(self, image_path: str):
        if not DEEPFACE_AVAILABLE or DeepFace is None:
            raise RuntimeError(
                "Emotion detection is disabled on free deployment"
            )

        result = DeepFace.analyze(
            img_path=image_path,
            actions=["emotion"],
            detector_backend="retinaface",
            enforce_detection=False,
        )

        if isinstance(result, list):
            result = result[0]

        return {
            "dominant_emotion": str(result["dominant_emotion"]),
            "confidence": float(result["face_confidence"])
            if "face_confidence" in result
            else 100.0,
            "emotion_scores": {
                emotion: float(score)
                for emotion, score in result["emotion"].items()
            },
        }