# Database Design

# Introduction

SmartHire AI uses **PostgreSQL** as its primary Relational Database Management System (RDBMS). The database is designed to efficiently manage user authentication, resume storage, AI-generated resume analysis, interview sessions, interview monitoring, candidate responses, AI evaluations, and interview analytics.

The schema follows **Third Normal Form (3NF)** to eliminate redundancy, maintain data consistency, and support future scalability.

---

# Database Objectives

The database is designed to:

- Store user accounts securely.
- Support Role-Based Access Control (Candidate, Recruiter, Admin).
- Manage uploaded resumes.
- Store AI-generated resume analysis.
- Store AI-generated interview questions.
- Manage interview sessions.
- Store candidate answers.
- Store AI answer evaluations.
- Store real-time interview monitoring reports.
- Store monitoring snapshots.
- Maintain referential integrity using foreign keys.
- Support future recruitment workflows.

---

# Database Tables

---

# 1. Users

## Purpose

Stores all registered platform users.

## Attributes

| Attribute | Type | Description |
|------------|------|-------------|
| id | Integer (PK) | Unique User ID |
| full_name | String | User's full name |
| email | String | Unique email address |
| hashed_password | String | Encrypted password |
| role | String | Candidate / Recruiter / Admin |
| created_at | Timestamp | Account creation time |

## Relationships

- One User can own many Resumes.
- One User can participate in many Interview Sessions.

---

# 2. Resumes

## Purpose

Stores uploaded PDF resumes.

## Attributes

| Attribute | Type |
|------------|------|
| id | Integer (PK) |
| owner_id | Integer (FK → Users.id) |
| filename | String |
| file_path | String |
| extracted_text | Text |
| uploaded_at | Timestamp |

## Relationships

- Many Resumes belong to one User.
- One Resume has one Resume Analysis.
- One Resume has many Interview Questions.
- One Resume has many Interview Sessions.

---

# 3. Resume Analysis

## Purpose

Stores structured AI-generated resume insights.

Powered by **Groq Llama 3.3 70B Versatile**.

## Attributes

| Attribute | Type |
|------------|------|
| id | Integer (PK) |
| resume_id | Integer (FK → Resumes.id) |
| technical_skills | JSON |
| soft_skills | JSON |
| frameworks | JSON |
| tools | JSON |
| databases | JSON |
| cloud | JSON |
| certifications | JSON |
| education | JSON |
| experience | JSON |
| projects | JSON |
| created_at | Timestamp |

## Relationships

- One Resume has one Resume Analysis.

---

# 4. Interview Questions

## Purpose

Stores AI-generated interview questions based on resume content.

## Attributes

| Attribute | Type |
|------------|------|
| id | Integer (PK) |
| resume_id | Integer (FK → Resumes.id) |
| question | Text |
| category | String |
| difficulty | String |
| expected_points | JSONB |
| created_at | Timestamp |

## Relationships

- One Resume generates many Interview Questions.
- One Interview Question can be answered multiple times across different interview sessions.

---

# 5. Interview Sessions

## Purpose

Represents a complete interview conducted by a candidate.

## Attributes

| Attribute | Type |
|------------|------|
| id | Integer (PK) |
| resume_id | Integer (FK → Resumes.id) |
| user_id | Integer (FK → Users.id) |
| status | String |
| started_at | Timestamp |
| completed_at | Timestamp |

## Relationships

- One User can have many Interview Sessions.
- One Resume can have many Interview Sessions.
- One Interview Session contains many Interview Answers.
- One Interview Session has one Interview Monitoring Report.
- One Interview Session contains many Monitoring Snapshots.

---

# 6. Interview Answers

## Purpose

Stores every answer submitted by the candidate.

## Attributes

| Attribute | Type |
|------------|------|
| id | Integer (PK) |
| session_id | Integer (FK → InterviewSessions.id) |
| question_id | Integer (FK → InterviewQuestions.id) |
| candidate_answer | Text |
| ai_score | Float |
| ai_feedback | Text |
| created_at | Timestamp |

## Relationships

- Many Interview Answers belong to one Interview Session.
- Many Interview Answers reference one Interview Question.
- One Interview Answer has one Interview Evaluation.

---

# 7. Interview Evaluations

## Purpose

Stores detailed AI evaluation for each interview answer.

## Attributes

| Attribute | Type |
|------------|------|
| id | Integer (PK) |
| answer_id | Integer (FK → InterviewAnswers.id) |
| score | Integer |
| strengths | JSON |
| weaknesses | JSON |
| ideal_answer | Text |
| feedback | Text |

## Relationships

- One Interview Evaluation belongs to one Interview Answer.

---

# 8. Interview Monitor Reports

## Purpose

Stores the final AI monitoring summary for an interview session.

## Attributes

| Attribute | Type |
|------------|------|
| id | Integer (PK) |
| session_id | Integer (FK → InterviewSessions.id) |
| overall_score | Float |
| average_fluency | Float |
| average_eye_contact | Float |
| dominant_emotion | String |
| recommendation | Text |
| created_at | Timestamp |

## Relationships

- One Interview Session has one Interview Monitoring Report.

---

# 9. Interview Monitor Snapshots

## Purpose

Stores AI analysis results captured during interview monitoring.

Each snapshot corresponds to one monitoring event.

## Attributes

| Attribute | Type |
|------------|------|
| id | Integer (PK) |
| session_id | Integer (FK → InterviewSessions.id) |
| transcript | Text |
| emotion | String |
| eye_contact | Boolean |
| filler_words | Integer |
| fluency_score | Float |
| created_at | Timestamp |

## Relationships

- Many Monitoring Snapshots belong to one Interview Session.

---

# Entity Relationship Diagram

```

Users (1)
│
├───────────────< Resumes (N)
│                      │
│                      │
│                      ├──────── ResumeAnalysis (1)
│                      │
│                      ├────────< InterviewQuestions (N)
│                      │
│                      └────────< InterviewSessions (N)
│                                       │
│              ┌────────────────────────┼────────────────────┐
│              │                        │                    │
│              │                        │                    │
│              ▼                        ▼                    ▼
│     InterviewAnswers (N)   InterviewMonitorReport (1)   InterviewMonitorSnapshots (N)
│              │
│              │
│              ▼
│     InterviewEvaluation (1)

```

---

# Database Relationships

| Parent | Child | Relationship |
|----------|---------|--------------|
| User | Resume | One-to-Many |
| Resume | ResumeAnalysis | One-to-One |
| Resume | InterviewQuestion | One-to-Many |
| Resume | InterviewSession | One-to-Many |
| User | InterviewSession | One-to-Many |
| InterviewSession | InterviewAnswer | One-to-Many |
| InterviewQuestion | InterviewAnswer | One-to-Many |
| InterviewAnswer | InterviewEvaluation | One-to-One |
| InterviewSession | InterviewMonitorReport | One-to-One |
| InterviewSession | InterviewMonitorSnapshot | One-to-Many |

---

# Database Normalization

The SmartHire AI database follows **Third Normal Form (3NF)**.

## First Normal Form (1NF)

- Atomic attribute values.
- No repeating groups.

## Second Normal Form (2NF)

- Every non-key attribute depends on the complete primary key.

## Third Normal Form (3NF)

- No transitive dependencies.
- Foreign keys maintain all relationships.
- Redundant data is eliminated.

---

# Data Integrity

The database maintains integrity through:

- Primary Keys
- Foreign Keys
- Unique Constraints
- NOT NULL Constraints
- ON DELETE CASCADE Relationships
- SQLAlchemy ORM Relationships
- Alembic Database Migrations

---

# Current Database Tables

| Table | Status |
|---------|--------|
| Users | ✅ Implemented |
| Resumes | ✅ Implemented |
| Resume Analysis | ✅ Implemented |
| Interview Questions | ✅ Implemented |
| Interview Sessions | ✅ Implemented |
| Interview Answers | ✅ Implemented |
| Interview Evaluations | ✅ Implemented |
| Interview Monitor Reports | ✅ Implemented |
| Interview Monitor Snapshots | ✅ Implemented |

---

# Future Database Extensions

The following entities are planned for future milestones.

## Jobs

Recruiter job postings.

## Applications

Candidate job applications.

## Recruiters

Recruiter profile management.

## Companies

Company information.

## Notifications

Real-time user notifications.

## Coding Assessments

Programming interview questions.

## Interview Recordings

Video interview metadata.

## Analytics Dashboard

Advanced recruiter analytics.

## Feedback History

Historical interview feedback.

## AI Recommendation Engine

Candidate recommendation models.

---

# Database Features

The SmartHire AI database currently supports:

- Secure Authentication
- Resume Management
- AI Resume Analysis
- Skill Extraction
- Education Extraction
- Project Extraction
- Interview Question Generation
- Interview Session Tracking
- Candidate Answer Storage
- AI Answer Evaluation
- Speech-to-Text Storage
- Emotion Detection Results
- Eye Contact Analysis
- Filler Word Analysis
- Fluency Scoring
- Monitoring Reports
- Interview Analytics

---

# Database Summary

The SmartHire AI database provides a scalable and modular foundation for an AI-powered recruitment platform.

### Current Implementation

- User Authentication
- Resume Storage
- AI Resume Analysis
- Interview Question Generation
- Interview Session Management
- AI Answer Evaluation
- Real-Time Interview Monitoring
- Speech Analysis
- Emotion Detection
- Eye Contact Tracking
- Interview Analytics

### Future Enhancements

- Recruiter Portal
- Job Management
- Candidate Applications
- Coding Interviews
- Live AI Interviews
- Video Interview Storage
- Cloud-Based Analytics
- AI Candidate Ranking
- Recruitment Workflow Automation

The database architecture is modular, normalized, scalable, and designed to support future AI-powered recruitment workflows while maintaining high performance, data integrity, and extensibility.