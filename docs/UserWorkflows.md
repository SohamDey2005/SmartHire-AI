# User Workflows

## Introduction

This document describes how different users interact with SmartHire AI. The workflows help define the system behavior before implementation.

---

# Candidate Workflow

```
Candidate Registration
        │
        ▼
Candidate Login
        │
        ▼
Dashboard
        │
        ├──────────────► Update Profile
        │
        ├──────────────► Upload Resume
        │                      │
        │                      ▼
        │             Resume Stored
        │                      │
        │                      ▼
        │             AI Resume Analysis
        │
        ├──────────────► Browse Jobs
        │                      │
        │                      ▼
        │               Apply for Job
        │
        ├──────────────► Mock Interview
        │                      │
        │                      ▼
        │            AI Interview Questions
        │                      │
        │                      ▼
        │             Submit Responses
        │                      │
        │                      ▼
        │             AI Evaluation
        │                      │
        │                      ▼
        │              View Feedback
        │
        ▼
Logout
```

---

# Recruiter Workflow

```
Recruiter Registration
        │
        ▼
Recruiter Login
        │
        ▼
Recruiter Dashboard
        │
        ├──────────────► Create Job
        │
        ├──────────────► Edit Job
        │
        ├──────────────► View Applicants
        │
        ├──────────────► View Candidate Resume
        │
        ├──────────────► AI Candidate Ranking
        │
        ├──────────────► Schedule Interview
        │
        └──────────────► Review AI Feedback
```

---

# Administrator Workflow

```
Admin Login
      │
      ▼
Dashboard
      │
      ├────────► Manage Users
      │
      ├────────► Manage Recruiters
      │
      ├────────► Platform Analytics
      │
      ├────────► View Logs
      │
      └────────► Monitor AI Usage
```

---

# AI Workflow

```
Resume Upload
      │
      ▼
Extract Text
      │
      ▼
Parse Resume
      │
      ▼
Identify Skills
      │
      ▼
Resume Score
      │
      ▼
Generate Feedback
      │
      ▼
Store Results
```

---

# Interview AI Workflow

```
Candidate Starts Interview
         │
         ▼
Read Resume
         │
         ▼
Read Job Description
         │
         ▼
Generate Questions
         │
         ▼
Candidate Answers
         │
         ▼
Evaluate Answers
         │
         ▼
Generate Feedback
         │
         ▼
Store Interview Report
```