from sqlalchemy import (
    Column,
    Integer,
    ForeignKey,
    Text,
    DateTime,
    func,
)

from sqlalchemy.dialects.postgresql import JSONB

from sqlalchemy.orm import relationship

from app.database.base import Base


class InterviewQuestion(Base):
    __tablename__ = "interview_questions"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    resume_id = Column(
        Integer,
        ForeignKey("resumes.id"),
        nullable=False,
    )

    question = Column(
        Text,
        nullable=False,
    )

    category = Column(
        Text,
        nullable=False,
    )

    difficulty = Column(
        Text,
        nullable=False,
    )

    expected_points = Column(
        JSONB,
        nullable=False,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    resume = relationship(
        "Resume",
        back_populates="questions",
    )