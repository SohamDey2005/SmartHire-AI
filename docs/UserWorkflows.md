# User Workflows

## Introduction

This document describes the interaction flows for different users of the SmartHire AI platform. It outlines how users navigate through the system and how AI-powered services process resume and interview data.

Current workflows represent the implementation completed up to **Milestone 2**, including authentication, resume management, AI resume analysis, interview question generation, and interview session management.

---

# Candidate Workflow

```text
Candidate Registration
        │
        ▼
Candidate Login
        │
        ▼
Candidate Dashboard
        │
        ├──────────────► Upload Resume (PDF)
        │                      │
        │                      ▼
        │             Resume Stored
        │                      │
        │                      ▼
        │             Resume Text Extraction
        │                      │
        │                      ▼
        │          AI Resume Analysis
        │                      │
        │                      ▼
        │     Skills, Education, Experience,
        │     Projects & Certifications Extracted
        │                      │
        │                      ▼
        │          View Analysis Results
        │
        ├──────────────► Download Resume
        │
        ├──────────────► Delete Resume
        │
        ├──────────────► Start AI Interview
        │                      │
        │                      ▼
        │          Create Interview Session
        │                      │
        │                      ▼
        │     Generate AI Interview Questions
        │                      │
        │                      ▼
        │         View Interview Questions
        │
        └──────────────► Logout
```

---

# AI Resume Analysis Workflow

```text
Resume Upload
      │
      ▼
Validate PDF
      │
      ▼
Store Resume
      │
      ▼
Extract Resume Text
      │
      ▼
Generate AI Prompt
      │
      ▼
Groq LLM Processing
      │
      ▼
Extract

• Technical Skills
• Soft Skills
• Frameworks
• Tools
• Databases
• Cloud Platforms
• Certifications
• Education
• Experience
• Projects

      │
      ▼
Store Resume Analysis
      │
      ▼
Display Analysis Dashboard
```

---

# AI Interview Workflow

```text
Candidate Clicks
"Start Interview"
        │
        ▼
Validate Resume
        │
        ▼
Load Resume Analysis
        │
        ▼
Generate AI Interview Questions
        │
        ▼
Save Questions
        │
        ▼
Create Interview Session
        │
        ▼
Display Interview Page
        │
        ▼
Interview Session Active
```

---

# Resume Management Workflow

```text
Upload Resume
      │
      ▼
Validate PDF
      │
      ▼
Save File
      │
      ▼
Create Database Record
      │
      ▼
Resume Appears in Dashboard
      │
      ├────────► Download Resume
      │
      ├────────► Analyze Resume
      │
      ├────────► Start Interview
      │
      └────────► Delete Resume
```

---

# Authentication Workflow

```text
Register
    │
    ▼
Validate User Details
    │
    ▼
Hash Password
    │
    ▼
Save User
    │
    ▼
Login
    │
    ▼
Verify Password
    │
    ▼
Generate JWT Token
    │
    ▼
Access Protected Routes
    │
    ▼
Logout
```

---

# Interview Session Workflow

```text
Start Interview
        │
        ▼
Create Session
(Status = Active)
        │
        ▼
Generate Questions
        │
        ▼
Candidate Views Questions
        │
        ▼
Finish Interview
        │
        ▼
Session Status Updated
(Status = Completed)
```

---

# Recruiter Workflow (Planned)

```text
Recruiter Login
        │
        ▼
Recruiter Dashboard
        │
        ├────────► Create Job
        │
        ├────────► Manage Jobs
        │
        ├────────► View Applicants
        │
        ├────────► View Candidate Resume
        │
        ├────────► AI Candidate Ranking
        │
        └────────► Schedule Interview
```

---

# Administrator Workflow (Planned)

```text
Administrator Login
        │
        ▼
Admin Dashboard
        │
        ├────────► Manage Users
        │
        ├────────► Manage Recruiters
        │
        ├────────► Platform Analytics
        │
        ├────────► System Logs
        │
        └────────► Monitor AI Usage
```

---

# Current Workflow Status

## ✅ Implemented (Milestone 2)

- User Registration
- User Login
- JWT Authentication
- Role-Based Access Control
- Candidate Dashboard
- Resume Upload
- Resume Download
- Resume Deletion
- Resume Text Extraction
- AI Resume Analysis
- Skill Extraction
- Education Extraction
- Experience Extraction
- Project Extraction
- Certification Extraction
- Interview Question Generation
- Interview Session Creation
- Interview Session Completion
- Interview Page
- Protected Routes

---

## 🚧 Planned (Milestone 3)

- Speech-to-Text
- Voice Recording
- Filler Word Detection
- Emotion Recognition
- Eye Contact Tracking
- AI Interview Evaluation
- Communication Scoring
- Confidence Analysis

---

## 📅 Planned (Milestone 4)

- Analytics Dashboard
- Performance Reports
- Recruiter Dashboard
- Job Management
- Notifications
- Cloud Deployment
- AI Feedback Reports
- End-to-End Interview Assessment