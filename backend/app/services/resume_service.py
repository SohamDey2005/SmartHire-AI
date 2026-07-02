from app.models.resume import Resume
from app.repositories.resume_repository import ResumeRepository


class ResumeService:

    def __init__(
        self,
        repository: ResumeRepository,
    ):
        self.repository = repository

    def create_resume(
        self,
        filename,
        file_path,
        owner_id,
    ):

        resume = Resume(
            filename=filename,
            file_path=file_path,
            owner_id=owner_id,
        )

        return self.repository.create(resume)

    def get_user_resumes(
        self,
        user_id,
    ):
        return self.repository.get_by_user(
            user_id
        )

    def delete_resume(
        self,
        resume,
    ):
        self.repository.delete(resume)