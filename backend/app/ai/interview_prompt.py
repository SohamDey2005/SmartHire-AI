def interview_prompt(
    resume_analysis: dict,
) -> str:

    return f"""
You are an experienced Technical Interviewer.

Generate interview questions from the following resume analysis.

Return ONLY valid JSON.

Do not write explanations.
Do not use markdown.

Return EXACTLY this format:

[
    {{
        "question": "",
        "category": "",
        "difficulty": "",
        "expected_points": [
            ""
        ]
    }}
]

Generate ONLY 2 interview questions.

Rules:
- Return exactly 2 questions.
- Do not generate more than 2.
- Return only valid JSON.

Resume Analysis:

{resume_analysis}
"""