# Functional Requirements

## Introduction

This document defines the functional requirements of the **SmartHire AI** platform.

SmartHire AI is an AI-powered recruitment and interview preparation platform that assists candidates and recruiters by combining resume analysis, Job Description matching, AI-powered mock interviews (HR / Technical / Managerial), speech analysis, facial emotion recognition, eye-contact monitoring, intelligent interview evaluation, analytics, and recruiter shortlisting.

This document reflects the **complete implemented platform (pre-deployment)**.

---

# Candidate Module

## 1. User Authentication

The system shall allow users to:

- Register a new account with role selection (Candidate, Recruiter, Admin).
- Login using email and password with role verification.
- Authenticate using JWT tokens.
- Logout securely.
- Delete their own account and related data.
- Access protected pages only after authentication.
- Access features according to assigned role.
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
- Delete resumes with related data cleanup.
- Manage multiple resumes.
- Prevent unauthorized resume access.

---

## 3. AI Resume Analysis

The system shall:

- Parse uploaded resumes.
- Extract resume text.
- Identify technical skills.
- Identify programming languages.
- Identify frameworks and tools.
- Identify databases and cloud platforms.
- Identify certifications.
- Extract education, experience, and projects.
- Generate structured AI analysis using Groq LLM.
- Store and display AI-generated analysis.

---

## 4. Job Description Management

The system shall allow candidates to:

- Save a Job Description.
- Update an existing Job Description.
- Load a previously saved Job Description.
- Use the JD for Resume-JD matching and interview personalization.

---

## 5. Resume ↔ Job Description Match

The system shall:

- Compare resume content with the Job Description using an LLM.
- Generate a match score.
- Identify matching skills.
- Identify missing skills.
- Provide a summary of candidate-job fit.

---

## 6. Interview Type Selection

The system shall allow candidates to select:

- HR Interview
- Technical Interview
- Managerial Interview

The selected interview type shall control AI interviewer behavior, question generation, and question style.

---

## 7. Interview Session Management

The system shall:

- Start a new interview session using a selected resume and interview type.
- Maintain interview status (`IN_PROGRESS` / `COMPLETED`).
- Record interview start and completion times.
- Display interview history.
- Support multiple interview attempts.

---

## 8. AI Mock Interview

The system shall allow candidates to:

- Attend conversational AI mock interviews.
- Receive type-specific questions for HR, Technical, or Managerial interviews.
- Answer through text or voice.
- Progress through a natural interview conversation.
- Complete the interview.
- Generate interview reports and analytics.

---

## 9. AI Answer Evaluation

The system shall:

- Evaluate candidate answers using AI.
- Generate AI scores and feedback.
- Store answer evaluations.
- Support overall interview performance calculation.

---

## 10. Real-Time Interview Monitoring

The system shall:

- Activate webcam monitoring.
- Capture interview media required for analysis.
- Process speech and visual signals.
- Display monitoring status during the interview.
- Store monitoring results and timeline snapshots.

---

## 11. Speech Analysis

The system shall:

- Convert speech into text.
- Display speech transcription.
- Detect filler words.
- Calculate fluency scores.
- Store speech analysis results.

---

## 12. Emotion Recognition

The system shall:

- Detect facial emotions from webcam input.
- Identify the dominant emotion.
- Store and display emotion analysis results.

---

## 13. Eye Contact Detection

The system shall:

- Detect eye contact using webcam input.
- Estimate attention and eye-contact scores.
- Store eye-contact analysis results.

---

## 14. Overall AI Interview Evaluation

The system shall:

- Combine speech, emotion, and eye-contact analysis.
- Generate an overall AI interview score.
- Generate an interview recommendation.
- Display analytics and performance feedback.

---

## 15. Candidate Dashboard

The system shall allow candidates to:

- View profile and role information.
- Upload and manage resumes.
- Save and manage a Job Description.
- Match resumes with the Job Description.
- Start interviews by type.
- View interview history.
- View AI analytics and feedback.
- Download interview reports.
- Delete their account.

---

# Recruiter Module

## 1. Recruiter Authentication

The system shall allow recruiters to:

- Register as a recruiter.
- Login with recruiter role verification.
- Access recruiter-only routes.
- Logout securely.
- Delete their account and related data.

---

## 2. Recruiter Dashboard

The system shall allow recruiters to:

- View completed interview sessions.
- View candidate scores and statistics.
- Filter interview sessions by score range.
- Search interview sessions.
- Open candidate interview analytics.
- Download PDF reports.
- Shortlist candidates.
- Reject candidates.
- Mark candidates as pending.
- Persist shortlist decisions in the database.

---

# Administrator Module

## 1. Admin Authentication

The system shall allow administrators to:

- Register as an administrator.
- Login with admin role verification.
- Access admin-only routes.
- Logout securely.
- Delete their account and related data.

---

## 2. Admin Dashboard

The system shall allow administrators to:

- View platform user statistics.
- List all registered users.
- Filter users by role.
- Search users by name or email.
- View candidate, recruiter, and admin counts.

---

# Artificial Intelligence Module

## 1. Resume Analysis Engine

The system shall:

- Parse uploaded resumes.
- Extract skills.
- Extract education details.
- Extract certifications.
- Extract projects.
- Extract work experience.
- Generate structured AI analysis output.

## 2. Interview Engine

The system shall:

- Generate type-specific interview conversations.
- Support HR, Technical, and Managerial interviews.
- Adapt questions based on previous candidate answers.
- Evaluate candidate answers.
- Generate AI feedback.

## 3. Resume-JD Match Engine

The system shall:

- Compare resume content with the Job Description using an LLM.
- Produce a match score.
- Identify matching skills.
- Identify missing skills.
- Generate a fit summary.

## 4. Speech Analysis Engine

The system shall:

- Perform speech-to-text conversion.
- Detect filler words.
- Calculate fluency scores.

## 5. Emotion Recognition Engine

The system shall:

- Detect facial emotions.
- Identify the dominant detected emotion.
- Store emotion analysis results.

## 6. Eye Contact Detection Engine

The system shall:

- Detect eye gaze and camera attention.
- Produce an eye-contact score.
- Store eye-contact analysis results.

## 7. Interview Scoring Engine

The system shall:

- Combine communication and behavioral signals.
- Generate an overall interview score.
- Generate an interview recommendation.
- Provide performance feedback.

---

# Security Requirements

The system shall:

- Authenticate users using JWT.
- Authorize users using Role-Based Access Control.
- Securely hash passwords using BCrypt.
- Protect private API endpoints.
- Validate uploaded files.
- Restrict resume access to authorized owners.
- Restrict interview access to authenticated users.
- Restrict recruiter and administrator features according to role.
- Support secure account deletion with related data cleanup.
- Maintain database referential integrity.

---

# Database Requirements

The system shall store:

- Users
- Resumes
- Resume Analysis
- Job Descriptions
- Interview Questions
- Interview Sessions with interview type
- Interview Conversations
- Interview Answers
- Interview Evaluations
- Interview Monitor Reports
- Interview Monitor Snapshots
- Recruiter Shortlists

The database shall maintain relationships using primary keys, foreign keys, unique constraints, and application-level validation.

---

# API Requirements

## Authentication APIs

The system shall provide APIs for:

- User Registration with role
- User Login
- Get Current User
- Delete Current User Account

## Resume APIs

The system shall provide APIs for:

- Upload Resume
- View Resumes
- Download Resume
- Delete Resume
- Analyze Resume

## Job Description APIs

The system shall provide APIs for:

- Save Job Description
- Get Job Description
- Update Job Description
- Match Resume with Job Description

## Interview APIs

The system shall provide APIs for:

- Start Interview with interview type
- Conversational interview / chat
- Submit candidate answers
- Finish Interview
- View Interview Sessions / History
- View Interview Report

## Interview Monitoring APIs

The system shall provide APIs for:

- Analyze interview media
- Store monitoring reports
- Store monitoring snapshots
- Retrieve analytics data
- Retrieve feedback data
- Generate or retrieve PDF reports

## Recruiter APIs

The system shall provide APIs for:

- List shortlist statuses
- Update shortlist status

## Admin APIs

The system shall provide APIs for:

- List all users
- Filter users by role
- Search users

---

# Non-Functional Requirements

The system shall:

- Support responsive web interfaces.
- Process interview analysis efficiently.
- Maintain secure authentication and authorization.
- Support modular backend services.
- Follow REST API standards.
- Use PostgreSQL for persistent storage.
- Support database migrations through Alembic.
- Support scalable deployment architecture.
- Support future cloud deployment.

---

# Functional Status

## Implemented

- User Authentication with role selection
- JWT Authorization
- Role-Based Access Control
- Candidate / Recruiter / Admin dashboards
- Resume Upload / Download / Delete
- Resume Parsing and AI Analysis
- Job Description Save / Load / Update
- Resume ↔ JD Match
- Interview Type Selection
- HR / Technical / Managerial Interviews
- Conversational AI Interviews
- Interview Session Management
- Interview History
- Speech-to-Text
- Filler Word Detection
- Fluency Analysis
- Emotion Recognition
- Eye Contact Detection
- Overall AI Interview Scoring
- AI Feedback and Recommendations
- Real-Time Interview Monitoring
- Monitoring Reports
- Timeline Analytics Snapshots
- Analytics Dashboards and Charts
- Interview History and Progress Views
- PDF Reports
- Recruiter Shortlisting
- Recruiter Status Management
- Admin User Visibility
- Account Deletion
- PostgreSQL Database
- SQLAlchemy ORM
- Alembic Database Migrations

## Remaining

- Cloud Deployment

---

# Summary

The current implementation delivers a complete AI-powered interview and recruitment support platform integrating:

- Resume analysis
- Job Description management and matching
- Dynamic interview types
- Conversational AI interviews
- Candidate answer evaluation
- Speech analysis
- Facial emotion recognition
- Eye-contact monitoring
- Interview scoring
- Real-time monitoring
- Analytics and feedback
- PDF interview reports
- Recruiter shortlisting
- Admin user management

The database, backend services, authentication, AI modules, interview workflows, monitoring, analytics, and recruiter workflows are implemented.

The only remaining major item for production readiness is **cloud deployment**.
