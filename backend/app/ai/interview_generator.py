import json

from app.ai.gemini_client import GeminiClient
from app.ai.interview_prompt import interview_prompt


class InterviewGenerator:

    def __init__(self):
        self.client = GeminiClient()

    def generate(
        self,
        resume_analysis: dict,
    ):

        prompt = interview_prompt(
            resume_analysis
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