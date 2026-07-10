import json

from app.ai.gemini_client import GeminiClient
from app.ai.interview_evaluation_prompt import (
    interview_evaluation_prompt,
)


class InterviewEvaluator:

    def __init__(self):

        self.client = GeminiClient()

    def evaluate(
        self,
        question: str,
        answer: str,
    ):

        prompt = interview_evaluation_prompt(
            question,
            answer,
        )

        response = self.client.generate(
            prompt
        )

        response = (
            response
            .replace("```json", "")
            .replace("```", "")
            .strip()
        )

        return json.loads(response)