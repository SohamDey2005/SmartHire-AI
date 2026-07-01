from sqlalchemy.orm import Session

from app.models.resume import Resume


class ResumeRepository:

    def __init__(self, db: Session):
        self.db = db

    def get_by_user_id(self, user_id: int):
        return (
            self.db.query(Resume)
            .filter(Resume.user_id == user_id)
            .first()
        )

    def create(
        self,
        user_id: int,
        file_name: str,
        file_path: str
    ):
        resume = Resume(
            user_id=user_id,
            file_name=file_name,
            file_path=file_path
        )

        self.db.add(resume)
        self.db.commit()
        self.db.refresh(resume)

        return resume

    def update(
        self,
        resume: Resume,
        file_name: str,
        file_path: str
    ):
        resume.file_name = file_name
        resume.file_path = file_path

        self.db.commit()
        self.db.refresh(resume)

        return resume

    def delete(
        self,
        resume: Resume
    ):
        self.db.delete(resume)
        self.db.commit()