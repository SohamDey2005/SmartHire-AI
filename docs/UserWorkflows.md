# User Workflows

## Introduction

This document describes the interaction flows for different users of the SmartHire AI platform. It outlines how users navigate through the system and how AI-powered services process resumes, conduct mock interviews, evaluate candidate responses, and generate real-time interview monitoring reports.

Current workflows represent the implementation completed up to **Milestone 3 (AI Interview Monitoring & Evaluation)**.

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
        │              Resume Stored
        │                      │
        │                      ▼
        │          Resume Text Extraction
        │                      │
        │                      ▼
        │           AI Resume Analysis
        │                      │
        │                      ▼
        │  Skills, Education, Experience,
        │  Projects & Certifications Extracted
        │                      │
        │                      ▼
        │         View Analysis Results
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
        │      Generate AI Interview Questions
        │                      │
        │                      ▼
        │       Answer Interview Questions
        │                      │
        │                      ▼
        │       AI Answer Evaluation
        │                      │
        │                      ▼
        │     Speech & Camera Monitoring
        │                      │
        │                      ▼
        │     Interview Analytics Report
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
Display Resume Analysis Dashboard
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
Generate Interview Questions
        │
        ▼
Create Interview Session
        │
        ▼
Display Interview Page
        │
        ▼
Start AI Monitoring
(Camera + Microphone)
        │
        ▼
Candidate Answers Question
        │
        ▼
Stop Recording
        │
        ▼
Speech Processing
        │
        ▼
Emotion Detection
        │
        ▼
Eye Contact Detection
        │
        ▼
Filler Word Detection
        │
        ▼
Communication Analysis
        │
        ▼
AI Answer Evaluation
        │
        ▼
Display AI Feedback
        │
        ▼
Next Question
        │
        ▼
Finish Interview
        │
        ▼
Generate Interview Report
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

# AI Monitoring Workflow

```text
Interview Starts
       │
       ▼
Open Webcam
       │
       ▼
Enable Microphone
       │
       ▼
Record Candidate Response
       │
       ▼
Capture Webcam Frame
       │
       ▼
Speech-to-Text
       │
       ▼
Emotion Detection
       │
       ▼
Eye Contact Detection
       │
       ▼
Filler Word Detection
       │
       ▼
Fluency Analysis
       │
       ▼
Generate Overall Score
       │
       ▼
Generate AI Recommendation
       │
       ▼
Save Monitoring Report
       │
       ▼
Display Monitoring Dashboard
```

---

# Interview Evaluation Workflow

```text
Candidate Submits Answer
        │
        ▼
Validate Input
        │
        ▼
Generate AI Prompt
        │
        ▼
Groq LLM Evaluation
        │
        ▼
Evaluate

• Technical Accuracy
• Completeness
• Clarity
• Communication

        │
        ▼
Generate Score
        │
        ▼
Generate Feedback
        │
        ▼
Store Evaluation
        │
        ▼
Display Evaluation Panel
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
Start Monitoring
        │
        ▼
Answer Questions
        │
        ▼
Evaluate Each Answer
        │
        ▼
Generate Monitoring Report
        │
        ▼
Finish Interview
        │
        ▼
Update Session
(Status = Completed)
        │
        ▼
View Interview Analytics
```

---

# Recruiter Workflow (Future)

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
        ├────────► Review Resume Analysis
        │
        ├────────► Review Interview Reports
        │
        ├────────► Candidate Ranking
        │
        └────────► Schedule Interviews
```

---

# Administrator Workflow (Future)

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
        ├────────► AI Usage Monitoring
        │
        ├────────► System Logs
        │
        └────────► Platform Configuration
```

---

# Current Workflow Status

## ✅ Implemented (Milestone 3)

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
- AI Interview Question Generation
- Interview Session Creation
- Interview Session Completion
- AI Answer Evaluation
- Speech-to-Text
- Live Voice Recording
- Transcript Generation
- Emotion Recognition
- Eye Contact Detection
- Filler Word Detection
- Communication Analysis
- Overall AI Scoring
- AI Recommendation Generation
- Interview Monitoring Dashboard
- Interview Analytics Report
- Protected Routes

---

## 🚀 Planned (Milestone 4)

- Recruiter Dashboard
- Job Management
- Candidate Applications
- Resume Ranking
- Candidate Comparison
- Analytics Dashboard
- Performance Charts
- Email Notifications
- Cloud Deployment
- CI/CD Pipeline
- AI Hiring Assistant
- End-to-End Recruitment Workflow
```