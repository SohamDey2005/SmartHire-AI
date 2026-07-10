from app.ai.skill_extractor import SkillExtractor

text = """
Soham Dey

Python
Java
C++
TensorFlow
PyTorch
SQL
Docker
FastAPI
React
"""

extractor = SkillExtractor()

print(
    extractor.extract(text)
)