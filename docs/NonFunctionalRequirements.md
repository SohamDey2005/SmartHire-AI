# Non-Functional Requirements

## Introduction

This document defines the non-functional requirements of the **SmartHire AI** platform.

These requirements describe the quality attributes, performance expectations, security constraints, scalability goals, maintainability standards, usability expectations, compatibility requirements, and AI monitoring capabilities of the platform.

This document reflects the **complete implemented platform (pre-deployment)**.

---

# 1. Performance

The system shall:

- Respond to authentication requests within 2 seconds under normal load.
- Upload PDF resumes efficiently.
- Extract resume text within a few seconds after upload.
- Generate AI resume analysis within an acceptable response time.
- Support Job Description save and Resume ↔ JD matching within acceptable latency.
- Conduct conversational AI interviews with minimal delay between turns.
- Evaluate interview answers with reasonable latency.
- Process speech transcription efficiently.
- Perform emotion detection from webcam images in near real-time.
- Detect eye contact from captured interview frames.
- Analyze filler words and communication quality.
- Generate interview monitoring reports and analytics efficiently.
- Support multiple authenticated users simultaneously.
- Perform database queries efficiently using indexed primary keys and frequently queried foreign-key columns.

---

# 2. Scalability

The platform shall:

- Support increasing numbers of users across Candidate, Recruiter, and Admin roles.
- Support multiple resumes per candidate.
- Support multiple interview sessions per candidate.
- Store interview analytics and monitoring snapshots for future review.
- Handle growing resume and interview datasets.
- Allow deployment across multiple backend instances.
- Support Docker-based deployment.
- Support horizontal scaling of backend APIs.
- Support future cloud deployment.

---

# 3. Security

The platform shall:

- Securely hash passwords using BCrypt.
- Authenticate users using JWT tokens.
- Implement Role-Based Access Control (RBAC) for Candidate, Recruiter, and Admin roles.
- Restrict access to protected APIs based on authentication and role.
- Ensure users can access only authorized resumes and interview data.
- Ensure recruiter and admin features are restricted according to role.
- Validate uploaded PDF files.
- Validate interview media inputs where applicable.
- Protect against SQL Injection through SQLAlchemy ORM and parameterized database operations.
- Protect against Cross-Site Scripting (XSS) through safe frontend practices.
- Store sensitive configuration using environment variables.
- Never expose passwords, tokens, or authentication secrets.
- Support secure account deletion with related data cleanup.
- Maintain database referential integrity.

---

# 4. Reliability

The system shall:

- Maintain database consistency.
- Preserve uploaded resume files safely.
- Store AI resume analysis reliably.
- Store interview conversations, answers, and evaluations reliably.
- Store monitoring snapshots and reports reliably.
- Handle invalid user requests gracefully.
- Return meaningful API error responses.
- Avoid crashes during unexpected input.
- Ensure interview sessions remain recoverable and consistently status-tracked.
- Maintain consistent relationships between users, resumes, interviews, evaluations, and monitoring data.

---

# 5. Availability

The platform shall:

- Be available whenever users require access during operation.
- Recover gracefully from temporary failures.
- Support continuous backend operation.
- Support deployment with high-availability infrastructure in production.
- Minimize service interruption during future deployments and maintenance.

---

# 6. Maintainability

The project shall:

- Follow a modular architecture.
- Separate frontend and backend applications.
- Follow a layered architecture.

### Architecture Layers

- API Layer
- Service Layer
- Repository Layer
- Database Layer
- AI Service Layer

The project shall:

- Use reusable React components.
- Use reusable FastAPI services.
- Follow clean coding practices.
- Use SQLAlchemy ORM for database interaction.
- Use Alembic for database migrations.
- Include comprehensive project documentation.
- Support future feature extensions without major refactoring.
- Maintain clear separation between business logic, API handling, database operations, and AI services.

---

# 7. Usability

The platform shall:

- Provide a clean and intuitive interface for Candidate, Recruiter, and Admin roles.
- Support responsive layouts.
- Display meaningful success and error messages.
- Show loading indicators during AI processing.
- Display interview monitoring and analytics results clearly.
- Minimize user interactions for common tasks.
- Allow seamless navigation between resume management, interviews, analytics, and recruiter workflows.
- Provide clear feedback after important operations such as resume upload, analysis, interview completion, and shortlist updates.

---

# 8. Compatibility

The application shall support:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

Future versions should also support:

- Mobile browsers
- Tablet devices

The platform should use standard web technologies and browser APIs to maintain cross-browser compatibility.

---

# 9. Database

The database shall:

- Use PostgreSQL as the primary relational database.
- Maintain referential integrity using foreign keys.
- Store structured resume analysis using JSON/JSONB fields where appropriate.
- Store Job Descriptions per user.
- Store interview questions, sessions, conversations, answers, and evaluations.
- Store interview monitoring snapshots and reports.
- Store recruiter shortlist decisions.
- Store timestamps for account and interview activities.
- Support indexes for frequently queried columns.
- Prevent duplicate data where appropriate.
- Enforce unique email addresses for users.
- Enforce unique recruiter-session combinations for shortlist records.
- Support safe deletion of related records according to application and database relationship rules.
- Support database migrations using Alembic.

---

# 10. Artificial Intelligence Quality

## Resume Analysis

The AI engine shall:

- Extract technical and soft skills.
- Detect programming languages.
- Detect frameworks and tools.
- Detect databases and cloud technologies.
- Extract certifications.
- Extract education.
- Extract experience.
- Extract projects.
- Generate structured resume analysis.

## Resume ↔ JD Matching

The AI engine shall:

- Compare resume content with the Job Description.
- Produce a match score.
- Identify matching skills.
- Identify missing skills.
- Generate a concise candidate-job fit summary.

## Interview Question and Conversation Generation

The AI engine shall:

- Generate personalized interview conversations.
- Support HR, Technical, and Managerial interview styles.
- Generate questions based on resume information where applicable.
- Adapt follow-up questions based on previous candidate answers.
- Maintain interview context throughout a session.

## Interview Answer Evaluation

The AI engine shall:

- Evaluate candidate answers.
- Assign scores.
- Identify strengths and weaknesses.
- Generate constructive feedback.
- Provide ideal-answer guidance where applicable.
- Store evaluations for later review.

## Interview Monitoring

The AI monitoring engine shall:

- Convert speech to text.
- Detect filler words.
- Measure communication fluency.
- Detect facial emotions.
- Identify dominant emotion where applicable.
- Detect eye contact.
- Calculate eye-contact scores.
- Generate communication recommendations.
- Calculate overall monitoring scores.
- Generate monitoring reports.
- Generate timeline-based analytics snapshots.

---

# 11. Logging

The backend shall:

- Log authentication events where appropriate.
- Log database operations where useful for debugging.
- Log resume upload and analysis requests.
- Log interview session creation and completion.
- Log monitoring analysis requests.
- Capture unexpected exceptions.
- Record validation failures.
- Avoid logging sensitive information such as passwords, authentication secrets, or private credentials.

---

# 12. Monitoring

The platform shall support:

- Backend performance monitoring.
- API analytics.
- Error monitoring.
- Usage statistics.
- AI request metrics.
- Interview monitoring analytics.
- Database performance monitoring where required.
- Future cloud monitoring integration.

---

# 13. Portability

The application shall:

- Run on Windows.
- Run on Linux.
- Run inside Docker containers.
- Support cloud deployment without major source-code modifications.
- Keep environment-specific configuration separate from application source code.

---

# 14. Extensibility

The architecture shall support future implementation of:

- Job Management / Companies
- Candidate Application Pipeline
- Coding Assessments
- Live Video Interviews
- Email / Push Notifications
- Advanced Recruiter Analytics
- Cloud Storage Integration
- CI/CD Deployment
- Multi-language Resume Analysis
- Additional AI interview evaluation metrics

---

# 15. Documentation

The project shall include:

- README
- Project Scope
- Functional Requirements
- Non-Functional Requirements
- Database Design
- ER Diagram
- UI documentation and workflows

All documentation shall remain synchronized with the current implementation.

---

# Non-Functional Status

## Implemented

- Modular FastAPI Backend
- React + TypeScript Frontend
- PostgreSQL Integration
- SQLAlchemy ORM
- Alembic Database Migrations
- JWT Authentication
- BCrypt Password Hashing
- Role-Based Access Control (Candidate / Recruiter / Admin)
- Resume Upload and Management
- AI Resume Parsing and Analysis
- Job Description Management
- Resume ↔ JD Match
- Interview Type Support (HR / Technical / Managerial)
- Conversational Interview Sessions
- AI Answer Evaluation
- Speech-to-Text Processing
- Emotion Recognition
- Eye Contact Detection
- Filler Word Detection
- Communication Analysis
- Interview Monitoring Reports and Snapshots
- Analytics Dashboards
- Recruiter Shortlisting
- Admin User Visibility
- Account Deletion with related data cleanup
- RESTful API Architecture
- Structured Project Documentation

## Remaining

- Cloud Deployment
- Optional production hardening, including CI/CD, a formal automated test suite, and email notifications

---

# Summary

The SmartHire AI platform satisfies the defined non-functional requirements for an AI-powered interview and recruitment support system.

The implementation emphasizes:

- Performance
- Security
- Scalability
- Reliability
- Availability
- Maintainability
- Usability
- Compatibility
- Database integrity
- AI-assisted analysis
- Monitoring and analytics
- Extensibility

The platform provides a modular foundation for production deployment and future recruitment features.

The only major remaining production item is **cloud deployment**, while additional production hardening such as CI/CD, comprehensive automated testing, and notification services may be implemented as future enhancements.