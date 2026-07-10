from pydantic import BaseModel


class QuestionReport(BaseModel):

    question: str

    candidate_answer: str

    score: float

    strengths: list[str]

    weaknesses: list[str]

    ideal_answer: str

    feedback: str


class InterviewReportResponse(BaseModel):

    overall_score: float

    questions: list[QuestionReport]