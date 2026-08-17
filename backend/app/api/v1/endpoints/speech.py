from fastapi import (
    APIRouter,
    UploadFile,
    File,
    HTTPException,
)
from pathlib import Path
import shutil

from app.speech.speech_to_text import SpeechToText, WHISPER_AVAILABLE
from app.speech.filler_word_detector import FillerWordDetector
from app.speech.emotion_detector import EmotionDetector
from app.speech.eye_contact_detector import EyeContactDetector
from app.speech.scoring_engine import ScoringEngine

router = APIRouter(
    prefix="/speech",
    tags=["Speech"],
)

UPLOAD_DIR = Path("uploads/audio")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

IMAGE_UPLOAD_DIR = Path("uploads/images")
IMAGE_UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


@router.post("/transcribe")
async def transcribe_audio(
    audio: UploadFile = File(...),
):
    if not WHISPER_AVAILABLE:
        raise HTTPException(
            status_code=503,
            detail="Speech monitoring is disabled on free deployment",
        )

    if not audio.filename:
        raise HTTPException(
            status_code=400,
            detail="No audio uploaded.",
        )

    file_path = UPLOAD_DIR / audio.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(audio.file, buffer)

    speech = SpeechToText()
    transcript = speech.transcribe(str(file_path))

    detector = FillerWordDetector()
    analysis = detector.analyze(transcript)

    communication_score = round(
        analysis["fluency_score"] / 10,
        2,
    )

    return {
        "transcript": transcript,
        "filler_words": analysis,
        "communication_score": communication_score,
    }


@router.post("/emotion")
async def detect_emotion(
    image: UploadFile = File(...),
):
    try:
        detector = EmotionDetector()
    except Exception:
        raise HTTPException(
            status_code=503,
            detail="Emotion detection is disabled on free deployment",
        )

    if not image.filename:
        raise HTTPException(
            status_code=400,
            detail="No image uploaded.",
        )

    file_path = IMAGE_UPLOAD_DIR / image.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)

    try:
        result = detector.detect(str(file_path))
    except Exception:
        raise HTTPException(
            status_code=503,
            detail="Emotion detection is disabled on free deployment",
        )

    engine = ScoringEngine()
    score = engine.calculate(
        filler_count=0,
        emotion=result.get("dominant_emotion", "neutral"),
        eye_contact=True,
    )

    return {
        **result,
        **score,
    }


@router.post("/eye-contact")
async def detect_eye_contact(
    image: UploadFile = File(...),
):
    try:
        detector = EyeContactDetector()
    except Exception:
        raise HTTPException(
            status_code=503,
            detail="Eye-contact detection is disabled on free deployment",
        )

    if not image.filename:
        raise HTTPException(
            status_code=400,
            detail="No image uploaded.",
        )

    file_path = IMAGE_UPLOAD_DIR / image.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)

    try:
        result = detector.detect(str(file_path))
    except Exception:
        raise HTTPException(
            status_code=503,
            detail="Eye-contact detection is disabled on free deployment",
        )

    engine = ScoringEngine()
    score = engine.calculate(
        filler_count=0,
        emotion="neutral",
        eye_contact=result.get("eye_contact", False),
    )

    return {
        **result,
        **score,
    }