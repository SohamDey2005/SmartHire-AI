from app.repositories.interview_answer_repository import (
    InterviewAnswerRepository,
)


class InterviewReportService:

    def __init__(
        self,
        repository: InterviewAnswerRepository,
    ):
        self.repository = repository

    def get_report(
        self,
        session_id: int,
    ):

        answers = self.repository.get_answers_with_evaluation(
            session_id
        )

        if not answers:

            return {
                "overall_score": 0,
                "questions": [],
            }

        total = 0

        reports = []

        for answer in answers:

            evaluation = answer.evaluation

            if not evaluation:
                continue

            total += evaluation.score

            reports.append({

                "question":
                    answer.question.question,

                "candidate_answer":
                    answer.candidate_answer,

                "score":
                    evaluation.score,

                "strengths":
                    evaluation.strengths,

                "weaknesses":
                    evaluation.weaknesses,

                "ideal_answer":
                    evaluation.ideal_answer,

                "feedback":
                    evaluation.feedback,

            })

        overall = (
            total / len(reports)
            if reports else 0
        )

        return {

            "overall_score":
                round(overall, 2),

            "questions":
                reports,

        }