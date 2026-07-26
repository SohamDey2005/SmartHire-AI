# Non-Functional Requirements

## Introduction

This document defines the non-functional requirements of the SmartHire AI platform.

These requirements describe the quality attributes, performance expectations, security constraints, scalability goals, maintainability standards, and AI monitoring capabilities of the platform.

This document reflects the system implementation up to **Milestone 3 (AI Interview Monitoring & Analytics)**.

---

# 1. Performance

The system shall:

- Respond to authentication requests within 2 seconds under normal load.
- Upload PDF resumes efficiently.
- Extract resume text within a few seconds after upload.
- Generate AI resume analysis within an acceptable response time.
- Generate personalized interview questions dynamically.
- Evaluate interview answers with minimal latency.
- Process speech transcription efficiently.
- Perform emotion detection from webcam images in near real-time.
- Detect eye contact from captured interview frames.
- Analyze filler words and communication quality.
- Generate interview monitoring reports after each response.
- Support multiple authenticated users simultaneously.
- Perform database queries efficiently using indexed primary keys and foreign keys.

---

# 2. Scalability

The platform shall:

- Support increasing numbers of users.
- Support multiple resumes per candidate.
- Support multiple interview sessions.
- Store interview analytics for future review.
- Handle large resume datasets.
- Allow deployment across multiple backend instances.
- Support Docker-based deployment.
- Support horizontal scaling of backend APIs.
- Support future cloud deployment.

---

# 3. Security

The platform shall:

- Encrypt passwords using BCrypt.
- Authenticate users using JWT tokens.
- Implement Role-Based Access Control (RBAC).
- Restrict access to protected APIs.
- Ensure users can access only their own resumes.
- Ensure users can access only their own interview sessions.
- Ensure interview monitoring data is visible only to authorized users.
- Validate uploaded PDF files.
- Validate uploaded interview media.
- Protect against SQL Injection using SQLAlchemy ORM.
- Protect against Cross-Site Scripting (XSS).
- Store sensitive configuration using environment variables.
- Never expose passwords or authentication secrets.

---

# 4. Reliability

The system shall:

- Maintain database consistency.
- Preserve uploaded resume files safely.
- Store AI resume analysis without data loss.
- Store interview answers reliably.
- Store monitoring snapshots and reports.
- Handle invalid user requests gracefully.
- Return meaningful API error responses.
- Avoid crashes during unexpected input.
- Ensure interview sessions remain recoverable.

---

# 5. Availability

The platform shall:

- Be available whenever users require access.
- Recover gracefully from temporary failures.
- Support continuous backend operation.
- Support future deployment with high availability infrastructure.

---

# 6. Maintainability

The project shall:

- Follow a modular architecture.
- Separate frontend and backend applications.
- Follow layered architecture.

Architecture Layers:

- API Layer
- Service Layer
- Repository Layer
- Database Layer
- AI Service Layer

The project shall:

- Use reusable React components.
- Use reusable FastAPI services.
- Follow clean coding practices.
- Include comprehensive documentation.
- Support future feature extensions without major refactoring.

---

# 7. Usability

The platform shall:

- Provide a clean and intuitive interface.
- Support responsive layouts.
- Display meaningful success and error messages.
- Show loading indicators during AI processing.
- Display interview monitoring results in real time.
- Minimize user interactions for common tasks.
- Allow seamless navigation between resume management and interview modules.

---

# 8. Compatibility

The application shall support:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

Future versions should also support:

- Mobile browsers
- Tablet devices

---

# 9. Database

The database shall:

- Use PostgreSQL.
- Maintain referential integrity using foreign keys.
- Store resume analysis using JSON fields.
- Store interview questions.
- Store interview answers.
- Store interview evaluations.
- Store interview monitoring snapshots.
- Store interview monitoring reports.
- Store timestamps for all interview activities.
- Support indexing for frequently queried columns.
- Prevent duplicate data where appropriate.

---

# 10. Artificial Intelligence Quality

## Resume Analysis

The AI engine shall:

- Extract technical skills accurately.
- Extract soft skills accurately.
- Detect frameworks.
- Detect developer tools.
- Detect databases.
- Detect cloud technologies.
- Extract certifications.
- Extract education details.
- Extract work experience.
- Extract projects.

---

## Interview Question Generation

The AI engine shall:

- Generate personalized interview questions.
- Generate technical questions.
- Generate behavioral questions.
- Categorize questions correctly.
- Produce consistent outputs for similar resumes.

---

## Interview Answer Evaluation

The AI engine shall:

- Evaluate candidate answers.
- Assign AI scores.
- Generate constructive feedback.
- Produce consistent evaluations.
- Store evaluations in the database.

---

## Interview Monitoring

The AI monitoring engine shall:

- Convert speech to text.
- Detect filler words.
- Measure communication fluency.
- Detect facial emotions.
- Detect eye contact.
- Generate communication recommendations.
- Calculate an overall monitoring score.
- Generate monitoring reports after each response.

---

# 11. Logging

The backend shall:

- Log authentication events.
- Log database operations.
- Log resume uploads.
- Log interview session creation.
- Log AI resume analysis requests.
- Log interview question generation.
- Log interview evaluations.
- Log monitoring analysis requests.
- Capture unexpected exceptions.
- Record validation failures.

---

# 12. Monitoring

The platform shall support:

- Backend performance monitoring.
- API analytics.
- Error monitoring.
- Usage statistics.
- AI request metrics.
- Interview monitoring analytics.
- Future cloud monitoring integration.

---

# 13. Portability

The application shall:

- Run on Windows.
- Run on Linux.
- Run inside Docker containers.
- Support cloud deployment without source code modifications.

---

# 14. Extensibility

The architecture shall support future implementation of:

- Recruiter Dashboard
- Job Management
- Candidate Applications
- Resume Ranking
- AI Candidate Matching
- Live Video Interviews
- Real-Time Speech Analytics
- Analytics Dashboard
- Notifications
- Cloud Storage Integration
- CI/CD Deployment
- Multi-language Resume Analysis

---

# 15. Documentation

The project shall include:

- README
- Project Scope
- Functional Requirements
- Non-Functional Requirements
- Database Design
- ER Diagram
- UI Wireframes
- User Workflows

All documentation shall remain synchronized with the current implementation.

---

# Non-Functional Status

## ✅ Implemented (Milestone 3)

- Modular FastAPI Backend
- React + TypeScript Frontend
- PostgreSQL Integration
- SQLAlchemy ORM
- JWT Authentication
- BCrypt Password Hashing
- Role-Based Access Control
- Resume Upload & Management
- AI Resume Parsing
- AI Resume Analysis
- AI Interview Question Generation
- Interview Session Management
- AI Answer Evaluation
- Speech-to-Text Processing
- Emotion Recognition
- Eye Contact Detection
- Filler Word Detection
- Communication Analysis
- Interview Monitoring Reports
- RESTful API Architecture
- Structured Project Documentation

---

## 🚀 Planned (Milestone 4)

- Recruiter Dashboard
- Admin Dashboard
- Job Management
- Candidate Applications
- Resume Ranking
- Analytics Dashboard
- Performance Charts
- Email Notifications
- Cloud Deployment
- Docker Deployment
- CI/CD Pipeline
- End-to-End Testing
- Multi-language Resume Analysis

---

# Summary

The SmartHire AI platform now satisfies the non-functional requirements for an AI-powered recruitment and mock interview platform through Milestone 3. The system emphasizes performance, security, scalability, maintainability, and AI-assisted interview monitoring while remaining extensible for future recruiter, analytics, and cloud-based features.