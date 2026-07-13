# SmartHire AI – Entity Relationship Diagram

The following ER diagram represents the database schema implemented up to **Milestone 2 (Resume Parsing & AI Interview Engine)**.

## ER Diagram

```mermaid
erDiagram

    USERS ||--o{ RESUMES : uploads

    RESUMES ||--|| RESUME_ANALYSIS : analyzed_into

    RESUMES ||--o{ INTERVIEW_QUESTIONS : generates

    USERS ||--o{ INTERVIEW_SESSIONS : starts

    RESUMES ||--o{ INTERVIEW_SESSIONS : used_in



    USERS {

        int id PK
        string full_name
        string email
        string hashed_password
        string role
        datetime created_at

    }



    RESUMES {

        int id PK
        int owner_id FK
        string filename
        string file_path
        text extracted_text
        datetime uploaded_at

    }



    RESUME_ANALYSIS {

        int id PK
        int resume_id FK

        json technical_skills
        json soft_skills
        json frameworks
        json tools
        json databases
        json cloud
        json certifications

        json education
        json experience
        json projects

        datetime created_at

    }



    INTERVIEW_QUESTIONS {

        int id PK
        int resume_id FK
        string question
        string category
        string difficulty
        datetime created_at

    }



    INTERVIEW_SESSIONS {

        int id PK
        int resume_id FK
        int user_id FK
        string status
        datetime started_at
        datetime completed_at

    }
```

---

# Relationship Summary

## Users → Resumes

Relationship:
**One-to-Many**

A candidate can upload multiple resumes.

---

## Resumes → Resume Analysis

Relationship:
**One-to-One**

Each resume has one AI-generated resume analysis containing extracted skills, education, experience, certifications, and projects.

---

## Resumes → Interview Questions

Relationship:
**One-to-Many**

AI generates multiple interview questions from a resume.

---

## Users → Interview Sessions

Relationship:
**One-to-Many**

A user can attempt multiple mock interviews.

---

## Resumes → Interview Sessions

Relationship:
**One-to-Many**

Different interview sessions can be created for the same uploaded resume.

---

# Database Status

Implemented through Milestone 2:

- ✅ Users
- ✅ Resumes
- ✅ Resume Analysis
- ✅ Interview Questions
- ✅ Interview Sessions

---

# Planned for Future Milestones

The following entities will be introduced in upcoming milestones:

- Jobs
- Applications
- Interview Responses
- Speech Analysis
- Emotion Detection
- Eye Contact Tracking
- AI Feedback Reports
- Recruiter Analytics
- Notifications
- Performance Reports

These entities are intentionally excluded from the current ER diagram because they are not yet implemented.