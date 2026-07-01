from fastapi import APIRouter, Depends, File, UploadFile
from sqlalchemy.orm import Session

from app.auth.dependencies import get_current_user
from app.database.dependencies import get_db
from app.models.user import User
from app.repositories.resume_repository import ResumeRepository
from app.schemas.resume import ResumeResponse
from app.services.resume_service import ResumeService

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)


@router.post(
    "/upload",
    response_model=ResumeResponse
)
def upload_resume(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    repository = ResumeRepository(db)
    service = ResumeService(repository)

    return service.upload_resume(
        current_user,
        file
    )


@router.get(
    "/me",
    response_model=ResumeResponse
)
def get_resume(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    repository = ResumeRepository(db)
    service = ResumeService(repository)

    return service.get_resume(
        current_user
    )


@router.delete("/delete")
def delete_resume(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    repository = ResumeRepository(db)
    service = ResumeService(repository)

    return service.delete_resume(
        current_user
    )