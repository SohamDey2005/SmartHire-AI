try:
    import whisper
    WHISPER_AVAILABLE = True
except Exception:
    whisper = None
    WHISPER_AVAILABLE = False


class SpeechToText:
    def __init__(self):
        self.model = None
        if WHISPER_AVAILABLE:
            self.model = whisper.load_model("base")

    def transcribe(self, audio_path: str):
        if not WHISPER_AVAILABLE or self.model is None:
            raise RuntimeError(
                "Speech-to-text is disabled on free deployment"
            )

        result = self.model.transcribe(audio_path)

        text = result["text"].strip()
        words = text.split()

        duration = 0.0
        if "segments" in result and len(result["segments"]) > 0:
            duration = result["segments"][-1]["end"]

        return {
            "text": text,
            "word_count": len(words),
            "duration": round(duration, 2),
        }