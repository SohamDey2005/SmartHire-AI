from fastapi import FastAPI

app = FastAPI(
    title="SmartHire AI API",
    description="Backend API for SmartHire AI - AI Powered Mock Interview Platform",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "Welcome to SmartHire AI Backend!",
        "status": "Running Successfully 🚀"
    }