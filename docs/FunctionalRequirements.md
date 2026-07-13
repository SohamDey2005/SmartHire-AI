# Functional Requirements

## Introduction

This document defines the functional requirements of the SmartHire AI platform.

SmartHire AI is an AI-powered recruitment platform that assists candidates in resume management, AI-based resume analysis, and mock interview preparation while providing a scalable architecture for future recruiter and administrator workflows.

This document reflects the functionality implemented up to **Milestone 2**.

---

# Candidate Module

## 1. User Authentication

The system shall allow users to:

- Register a new account.
- Login using email and password.
- Authenticate using JWT tokens.
- Logout securely.
- Access protected pages only after authentication.
- Access features based on assigned role (Candidate, Recruiter, Administrator).

---

## 2. Resume Management

The system shall allow candidates to:

- Upload PDF resumes.
- Store uploaded resumes securely.
- Extract resume text automatically.
- View uploaded resumes.
- Download uploaded resumes.
- Delete uploaded resumes.
- Manage multiple resumes.

---

## 3. AI Resume Analysis

The system shall:

- Parse uploaded resumes.
- Extract resume text.
- Identify technical skills.
- Identify soft skills.
- Extract frameworks and libraries.
- Extract developer tools.
- Extract databases.
- Extract cloud platforms.
- Extract certifications.
- Extract education details.
- Extract work experience.
- Extract projects.
- Store AI-generated analysis in the database.
- Display analysis on the dashboard.

---

## 4. AI Interview Question Generation

The system shall:

- Generate interview questions from resume content.
- Categorize interview questions.
- Support different difficulty levels.
- Store generated questions.
- Regenerate questions when required.

---

## 5. Interview Session Management

The system shall:

- Start a new interview session.
- Associate the session with a selected resume.
- Record interview start time.
- Record interview completion time.
- Maintain interview session status.
- Display interview session history.

---

## 6. Candidate Dashboard

The system shall allow candidates to:

- View personal information.
- View uploaded resumes.
- Upload new resumes.
- Download resumes.
- Delete resumes.
- Analyze resumes using AI.
- Start mock interviews.
- View generated interview questions.
- View interview sessions.

---

# Recruiter Module (Future)

The system will allow recruiters to:

- Register recruiter accounts.
- Login securely.
- Create job postings.
- Edit jobs.
- Delete jobs.
- View applicants.
- Review candidate resumes.
- View AI-generated resume analysis.
- Track interview performance.

---

# Administrator Module (Future)

The administrator shall be able to:

- Manage user accounts.
- Manage recruiter accounts.
- View platform statistics.
- Monitor AI usage.
- View audit logs.
- Manage reported users.

---

# AI Module

The AI engine shall support:

## Resume Analysis

- Resume parsing.
- Skill extraction.
- Framework detection.
- Tool identification.
- Database detection.
- Cloud technology detection.
- Certification extraction.
- Education extraction.
- Experience extraction.
- Project extraction.

---

## Interview Engine

The AI engine shall:

- Generate interview questions.
- Create technical interview questions.
- Create behavioral interview questions.
- Categorize questions.
- Generate questions dynamically from resume data.

---

# Security Requirements

The system shall:

- Authenticate users using JWT.
- Authorize users using Role-Based Access Control (RBAC).
- Encrypt passwords using BCrypt.
- Protect private API endpoints.
- Validate uploaded files.
- Allow only authenticated users to manage their own resumes.
- Prevent unauthorized access to interview sessions.
- Prevent unauthorized access to AI analysis.

---

# Database Requirements

The system shall store:

- User accounts.
- Uploaded resumes.
- Resume extracted text.
- AI resume analysis.
- Generated interview questions.
- Interview sessions.

---

# API Requirements

The backend shall expose REST APIs for:

## Authentication

- User Registration
- User Login
- Get Current User

---

## Resume APIs

- Upload Resume
- Get User Resumes
- Download Resume
- Delete Resume
- Analyze Resume

---

## Interview APIs

- Generate Interview Questions
- Start Interview Session
- Finish Interview Session
- View Interview Sessions

---

# Planned Functionalities (Milestone 3 & 4)

The following features are planned for future implementation:

## Speech Analysis

- Speech-to-text conversion.
- Filler-word detection.
- Speaking pace analysis.

---

## Emotion Recognition

- Facial emotion detection.
- Confidence estimation.
- Stress analysis.

---

## Eye Contact Detection

- Eye gaze tracking.
- Eye contact percentage.
- Attention monitoring.

---

## AI Evaluation

- Candidate scoring.
- Communication scoring.
- Technical scoring.
- Overall interview score.
- Personalized AI feedback.

---

## Recruiter Features

- Job management.
- Candidate applications.
- Resume filtering.
- Candidate ranking.
- Hiring analytics.

---

## Analytics Dashboard

- Resume analytics.
- Interview analytics.
- Performance charts.
- Historical interview reports.

---

# Functional Status

## Implemented (Milestone 2)

- ✅ User Authentication
- ✅ JWT Authorization
- ✅ Role-Based Access Control
- ✅ Resume Upload
- ✅ Resume Download
- ✅ Resume Delete
- ✅ Resume Parsing
- ✅ AI Resume Analysis
- ✅ Skill Extraction
- ✅ Resume Dashboard
- ✅ AI Interview Question Generation
- ✅ Interview Session Management

---

## Planned

- Speech Analysis
- Emotion Detection
- Eye Contact Tracking
- AI Scoring
- Recruiter Dashboard
- Job Management
- Applications
- Notifications
- Analytics Dashboard
- Performance Reports
