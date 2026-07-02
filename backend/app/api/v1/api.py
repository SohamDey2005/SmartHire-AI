from fastapi import APIRouter

from app.api.v1.endpoints.auth import router as auth_router
from app.api.v1.endpoints.users import router as users_router
from app.api.v1.endpoints.resume import router as resume_router
from app.api.v1.endpoints.candidate import router as candidate_router
from app.api.v1.endpoints.recruiter import router as recruiter_router
from app.api.v1.endpoints.admin import router as admin_router


api_router = APIRouter()

api_router.include_router(auth_router)
api_router.include_router(users_router)
api_router.include_router(resume_router)
api_router.include_router(candidate_router)
api_router.include_router(recruiter_router)
api_router.include_router(admin_router)