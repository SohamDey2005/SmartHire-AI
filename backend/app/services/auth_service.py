from fastapi import HTTPException, status

from app.auth.hashing import hash_password
from app.models.user import User
from app.repositories.user_repository import UserRepository
from app.schemas.user import UserRegister


class AuthService:

    def __init__(self, repository: UserRepository):
        self.repository = repository

    def register_user(self, user_data: UserRegister):

        existing_user = self.repository.get_by_email(user_data.email)

        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered."
            )

        new_user = User(
            full_name=user_data.full_name,
            email=user_data.email,
            hashed_password=hash_password(user_data.password),
            role="candidate"
        )

        return self.repository.create(new_user)