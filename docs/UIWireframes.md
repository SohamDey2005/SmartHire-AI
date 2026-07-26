# SmartHire AI

# UI Wireframes

## Introduction

This document presents the user interface wireframes for the SmartHire AI platform.

The wireframes represent the application screens implemented up to **Milestone 3 (AI Interview Monitoring & Evaluation)** while also illustrating planned interfaces for future milestones.

---

# Candidate Interface

## 1. Home Page

```
+------------------------------------------------------------+
|                       SmartHire AI                         |
|------------------------------------------------------------|
|                                                            |
|        AI-Powered Recruitment Platform                     |
|                                                            |
|       Resume Analysis • Mock Interviews                    |
|       AI Monitoring • Interview Reports                    |
|                                                            |
|         [ Login ]      [ Register ]                        |
|                                                            |
+------------------------------------------------------------+
```

---

## 2. Login Page

```
+------------------------------------------------+
|                SmartHire AI                    |
|------------------------------------------------|
| Email                                          |
| [______________________________]               |
|                                                |
| Password                                       |
| [______________________________]               |
|                                                |
|           [ Login ]                            |
|                                                |
| New User? Register                             |
+------------------------------------------------+
```

---

## 3. Registration Page

```
+------------------------------------------------+
|              Create Account                    |
|------------------------------------------------|
| Full Name                                      |
| [______________________________]               |
|                                                |
| Email                                          |
| [______________________________]               |
|                                                |
| Password                                       |
| [______________________________]               |
|                                                |
| Role                                           |
| [ Candidate ▼ ]                                |
|                                                |
|         [ Register ]                           |
+------------------------------------------------+
```

---

## 4. Candidate Dashboard

```
+--------------------------------------------------------------------------+
| SmartHire AI                                            Logout           |
|--------------------------------------------------------------------------|
| Welcome, Candidate                                                  |
| Role Badge                                                          |
| Current Date & Time                                                 |
|----------------------------------------------------------------------|
| Resume Upload Card                                                  |
|----------------------------------------------------------------------|
| Choose Resume (PDF)                                                 |
| [ Choose File ]                                                     |
| [ Upload Resume ]                                                   |
|                                                                      |
|----------------------------------------------------------------------|
| My Resumes                                                          |
|----------------------------------------------------------------------|
| Resume.pdf                                                          |
| Uploaded On:                                                        |
|                                                                      |
| [Download] [Analyze] [Interview] [Delete]                           |
|                                                                      |
+--------------------------------------------------------------------------+
```

---

## 5. Resume Upload

```
+----------------------------------------------+
| Upload Resume                                |
|----------------------------------------------|
| Select PDF Resume                            |
|                                              |
| [ Choose File ]                              |
|                                              |
|      [ Upload Resume ]                       |
+----------------------------------------------+
```

---

## 6. AI Resume Analysis

```
+----------------------------------------------------------------+
| AI Resume Analysis                                             |
|----------------------------------------------------------------|
| Technical Skills                                               |
| Python • FastAPI • React • SQL • PostgreSQL                    |
|                                                                |
| Soft Skills                                                    |
| Leadership • Communication • Teamwork                          |
|                                                                |
| Frameworks                                                     |
| FastAPI • React                                                |
|                                                                |
| Tools                                                          |
| Git • Docker                                                   |
|                                                                |
| Databases                                                      |
| PostgreSQL                                                     |
|                                                                |
| Cloud                                                          |
| Google Cloud                                                   |
|                                                                |
| Certifications                                                 |
| Azure AI Fundamentals                                          |
|                                                                |
| Education                                                      |
| Bachelor of Engineering                                        |
|                                                                |
| Experience                                                     |
| AI Intern                                                      |
|                                                                |
| Projects                                                       |
| SmartHire AI • DocuMind AI                                     |
+----------------------------------------------------------------+
```

---

## 7. AI Interview Page

```
+------------------------------------------------------------------------------------+
| SmartHire AI Mock Interview                                                        |
|------------------------------------------------------------------------------------|
| Resume ID : 5                                                                      |
| Session ID : 14                                                                    |
|------------------------------------------------------------------------------------|
| Question 3 / 10                                                                    |
|------------------------------------------------------------------------------------|
| Explain the difference between REST and GraphQL.                                   |
|                                                                                    |
| Your Answer                                                                        |
| ┌────────────────────────────────────────────────────────────┐                     |
| │                                                            │                     |
| │                                                            │                     |
| └────────────────────────────────────────────────────────────┘                     |
|                                                                                    |
|                  [ Submit Answer ]   [ Finish Interview ]                          |
|------------------------------------------------------------------------------------|
| Live Webcam                                                                        |
|                                                                                    |
|      📷 Camera Preview                                                             |
+------------------------------------------------------------------------------------+
```

---

## 8. AI Interview Monitoring Dashboard

```
+-------------------------------------------------------------------------------+
| AI Interview Monitoring                                                       |
|-------------------------------------------------------------------------------|
| Overall Score      Emotion        Eye Contact                                 |
|     86.5            Happy          Looking at Camera                          |
|-------------------------------------------------------------------------------|
| Transcript                                                                  |
|-------------------------------------------------------------------------------|
| "I would implement JWT authentication..."                                   |
|                                                                             |
|-------------------------------------------------------------------------------|
| Communication                                                               |
|-------------------------------------------------------------------------------|
| Filler Words : 2                                                            |
| Fluency Score : 91                                                          |
|                                                                             |
| Recommendation                                                              |
| "Excellent communication. Maintain eye contact consistently."               |
+-------------------------------------------------------------------------------+
```

---

## 9. AI Evaluation Panel

```
+--------------------------------------------------------------+
| AI Answer Evaluation                                         |
|--------------------------------------------------------------|
| Technical Score : 88                                         |
| Communication Score : 91                                     |
| Overall Score : 89.5                                         |
|                                                              |
| Strengths                                                    |
| ✔ Good explanation                                           |
| ✔ Correct terminology                                        |
|                                                              |
| Improvements                                                 |
| • Provide more examples                                      |
|                                                              |
| AI Feedback                                                  |
| "Strong answer with good technical depth."                   |
+--------------------------------------------------------------+
```

---

## 10. Interview Analytics Report

```
+------------------------------------------------------------------+
| Interview Analytics                                              |
|------------------------------------------------------------------|
| Candidate Score                                                  |
| ██████████████████████ 88%                                       |
|                                                                  |
| Emotion Summary                                                  |
| Happy : 78%                                                      |
| Neutral : 18%                                                    |
| Sad : 4%                                                         |
|                                                                  |
| Eye Contact                                                      |
| 92%                                                              |
|                                                                  |
| Communication                                                    |
| Fluency : 90                                                     |
| Filler Words : 4                                                 |
|                                                                  |
| Recommendation                                                   |
| Excellent interview performance.                                 |
+------------------------------------------------------------------+
```

---

# Recruiter Interface (Future)

## Recruiter Dashboard

```
+------------------------------------------------------------------+
| SmartHire AI                                                     |
|------------------------------------------------------------------|
| Sidebar               | Dashboard                               |
|---------------------------------------------------------------   |
| Dashboard             | Active Jobs                             |
| Jobs                  | Applicants                              |
| Candidates            | Resume Scores                           |
| Interviews            | Interview Reports                       |
| Analytics             | Hiring Statistics                       |
| Logout                | Notifications                           |
+------------------------------------------------------------------+
```

---

## Job Management

```
+--------------------------------------------------+
| Create Job                                       |
|--------------------------------------------------|
| Job Title                                        |
| Company                                          |
| Location                                         |
| Employment Type                                  |
| Salary                                           |
| Description                                      |
|                                                  |
|         [ Create Job ]                           |
+--------------------------------------------------+
```

---

# Administrator Interface (Future)

## Admin Dashboard

```
+------------------------------------------------------------------+
| SmartHire AI                                                     |
|------------------------------------------------------------------|
| Sidebar              | Dashboard                                |
|---------------------------------------------------------------   |
| Users                | Total Users                              |
| Recruiters           | AI Usage                                 |
| Reports              | Platform Statistics                      |
| Logs                 | System Health                            |
| Analytics            | Performance                              |
| Logout               | Notifications                            |
+------------------------------------------------------------------+
```

---

# Navigation Flow

## Candidate Workflow (Implemented)

```
Home
      │
      ▼
Login / Register
      │
      ▼
Candidate Dashboard
      │
      ▼
Upload Resume
      │
      ▼
Resume List
      │
      ▼
AI Resume Analysis
      │
      ▼
Generate Interview Questions
      │
      ▼
Start Interview
      │
      ▼
Answer Questions
      │
      ▼
AI Answer Evaluation
      │
      ▼
Speech Analysis
      │
      ▼
Emotion Detection
      │
      ▼
Eye Contact Detection
      │
      ▼
Communication Analysis
      │
      ▼
Interview Monitoring Report
      │
      ▼
Interview Analytics
```

---

## Recruiter Workflow (Future)

```
Login
      │
      ▼
Recruiter Dashboard
      │
      ▼
Create Job
      │
      ▼
View Applicants
      │
      ▼
Review Resume Analysis
      │
      ▼
Review Interview Reports
      │
      ▼
Shortlist Candidates
```

---

## Administrator Workflow (Future)

```
Login
      │
      ▼
Admin Dashboard
      │
      ▼
Manage Users
      │
      ▼
Monitor AI Usage
      │
      ▼
System Analytics
      │
      ▼
Platform Monitoring
```

---

# UI Status

## ✅ Implemented (Milestone 3)

- Home Page
- Login Page
- Registration Page
- Candidate Dashboard
- Resume Upload
- Resume Management
- AI Resume Analysis
- AI Interview Page
- AI Question Generation
- Interview Session Workflow
- AI Answer Evaluation
- Live Webcam Monitoring
- Speech-to-Text Transcript
- Emotion Detection Panel
- Eye Contact Monitoring
- Communication Analysis
- AI Recommendation Panel
- Interview Monitoring Dashboard
- Interview Analytics Report
- Loading Skeleton UI
- Responsive Design

---

## 🚀 Planned (Milestone 4)

- Recruiter Dashboard
- Admin Dashboard
- Job Management
- Candidate Ranking
- Analytics Dashboard
- Performance Charts
- Email Notifications
- Cloud Deployment
- Mobile Responsive Optimization
- Dark Mode
```