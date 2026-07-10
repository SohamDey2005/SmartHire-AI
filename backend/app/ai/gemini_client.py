import time

from google import genai

from app.core.config import settings


class GeminiClient:

    def __init__(self):

        self.client = genai.Client(
            api_key=settings.GEMINI_API_KEY
        )

        self.model="gemini-2.5-flash"

    def generate(
        self,
        prompt: str,
    ) -> str:

        retries = 3

        for attempt in range(retries):

            try:

                response = self.client.models.generate_content(
                    model=self.model,
                    contents=prompt,
                )

                return response.text

            except Exception:

                if attempt == retries - 1:
                    raise

                time.sleep(2)