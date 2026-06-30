from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.repositories.user_repository import UserRepository
from app.schemas.user import UserRegister, UserResponse
from app.services.auth_service import AuthService

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=201
)
def register(
    user: UserRegister,
    db: Session = Depends(get_db)
):
    repository = UserRepository(db)
    service = AuthService(repository)

    created_user = service.register_user(user)

    return created_user