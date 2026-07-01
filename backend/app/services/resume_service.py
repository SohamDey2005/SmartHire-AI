import os
import shutil
from uuid import uuid4

from fastapi import HTTPException, UploadFile, status

from app.models.user import User
from app.repositories.resume_repository import ResumeRepository


class ResumeService:

    def __init__(self, repository: ResumeRepository):
        self.repository = repository

    def upload_resume(
        self,
        current_user: User,
        file: UploadFile
    ):
        allowed_extensions = [".pdf", ".doc", ".docx"]

        extension = os.path.splitext(file.filename)[1].lower()

        if extension not in allowed_extensions:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Only PDF, DOC and DOCX files are allowed."
            )

        upload_dir = "uploads/resumes"

        os.makedirs(upload_dir, exist_ok=True)

        unique_filename = f"{uuid4()}{extension}"

        file_path = os.path.join(
            upload_dir,
            unique_filename
        )

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        existing_resume = self.repository.get_by_user_id(
            current_user.id
        )

        if existing_resume:

            if os.path.exists(existing_resume.file_path):
                os.remove(existing_resume.file_path)

            return self.repository.update(
                existing_resume,
                file.filename,
                file_path
            )

        return self.repository.create(
            current_user.id,
            file.filename,
            file_path
        )

    def get_resume(
        self,
        current_user: User
    ):
        return self.repository.get_by_user_id(
            current_user.id
        )

    def delete_resume(
        self,
        current_user: User
    ):
        resume = self.repository.get_by_user_id(
            current_user.id
        )

        if not resume:
            raise HTTPException(
                status_code=404,
                detail="Resume not found."
            )

        if os.path.exists(resume.file_path):
            os.remove(resume.file_path)

        self.repository.delete(resume)

        return {
            "message": "Resume deleted successfully."
        }