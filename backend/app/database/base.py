from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass


# Import models here
import app.models.user
import app.models.resume
from app.models.resume_analysis import ResumeAnalysis