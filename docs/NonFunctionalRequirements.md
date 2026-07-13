# Non-Functional Requirements

## Introduction

This document defines the non-functional requirements of the SmartHire AI platform.

These requirements describe the quality attributes, performance expectations, security constraints, scalability goals, and maintainability standards for the platform.

This document reflects the system implementation up to **Milestone 2 (Resume Parsing & AI Interview Engine)**.

---

# 1. Performance

The system shall:

- Respond to authentication requests within 2 seconds under normal load.
- Upload PDF resumes efficiently.
- Extract resume text within a few seconds after upload.
- Generate AI resume analysis within an acceptable response time.
- Generate interview questions dynamically with minimal delay.
- Support multiple authenticated users simultaneously.
- Perform database queries efficiently using indexed primary keys and foreign keys.

---

# 2. Scalability

The platform shall:

- Support increasing numbers of users.
- Support multiple resumes per candidate.
- Handle large resume datasets.
- Allow future deployment across multiple backend instances.
- Support future cloud deployment using Docker and cloud services.
- Support horizontal scaling of backend APIs.

---

# 3. Security

The platform shall:

- Encrypt passwords using BCrypt.
- Authenticate users using JWT tokens.
- Implement Role-Based Access Control (RBAC).
- Restrict access to protected APIs.
- Ensure users can access only their own resumes.
- Ensure users can access only their own interview sessions.
- Validate uploaded PDF files.
- Protect against SQL Injection using SQLAlchemy ORM.
- Protect against Cross-Site Scripting (XSS).
- Store sensitive configuration using environment variables.
- Never expose passwords or authentication secrets.

---

# 4. Reliability

The system shall:

- Maintain database consistency.
- Preserve uploaded resume files safely.
- Store AI analysis without data loss.
- Handle invalid user requests gracefully.
- Return meaningful API error responses.
- Avoid crashes during unexpected input.
- Ensure interview sessions are stored reliably.

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
- Follow layered architecture:

  - API Layer
  - Service Layer
  - Repository Layer
  - Database Layer

- Use reusable React components.
- Use reusable FastAPI services.
- Follow clean coding practices.
- Include comprehensive project documentation.
- Support future feature extensions without major refactoring.

---

# 7. Usability

The platform shall:

- Provide a clean and intuitive interface.
- Support responsive layouts.
- Display meaningful success and error messages.
- Minimize user interactions for common tasks.
- Allow resume management through a simple dashboard.
- Provide easy navigation between dashboard and interview pages.

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

- Use PostgreSQL as the relational database.
- Maintain referential integrity using foreign keys.
- Store resume analysis using JSON fields.
- Store interview questions efficiently.
- Store interview sessions with timestamps.
- Support indexing for frequently queried columns.
- Prevent duplicate data where appropriate.

---

# 10. AI Quality

The AI engine shall:

## Resume Analysis

- Extract technical skills accurately.
- Extract soft skills accurately.
- Detect frameworks and libraries.
- Detect developer tools.
- Detect databases.
- Detect cloud platforms.
- Extract certifications.
- Extract education details.
- Extract work experience.
- Extract projects.

## Interview Generation

The AI engine shall:

- Generate relevant interview questions.
- Generate technical questions.
- Generate behavioral questions.
- Categorize questions correctly.
- Produce consistent results for similar resumes.

---

# 11. Logging

The backend shall:

- Log authentication events.
- Log database operations.
- Log resume uploads.
- Log interview session creation.
- Log AI generation requests.
- Capture unexpected exceptions.
- Record validation failures.

---

# 12. Monitoring

The platform shall support future integration with:

- Performance monitoring
- Error monitoring
- API analytics
- Usage statistics
- AI usage metrics

---

# 13. Portability

The application shall:

- Run on Windows.
- Run on Linux.
- Run inside Docker containers.
- Support cloud deployment without code modifications.

---

# 14. Extensibility

The architecture shall support future implementation of:

- Speech-to-Text
- Emotion Detection
- Eye Contact Tracking
- AI Interview Evaluation
- Candidate Scoring
- Recruiter Dashboard
- Job Management
- Candidate Applications
- Analytics Dashboard
- Notification System

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

## Implemented (Milestone 2)

- ✅ Modular FastAPI backend
- ✅ React + TypeScript frontend
- ✅ PostgreSQL integration
- ✅ SQLAlchemy ORM
- ✅ JWT Authentication
- ✅ BCrypt password hashing
- ✅ Role-Based Access Control
- ✅ Resume upload and management
- ✅ AI Resume Analysis
- ✅ Interview Question Generation
- ✅ Interview Session Management
- ✅ RESTful API architecture
- ✅ Structured project documentation

---

## Planned (Milestone 3 & 4)

- Speech-to-Text processing
- Emotion Recognition
- Eye Contact Tracking
- AI Interview Scoring
- Recruiter Analytics
- Performance Dashboards
- Cloud Deployment
- Notifications
- AI Monitoring