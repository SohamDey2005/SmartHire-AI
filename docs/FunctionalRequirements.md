# Functional Requirements

## Introduction

This document defines the functional requirements of the **SmartHire AI** platform.

SmartHire AI is an AI-powered recruitment platform that assists candidates throughout the hiring preparation process by combining resume analysis, AI-powered mock interviews, speech analysis, facial emotion recognition, eye-contact monitoring, and intelligent interview evaluation.

This document reflects the functionality implemented up to **Milestone 3**.

---

# Candidate Module

## 1. User Authentication

The system shall allow users to:

- Register a new account.
- Login using email and password.
- Authenticate using JWT tokens.
- Logout securely.
- Access protected pages only after authentication.
- Access features according to assigned role (Candidate, Recruiter, Administrator).
- Maintain secure user sessions.

---

## 2. Resume Management

The system shall allow candidates to:

- Upload PDF resumes.
- Validate uploaded files.
- Store uploaded resumes securely.
- Extract resume text automatically.
- View uploaded resumes.
- Download resumes.
- Delete resumes.
- Manage multiple resumes.
- Prevent unauthorized resume access.

---

## 3. AI Resume Analysis

The system shall:

- Parse uploaded resumes.
- Extract resume text.
- Identify technical skills.
- Identify programming languages.
- Identify frameworks.
- Identify developer tools.
- Identify databases.
- Identify cloud platforms.
- Identify certifications.
- Extract education details.
- Extract work experience.
- Extract projects.
- Generate structured AI analysis.
- Store AI-generated analysis.
- Display analysis on the dashboard.

---

## 4. AI Interview Question Generation

The system shall:

- Generate interview questions using resume content.
- Generate technical questions.
- Generate behavioral questions.
- Categorize questions.
- Assign difficulty levels.
- Store generated questions.
- Regenerate interview questions when requested.

---

## 5. Interview Session Management

The system shall:

- Start a new interview session.
- Associate sessions with uploaded resumes.
- Maintain interview status.
- Record interview start time.
- Record interview completion time.
- Display interview history.
- Support multiple interview attempts.

---

## 6. AI Mock Interview

The system shall allow candidates to:

- Attend AI-generated mock interviews.
- View one question at a time.
- Submit answers.
- Automatically progress through questions.
- Complete the interview.
- Generate interview reports.

---

## 7. AI Answer Evaluation

The system shall:

- Evaluate candidate answers.
- Generate AI scores.
- Generate AI feedback.
- Store evaluations.
- Display evaluation after every answer.
- Calculate overall interview performance.

---

## 8. Real-Time Interview Monitoring

The system shall:

- Activate webcam monitoring.
- Capture interview snapshots.
- Record candidate audio.
- Process interview media after each answer.
- Display real-time monitoring information.
- Update monitoring results after every question.

---

## 9. Speech Analysis

The system shall:

- Convert speech into text.
- Display transcription.
- Detect filler words.
- Calculate fluency score.
- Measure speaking quality.
- Store speech analysis results.

---

## 10. Emotion Recognition

The system shall:

- Detect facial emotions.
- Identify dominant emotion.
- Analyze candidate expressions.
- Display emotion results.
- Store detected emotions.

---

## 11. Eye Contact Detection

The system shall:

- Detect eye contact using webcam images.
- Determine whether the candidate is looking at the camera.
- Monitor attention.
- Store eye-contact results.

---

## 12. Overall AI Interview Evaluation

The system shall:

- Combine speech analysis.
- Combine emotion recognition.
- Combine eye-contact detection.
- Generate overall AI interview score.
- Generate interview recommendation.
- Display interview analytics.

---

## 13. Candidate Dashboard

The system shall allow candidates to:

- View profile information.
- Upload resumes.
- Download resumes.
- Delete resumes.
- Analyze resumes.
- Start interviews.
- View interview history.
- View AI reports.
- View interview analytics.

---

# Recruiter Module (Future)

The system will allow recruiters to:

- Register recruiter accounts.
- Login securely.
- Create job postings.
- Edit job postings.
- Delete job postings.
- View applicants.
- Review resumes.
- Review AI resume analysis.
- Review interview reports.
- Compare candidate performance.
- Rank applicants.

---

# Administrator Module (Future)

The administrator shall be able to:

- Manage users.
- Manage recruiters.
- Manage job postings.
- View platform statistics.
- Monitor AI usage.
- Monitor interview activities.
- Manage audit logs.
- Manage reported users.

---

# Artificial Intelligence Module

## Resume Analysis Engine

The AI engine shall:

- Parse resumes.
- Extract skills.
- Extract education.
- Extract certifications.
- Extract projects.
- Extract experience.
- Generate structured JSON output.

---

## Interview Engine

The AI engine shall:

- Generate personalized interview questions.
- Generate technical questions.
- Generate HR questions.
- Categorize questions.
- Evaluate answers.
- Generate AI feedback.
- Calculate interview scores.

---

## Speech Analysis Engine

The AI engine shall:

- Convert speech to text.
- Detect filler words.
- Calculate fluency.
- Estimate communication quality.

---

## Emotion Recognition Engine

The AI engine shall:

- Detect facial emotions.
- Identify dominant emotion.
- Measure candidate confidence.

---

## Eye Contact Detection Engine

The AI engine shall:

- Detect eye gaze.
- Estimate attention level.
- Determine eye contact.

---

## Interview Scoring Engine

The AI engine shall:

- Combine answer quality.
- Combine communication score.
- Combine emotion score.
- Combine eye-contact score.
- Generate final interview score.
- Generate interview recommendation.

---

# Security Requirements

The system shall:

- Authenticate users using JWT.
- Authorize users using Role-Based Access Control (RBAC).
- Encrypt passwords using BCrypt.
- Protect private API endpoints.
- Validate uploaded files.
- Restrict resume access to owners.
- Restrict interview access to authenticated users.
- Restrict AI analysis access.
- Protect interview reports.
- Prevent unauthorized media uploads.

---

# Database Requirements

The system shall store:

- Users
- Resumes
- Resume Analysis
- Interview Questions
- Interview Sessions
- Interview Answers
- Interview Evaluations
- Interview Monitor Reports
- Interview Monitor Snapshots

---

# API Requirements

The backend shall expose REST APIs for:

## Authentication APIs

- User Registration
- User Login
- Get Current User

---

## Resume APIs

- Upload Resume
- View Resumes
- Download Resume
- Delete Resume
- Analyze Resume

---

## Interview APIs

- Generate Interview Questions
- Start Interview
- Evaluate Answer
- Finish Interview
- View Interview Sessions

---

## Interview Monitoring APIs

- Analyze Interview Recording
- Process Audio
- Process Webcam Image
- Generate Interview Monitoring Report

---

# Non-Functional Requirements

The system shall:

- Support responsive web interfaces.
- Process interview analysis efficiently.
- Maintain secure authentication.
- Support scalable architecture.
- Maintain modular backend services.
- Follow REST API standards.
- Use PostgreSQL for persistent storage.
- Support future cloud deployment.

---

# Planned Functionalities (Milestone 4)

The following features are planned for future implementation:

## Recruiter Dashboard

- Job posting management
- Candidate management
- Resume filtering
- Candidate ranking
- Hiring analytics

---

## Analytics Dashboard

- Performance charts
- Interview history
- Candidate improvement tracking
- Recruiter insights

---

## Cloud Deployment

- Docker
- CI/CD Pipeline
- Cloud Database
- AWS / Azure Deployment

---

## Notifications

- Email notifications
- Interview reminders
- Recruiter alerts

---

## Admin Features

- User management
- Recruiter management
- System monitoring
- Audit logs

---

# Functional Status

## ✅ Implemented (Milestone 3)

- User Authentication
- JWT Authorization
- Role-Based Access Control
- Resume Upload
- Resume Download
- Resume Delete
- Resume Parsing
- AI Resume Analysis
- Skill Extraction
- Candidate Dashboard
- AI Interview Question Generation
- Interview Session Management
- AI Answer Evaluation
- Speech-to-Text
- Filler Word Detection
- Fluency Analysis
- Emotion Recognition
- Eye Contact Detection
- Overall AI Interview Scoring
- AI Interview Recommendations
- Interview Monitoring
- Interview Analytics
- Interview Reports

---

## 🚧 Planned (Milestone 4)

- Recruiter Dashboard
- Admin Dashboard
- Job Management
- Applications
- Candidate Ranking
- Analytics Dashboard
- Performance Charts
- Email Notifications
- Cloud Deployment
- Docker Support
- CI/CD Pipeline
- End-to-End Testing
- Production Deployment

---

# Summary

The current implementation delivers a complete AI-powered interview preparation platform that integrates resume analysis, intelligent interview generation, AI answer evaluation, speech analysis, emotion recognition, eye-contact monitoring, and interview analytics.

The architecture has been designed to support future recruiter workflows, analytics dashboards, cloud deployment, and enterprise-scale recruitment features in upcoming milestones.