from datetime import datetime

from pydantic import BaseModel


class InterviewSessionResponse(BaseModel):

    id: int

    resume_id: int

    user_id: int

    status: str

    started_at: datetime

    completed_at: datetime | None = None

    model_config = {
        "from_attributes": True
    }