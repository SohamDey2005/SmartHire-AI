from app.database.session import SessionLocal
from app.repositories.resume_repository import ResumeRepository

db = SessionLocal()

repo = ResumeRepository(db)

resume = repo.get_by_user_id(1)

print(resume)