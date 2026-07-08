from datetime import datetime

from pydantic import BaseModel


class ResumeResponse(BaseModel):

    id: int

    filename: str

    file_path: str

    uploaded_at: datetime

    model_config = {
        "from_attributes": True
    }


class ResumeDetailsResponse(BaseModel):

    id: int

    filename: str

    file_path: str

    uploaded_at: datetime

    extracted_text: str | None

    model_config = {
        "from_attributes": True
    }