# Database Design

## Introduction

The SmartHire AI platform uses PostgreSQL as its relational database management system (RDBMS). The database is designed to efficiently store user information, resumes, job postings, applications, interviews, AI-generated feedback, and notifications while maintaining data integrity and scalability.

The design follows normalization principles to minimize redundancy and improve maintainability.

---

# Database Objectives

The database is designed to:

- Store user information securely.
- Support different user roles (Candidate, Recruiter, Administrator).
- Manage resume uploads and resume history.
- Store job postings created by recruiters.
- Track candidate job applications.
- Manage interview scheduling.
- Store interview questions and candidate responses.
- Store AI-generated evaluations and feedback.
- Maintain system notifications.

---

# Database Entities

## 1. Users

Purpose:
Stores information about all registered users.

Attributes:

- id (Primary Key)
- full_name
- email
- hashed_password
- role
- created_at

Relationship:

- One user can upload multiple resumes.
- One recruiter can create multiple jobs.
- One candidate can submit multiple job applications.
- One user can receive multiple notifications.

---

## 2. Resumes

Purpose:
Stores uploaded resumes for candidates.

Attributes:

- id (Primary Key)
- user_id (Foreign Key → Users)
- file_name
- file_path
- uploaded_at
- updated_at

Relationship:

- Many resumes belong to one user.

---

## 3. Jobs

Purpose:
Stores job postings created by recruiters.

Attributes:

- id (Primary Key)
- recruiter_id (Foreign Key → Users)
- title
- company
- description
- location
- employment_type
- salary
- status
- created_at

Relationship:

- One recruiter can create multiple jobs.

---

## 4. Applications

Purpose:
Stores candidate job applications.

Attributes:

- id (Primary Key)
- candidate_id (Foreign Key → Users)
- job_id (Foreign Key → Jobs)
- status
- applied_at

Relationship:

- One candidate can apply for many jobs.
- One job can receive many applications.

---

## 5. Interviews

Purpose:
Stores interview schedules.

Attributes:

- id (Primary Key)
- application_id (Foreign Key → Applications)
- scheduled_time
- status
- created_at

Relationship:

- One application may have one or more interviews.

---

## 6. Interview Questions

Purpose:
Stores AI-generated or recruiter-created interview questions.

Attributes:

- id (Primary Key)
- interview_id (Foreign Key → Interviews)
- question_text
- question_type
- difficulty

Relationship:

- One interview contains multiple questions.

---

## 7. Interview Responses

Purpose:
Stores candidate responses for interview questions.

Attributes:

- id (Primary Key)
- question_id (Foreign Key → Interview Questions)
- candidate_answer
- score
- feedback

Relationship:

- Each question has one candidate response.

---

## 8. AI Feedback

Purpose:
Stores AI evaluation results.

Attributes:

- id (Primary Key)
- user_id (Foreign Key → Users)
- resume_score
- communication_score
- technical_score
- overall_score
- recommendations
- created_at

Relationship:

- One user can receive multiple AI feedback reports.

---

## 9. Skills

Purpose:
Stores predefined technical and soft skills.

Attributes:

- id (Primary Key)
- skill_name
- category

Relationship:

- Used during resume parsing and job matching.

---

## 10. Notifications

Purpose:
Stores notifications for users.

Attributes:

- id (Primary Key)
- user_id (Foreign Key → Users)
- title
- message
- is_read
- created_at

Relationship:

- One user can receive multiple notifications.

---

# Entity Relationships

The main relationships are:

- Users → Resumes (One-to-Many)
- Users → Jobs (One-to-Many)
- Users → Applications (One-to-Many)
- Jobs → Applications (One-to-Many)
- Applications → Interviews (One-to-Many)
- Interviews → Interview Questions (One-to-Many)
- Interview Questions → Interview Responses (One-to-One)
- Users → AI Feedback (One-to-Many)
- Users → Notifications (One-to-Many)

---

# Database Normalization

The database is designed following Third Normal Form (3NF):

- Each table stores information about a single entity.
- Data redundancy is minimized.
- Relationships are maintained using foreign keys.
- Referential integrity is enforced.

---

# Future Enhancements

The database can be extended to support:

- Video interview recordings
- AI chat history
- Company profiles
- Recruiter teams
- Candidate portfolios
- Skill assessments
- Interview analytics