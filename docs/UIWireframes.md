# SmartHire AI

# UI Wireframes

## Introduction

This document presents the user interface wireframes for the SmartHire AI platform.

The wireframes represent the application screens implemented up to **Milestone 2 (Resume Parsing & AI Interview Engine)** while also illustrating planned interfaces for future milestones.

---

# Candidate Interface

## 1. Home Page

```
+--------------------------------------------------------+
|                    SmartHire AI                        |
|--------------------------------------------------------|
|                                                        |
|        AI-Powered Recruitment Platform                 |
|                                                        |
|         [ Login ]      [ Register ]                    |
|                                                        |
+--------------------------------------------------------+
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
| Role                                            |
| [ Candidate ▼ ]                                |
|                                                |
|         [ Register ]                           |
+------------------------------------------------+
```

---

## 4. Candidate Dashboard

```
+--------------------------------------------------------------------+
| SmartHire AI                                      Logout           |
|--------------------------------------------------------------------|
| Welcome, Candidate                                              |
| Role Badge                                                      |
| Current Date & Time                                             |
|------------------------------------------------------------------|
|                                                            |
| Resume Upload Card                                          |
|------------------------------------------------------------|
| Choose Resume (PDF)                                        |
| [ Choose File ]                                            |
| [ Upload Resume ]                                          |
|                                                            |
|------------------------------------------------------------|
| My Resumes                                                 |
|------------------------------------------------------------|
| Resume.pdf                                                 |
| Uploaded On:                                               |
|                                                            |
| [Download] [Analyze] [Interview] [Delete]                  |
|                                                            |
+--------------------------------------------------------------------+
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
+---------------------------------------------------------------+
| AI Resume Analysis                                            |
|---------------------------------------------------------------|
| Technical Skills                                              |
| Python  FastAPI  SQL  React                                  |
|                                                               |
| Soft Skills                                                   |
| Leadership  Communication                                    |
|                                                               |
| Frameworks                                                    |
| FastAPI  React                                                |
|                                                               |
| Tools                                                         |
| Git  Docker                                                   |
|                                                               |
| Databases                                                     |
| PostgreSQL                                                    |
|                                                               |
| Cloud                                                         |
| Google Cloud                                                  |
|                                                               |
| Certifications                                                |
| Azure AI Fundamentals                                         |
|                                                               |
| Education                                                     |
| Bachelor of Engineering                                       |
|                                                               |
| Experience                                                    |
| AI Intern                                                     |
|                                                               |
| Projects                                                      |
| DocuMind AI                                                   |
+---------------------------------------------------------------+
```

---

## 7. AI Interview Page

```
+--------------------------------------------------------------+
| AI Interview                                                  |
|--------------------------------------------------------------|
| Resume Selected                                              |
| Resume ID: XX                                                |
|--------------------------------------------------------------|
|        [ Start Interview ]                                  |
|--------------------------------------------------------------|
| Question 1                                                   |
|                                                             |
| Your Answer                                                 |
| [__________________________________________]               |
|                                                             |
| [ Next Question ]                                           |
+--------------------------------------------------------------+
```

---

## 8. Interview Session

```
+--------------------------------------------------------------+
| Interview Session                                            |
|--------------------------------------------------------------|
| Status : Active                                              |
| Started At : 10:30 AM                                        |
| Resume : Resume.pdf                                          |
|--------------------------------------------------------------|
| Question List                                                |
|                                                             |
| Question 1                                                  |
| Question 2                                                  |
| Question 3                                                  |
|                                                             |
| [ Finish Interview ]                                        |
+--------------------------------------------------------------+
```

---

# Recruiter Interface (Future)

## Recruiter Dashboard

```
+----------------------------------------------------------------+
| SmartHire AI                                                   |
|----------------------------------------------------------------|
| Sidebar                  | Dashboard                           |
|---------------------------------------------------------------|
| Dashboard                | Active Jobs                         |
| Jobs                     | Applicants                          |
| Candidates               | AI Resume Scores                    |
| Interviews               | Hiring Statistics                   |
| Logout                   | Notifications                       |
+----------------------------------------------------------------+
```

---

## Job Management

```
+------------------------------------------------+
| Create Job                                     |
|------------------------------------------------|
| Job Title                                      |
| Company                                        |
| Location                                       |
| Employment Type                                |
| Salary                                         |
| Description                                    |
|                                                |
|        [ Create Job ]                          |
+------------------------------------------------+
```

---

# Administrator Interface (Future)

## Admin Dashboard

```
+----------------------------------------------------------------+
| SmartHire AI                                                   |
|----------------------------------------------------------------|
| Sidebar                  | Dashboard                           |
|---------------------------------------------------------------|
| Users                    | Total Users                         |
| Recruiters               | AI Usage                            |
| Reports                  | System Statistics                   |
| Logs                     | Platform Health                     |
| Logout                   | Notifications                       |
+----------------------------------------------------------------+
```

---

# Navigation Flow

## Candidate Workflow (Implemented)

```
Home

↓

Login / Register

↓

Candidate Dashboard

↓

Upload Resume

↓

Resume List

↓

AI Resume Analysis

↓

Generate Interview Questions

↓

Start Interview Session

↓

Finish Interview
```

---

## Recruiter Workflow (Future)

```
Login

↓

Recruiter Dashboard

↓

Create Job

↓

View Applicants

↓

Review AI Analysis

↓

Schedule Interview
```

---

## Administrator Workflow (Future)

```
Login

↓

Admin Dashboard

↓

Manage Users

↓

View Reports

↓

Platform Monitoring
```

---

# UI Status

## Implemented (Milestone 2)

- ✅ Home Page
- ✅ Login Page
- ✅ Registration Page
- ✅ Candidate Dashboard
- ✅ Resume Upload
- ✅ Resume Management
- ✅ AI Resume Analysis
- ✅ Interview Page
- ✅ Interview Session Workflow

---

## Planned (Milestone 3)

- Speech Analysis Screen
- Live Camera Monitoring
- Emotion Detection Dashboard
- AI Evaluation Report

---

## Planned (Milestone 4)

- Recruiter Dashboard
- Job Management
- Candidate Ranking
- Analytics Dashboard
- Admin Dashboard