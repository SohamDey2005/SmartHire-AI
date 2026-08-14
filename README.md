# 🤖 SmartHire AI

### AI-Powered Recruitment Platform with Resume Analysis, JD Matching, Mock Interviews, Real-Time Monitoring & Analytics

**An intelligent recruitment and interview-preparation platform that uses Artificial Intelligence to automate resume analysis, match resumes with Job Descriptions, conduct type-specific AI mock interviews (HR / Technical / Managerial), monitor candidate performance in real time, and generate comprehensive interview analytics.**

---

# 📑 Table of Contents

* [Project Overview](#-project-overview)
* [Objectives](#-objectives)
* [Key Features](#-key-features)
* [System Architecture](#-system-architecture)
* [Technology Stack](#-technology-stack)
* [Artificial Intelligence Stack](#-artificial-intelligence-stack)
* [AI Workflow](#-ai-workflow)
* [Database Design](#-database-design)
* [Security Features](#-security-features)
* [Project Structure](#-project-structure)
* [REST API Documentation](#-rest-api-documentation)
* [Installation Guide](#-installation-guide)
* [Environment Variables](#-environment-variables)
* [Recommended Test Flow](#-recommended-test-flow)
* [Screenshots](#-screenshots)
* [Milestone Progress](#-milestone-progress)
* [Troubleshooting](#-troubleshooting)
* [Deployment](#-deployment)
* [Project Status](#-project-status)
* [Author](#-author)

---

# 📌 Project Overview

SmartHire AI is a full-stack AI-powered recruitment and interview-preparation platform.

It enables:

* **Candidates** to upload resumes, perform AI analysis, match resumes with Job Descriptions, take type-specific AI mock interviews, and view analytics and feedback reports.
* **Recruiters** to review completed interviews, view analytics, download PDF reports, and shortlist candidates.
* **Administrators** to view platform users and role-based statistics.

The platform combines modern web development with Generative AI, Speech Processing, Computer Vision, and Natural Language Processing to deliver a realistic and intelligent interview experience.

This project currently represents the **complete implemented platform (pre-deployment)**.

---

# 🎯 Objectives

The primary objectives of SmartHire AI are:

* Build a secure multi-role AI-powered recruitment platform.
* Analyze resumes using Large Language Models.
* Support Job Description storage and Resume ↔ JD matching.
* Conduct HR, Technical, and Managerial AI mock interviews.
* Evaluate candidate responses automatically.
* Evaluate communication and interview performance.
* Monitor speech, emotion, eye contact, and fluency.
* Provide analytics, feedback, and PDF reports.
* Support recruiter shortlisting workflows.
* Provide administrators with platform user visibility.
* Build a modular and scalable architecture ready for cloud deployment.

---

# ✨ Key Features

## 🔐 Authentication & Roles

* User Registration with role selection:

  * Candidate
  * Recruiter
  * Admin
* Secure Login with role verification.
* JWT Authentication.
* BCrypt Password Hashing.
* Protected Routes.
* Role-Based Access Control (RBAC).
* Current user profile access.
* Secure account deletion.
* Logout functionality.

---

## 📄 Resume Management

* Upload PDF resumes.
* Secure resume storage.
* Resume text extraction.
* Resume listing.
* Resume download.
* Resume deletion.
* Cascade-safe related data cleanup.
* Multiple resume support.
* Owner-restricted resume access.

---

## 🤖 AI Resume Analysis

Powered by **Groq LLM**.

The system automatically extracts and analyzes:

* Technical Skills
* Soft Skills
* Programming Languages
* Frameworks
* Tools
* Databases
* Cloud Technologies
* Certifications
* Education
* Work Experience
* Projects

The generated analysis is stored in structured form and displayed to the candidate.

---

## 🧾 Job Description & Resume Matching

The platform supports:

* Saving a Job Description.
* Updating an existing Job Description.
* Loading the saved Job Description.
* Resume ↔ JD comparison using an LLM.
* Match score generation.
* Matching skill identification.
* Missing skill identification.
* Fit summary generation.

---

## 🎤 AI Mock Interviews

Candidates can select from:

* HR Interview
* Technical Interview
* Managerial Interview

The interview engine supports:

* Conversational AI interviews.
* Resume-based questioning.
* Interview-type-specific questioning.
* Adaptive follow-up questions.
* Text-based answers.
* Voice-based answers.
* Interview session tracking.
* Multiple interview attempts.
* AI answer evaluation.

Interview sessions maintain:

* `IN_PROGRESS`
* `COMPLETED`

status tracking.

---

## 🎥 AI Interview Monitoring

The interview monitoring system supports:

* Webcam monitoring.
* Microphone input.
* Speech-to-Text.
* Transcript generation.
* Emotion Detection.
* Eye Contact Detection.
* Filler Word Detection.
* Fluency Analysis.
* Communication Analysis.
* Overall Monitoring Score.
* AI Recommendation.
* Monitoring Reports.
* Timeline Monitoring Snapshots.

---

## 📊 Analytics & Feedback

The platform provides:

* Overall Interview Score.
* Fluency Score.
* Eye Contact Score.
* Filler Word Analysis.
* Emotion Analysis.
* Score Timeline.
* Transcript History.
* AI Feedback.
* Strengths.
* Weaknesses.
* Suggestions.
* Interview History.
* Progress Tracking.
* PDF Interview Reports.

---

## 🧑‍💼 Recruiter Dashboard

Recruiters can:

* View completed interview sessions.
* Search interview sessions.
* Filter sessions by score.
* Open candidate analytics.
* View interview reports.
* Download PDF reports.
* Mark candidates as:

  * Pending
  * Shortlisted
  * Rejected
* Persist shortlist decisions in the database.
* Delete their account securely.

---

## 🛡️ Admin Dashboard

Administrators can:

* View total platform users.
* View candidate count.
* View recruiter count.
* View admin count.
* List users.
* Search users by name or email.
* Filter users by role.
* Delete their account securely.

---

# 🏗️ System Architecture

```text
                 +---------------------------+
                 |       React Frontend      |
                 |  TypeScript + TailwindCSS |
                 +------------+--------------+
                              |
                       REST API (Axios)
                              |
                 +------------v--------------+
                 |      FastAPI Backend      |
                 | Auth • Resume • JD        |
                 | Interview • Monitoring    |
                 | Analytics • Shortlist     |
                 +------------+--------------+
                              |
         ----------------------------------------
         |                  |                   |
+--------v------+   +-------v-------+   +-------v--------+
| PostgreSQL DB |   |   Groq API    |   |   AI Models    |
| Users         |   | Resume AI     |   | Whisper        |
| Resumes       |   | JD Match      |   | DeepFace       |
| Interviews    |   | Interview AI  |   | MediaPipe      |
| Shortlists    |   | Feedback      |   | OpenCV         |
+---------------+   +---------------+   +----------------+
```

---

# ⚙️ Technology Stack

## Frontend

| Technology       | Purpose            |
| ---------------- | ------------------ |
| React            | User Interface     |
| TypeScript       | Type Safety        |
| Vite             | Build Tool         |
| Tailwind CSS     | Styling            |
| React Router DOM | Routing            |
| Axios            | API Communication  |
| React Webcam     | Camera Integration |
| Lucide React     | Icons              |
| Recharts         | Data Visualization |

---

## Backend

| Technology       | Purpose                      |
| ---------------- | ---------------------------- |
| FastAPI          | REST API Framework           |
| Python           | Backend Programming Language |
| SQLAlchemy       | ORM                          |
| Alembic          | Database Migration           |
| PostgreSQL       | Database                     |
| Pydantic         | Data Validation              |
| JWT              | Authentication               |
| Passlib / BCrypt | Password Hashing             |
| Uvicorn          | ASGI Server                  |

---

# 🤖 Artificial Intelligence Stack

## Large Language Model

The platform uses the **Groq API** for LLM-powered functionality.

Used for:

* Resume Analysis.
* Resume ↔ JD Matching.
* Interview Conversation Generation.
* Adaptive Interview Questions.
* Answer Evaluation.
* AI Feedback.
* Interview Recommendations.

Additional techniques include:

* Prompt Engineering.
* Structured JSON Output.

---

## 🎙️ Speech Processing

The platform uses **OpenAI Whisper** for speech processing.

Used for:

* Speech-to-Text.
* Transcript generation.
* Filler-word detection support.
* Fluency analysis support.

---

## 🙂 Emotion Recognition

The platform uses **DeepFace** for facial emotion analysis.

Used for:

* Facial emotion detection.
* Dominant emotion identification.
* Interview monitoring.

---

## 👁️ Eye Contact Detection

The platform uses:

* MediaPipe Face Mesh.
* OpenCV.

Used for:

* Face landmark detection.
* Eye/camera attention estimation.
* Eye-contact scoring.

---

# 🧠 AI Workflow

```text
Resume Upload
      │
      ▼
Resume Parsing
      │
      ▼
Resume Analysis using Groq
      │
      ▼
Optional Job Description Save
      │
      ▼
Resume ↔ JD Matching
      │
      ▼
Select Interview Type
(HR / Technical / Managerial)
      │
      ▼
Create Interview Session
      │
      ▼
Conversational AI Interview
      │
      ▼
Speech + Webcam Monitoring
      │
      ├── Speech-to-Text
      ├── Filler Detection
      ├── Fluency Analysis
      ├── Emotion Detection
      └── Eye Contact Detection
      │
      ▼
AI Answer Evaluation
      │
      ▼
Overall Interview Analysis
      │
      ▼
Analytics / Feedback / PDF Report
```

---

# 🗄️ Database Design

The SmartHire AI database is implemented using PostgreSQL.

| Table                         | Description                                       |
| ----------------------------- | ------------------------------------------------- |
| `users`                       | Platform users with roles                         |
| `resumes`                     | Uploaded resumes                                  |
| `resume_analysis`             | AI-generated resume insights                      |
| `job_descriptions`            | Job Description text associated with users        |
| `interview_questions`         | Generated interview questions                     |
| `interview_sessions`          | Interview sessions with interview type and status |
| `interview_conversations`     | Conversational interview history                  |
| `interview_answers`           | Candidate answers                                 |
| `interview_evaluations`       | AI evaluation of candidate answers                |
| `interview_monitor_reports`   | Final interview monitoring report                 |
| `interview_monitor_snapshots` | Timeline monitoring and analytics snapshots       |
| `recruiter_shortlists`        | Recruiter shortlist decisions                     |

The database architecture maintains referential integrity through foreign-key relationships and supports cascade-safe data cleanup.

---

# 🔒️ Security Features

SmartHire AI implements multiple security mechanisms:

* JWT Authentication.
* BCrypt Password Hashing.
* Role-Based Access Control.
* Protected API endpoints.
* Protected frontend routes.
* Owner-restricted resume access.
* Authenticated interview access.
* Role-restricted recruiter features.
* Role-restricted administrator features.
* Pydantic input validation.
* SQLAlchemy ORM.
* Environment-based secret configuration.
* Secure account deletion.
* Related data cleanup using database relationships.

Sensitive credentials such as database passwords, JWT secrets, and API keys are stored using environment variables rather than hard-coded values.

---

# 📁 Project Structure

```text
SmartHire-AI
│
├── backend
│   ├── alembic
│   ├── app
│   │   ├── ai
│   │   ├── api
│   │   ├── auth
│   │   ├── core
│   │   ├── database
│   │   ├── models
│   │   ├── repositories
│   │   ├── schemas
│   │   ├── services
│   │   ├── utils
│   │   └── main.py
│   │
│   ├── uploads
│   │   ├── resumes
│   │   ├── audio
│   │   └── images
│   │
│   ├── reports
│   ├── requirements.txt
│   └── .env
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── contexts
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   └── App.tsx
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── docs
│   ├── ProjectScope.md
│   ├── FunctionalRequirements.md
│   ├── NonFunctionalRequirements.md
│   ├── DatabaseDesign.md
│   ├── ERDiagram.md
│   ├── UIWireframes.md
│   └── UserWorkflows.md
│
├── .gitignore
└── README.md
```

---

# 🌐 REST API Documentation

## Base URL

```text
http://127.0.0.1:8000/api/v1
```

> Exact endpoint paths may vary slightly depending on router prefixes. Use the Swagger documentation available at `/docs` for live API confirmation.

---

## Authentication & User APIs

| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| POST   | `/auth/register` | Register a user with role |
| POST   | `/auth/login`    | Login                     |
| GET    | `/users/me`      | Get current user          |
| DELETE | `/users/me`      | Delete own account        |
| GET    | `/users`         | List users (Admin)        |

---

## Resume APIs

| Method | Endpoint                | Description                 |
| ------ | ----------------------- | --------------------------- |
| POST   | `/resume/upload`        | Upload resume               |
| GET    | `/resume/me`            | List current user's resumes |
| GET    | `/resume/{id}`          | Get resume details          |
| GET    | `/resume/download/{id}` | Download resume             |
| GET    | `/resume/analyze/{id}`  | Analyze resume              |
| DELETE | `/resume/{id}`          | Delete resume               |

---

## Job Description APIs

| Method | Endpoint                             | Description                       |
| ------ | ------------------------------------ | --------------------------------- |
| POST   | `/job-description`                   | Save Job Description              |
| GET    | `/job-description`                   | Get saved Job Description         |
| POST   | `/job-description/match/{resume_id}` | Match resume with Job Description |

---

## Interview APIs

| Method | Endpoint                         | Description                        |
| ------ | -------------------------------- | ---------------------------------- |
| POST   | `/interview/start/{resume_id}`   | Start interview with selected type |
| POST   | `/interview/chat/{session_id}`   | Continue conversational interview  |
| POST   | `/interview/finish/{session_id}` | Finish interview                   |
| GET    | `/interview/sessions`            | Get interview sessions             |
| GET    | `/interview/report/{session_id}` | Get interview report               |

---

## Monitoring & Analytics APIs

| Method | Endpoint                                    | Description                  |
| ------ | ------------------------------------------- | ---------------------------- |
| POST   | `/interview-monitor/analyze`                | Analyze interview media      |
| GET    | `/interview-monitor/history`                | Get monitoring history       |
| GET    | `/interview-monitor/analytics/{session_id}` | Get interview analytics      |
| GET    | `/feedback/{session_id}`                    | Get AI feedback              |
| GET    | `/report/{session_id}`                      | Generate/download PDF report |

---

## Recruiter Shortlist APIs

| Method | Endpoint               | Description                    |
| ------ | ---------------------- | ------------------------------ |
| GET    | `/recruiter/shortlist` | List shortlist statuses        |
| POST   | `/recruiter/shortlist` | Create/update shortlist status |

---

# ⚙️ Installation Guide

## Prerequisites

Install the following:

* Python 3.10+
* Node.js 20+
* PostgreSQL 15+
* Git

Verify the installations:

```bash
python --version
node --version
npm --version
psql --version
git --version
```

---

# 📥 Clone Repository

```bash
git clone https://github.com/SohamDey2005/SmartHire-AI.git
cd SmartHire-AI
```

---

# 🐍 Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv .venv
```

### Windows

```bash
.venv\Scripts\activate
```

### Linux / macOS

```bash
source .venv/bin/activate
```

Upgrade pip:

```bash
python -m pip install --upgrade pip
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Install the required spaCy model:

```bash
python -m spacy download en_core_web_sm
```

---

# 🔐 Environment Variables

Create a file named:

```text
backend/.env
```

Add the following configuration:

```env
APP_NAME=SmartHire AI
APP_VERSION=1.0.0
DEBUG=True
HOST=127.0.0.1
PORT=8000

SECRET_KEY=your_long_random_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/smarthire_ai

FRONTEND_URL=http://localhost:5173

GROQ_API_KEY=your_groq_api_key
```

Replace:

* `YOUR_PASSWORD` with the PostgreSQL password.
* `your_long_random_secret_key` with a secure secret key.
* `your_groq_api_key` with the Groq API key.

**Do not commit `.env` to GitHub.**

---

# 🐘 PostgreSQL Setup

Create the database:

```sql
CREATE DATABASE smarthire_ai;
```

Run database migrations from the `backend` directory:

```bash
alembic upgrade head
```

---

# 🚀 Start Backend

From the `backend` directory:

```bash
uvicorn app.main:app --reload
```

Backend:

```text
http://127.0.0.1:8000
```

Swagger API documentation:

```text
http://127.0.0.1:8000/docs
```

ReDoc:

```text
http://127.0.0.1:8000/redoc
```

---

# ⚛️ Frontend Setup

Open a new terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 📂 Upload & Report Directories

Ensure the following directories exist:

```text
backend/uploads/resumes/
backend/uploads/audio/
backend/uploads/images/
backend/reports/
```

These directories are used for storing uploaded resumes, audio/image processing data, and generated reports.

---

# 🧪 Recommended Test Flow

Follow the following sequence to test the complete platform:

1. Register as a Candidate.
2. Login as Candidate.
3. Upload a PDF resume.
4. Analyze the resume using AI.
5. Save a Job Description.
6. Run Resume ↔ JD Match.
7. Select an interview type:
   * HR
   * Technical
   * Managerial
8. Start the AI interview.
9. Allow microphone and webcam permissions.
10. Answer interview questions.
11. Complete the interview.
12. Review interview analytics.
13. Review AI feedback.
14. Download the PDF report.
15. Register/Login as Recruiter.
16. View completed interview sessions.
17. Shortlist, reject, or mark a session as pending.
18. Register/Login as Admin.
19. View platform users and role statistics.

---

# 📸 Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Login Page
![Login Page](screenshots/login.png)

### Registration Page
![Registration Page](screenshots/register.png)

### Candidate Dashboard
![Candidate Dashboard](screenshots/candidate-dashboard.png)

### Resume Analysis
![Resume Analysis](screenshots/resume-analysis.png)

### Job Description + Match
![JD Match](screenshots/jd-match.png)

### Interview Type Selection
![Interview Type](screenshots/interview-type.png)

### Interview Room
![Interview Room](screenshots/interview-room.png)

### Interview Analytics
![Interview Analytics](screenshots/interview-analytics.png)

### AI Feedback
![AI Feedback](screenshots/ai-feedback.png)

### Recruiter Dashboard
![Recruiter Dashboard](screenshots/recruiter-dashboard.png)

### Admin Dashboard
![Admin Dashboard](screenshots/admin-dashboard.png)

---

# 📈 Milestone Progress

## ✅ Milestone 1 — Foundation

Completed:

* Requirements and architecture.
* Database design.
* PostgreSQL integration.
* Authentication.
* JWT Authorization.
* Role-Based Access Control.
* Resume management.
* Candidate dashboard foundation.

---

## ✅ Milestone 2 — AI Recruitment Engine

Completed:

* Resume parsing.
* AI resume analysis.
* Skill extraction.
* Interview question generation.
* Conversational interview generation.
* Interview session management.
* AI interview workflow.
* Candidate answer evaluation.

---

## ✅ Milestone 3 — AI Monitoring

Completed:

* Speech-to-Text.
* Emotion Recognition.
* Eye Contact Detection.
* Filler Word Detection.
* Fluency Analysis.
* Communication Analysis.
* Interview Monitoring.
* Monitoring Reports.
* Monitoring Snapshots.
* Analytics support.

---

## ✅ Milestone 4 — Platform Completion

Completed:

* Job Description Management.
* Resume ↔ JD Match.
* Interview Type Selection.
* HR / Technical / Managerial interviews.
* Recruiter Dashboard.
* Recruiter Shortlisting.
* Admin Dashboard.
* Admin User Visibility.
* Account Deletion.
* Full role-based frontend protection.
* Documentation.

---

## ⏳ Remaining

* Cloud Deployment.

---

# 🛠️ Troubleshooting

## PostgreSQL Connection Error

Check that:

* PostgreSQL is running.
* The database `smarthire_ai` exists.
* `DATABASE_URL` is correct.
* PostgreSQL username and password are correct.

Example:

```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/smarthire_ai
```

---

## Python Module Not Found

Activate the virtual environment:

### Windows

```bash
.venv\Scripts\activate
```

Then reinstall dependencies:

```bash
pip install -r requirements.txt
```

---

## Frontend Installation Issues

If dependency installation causes problems, remove `node_modules` and reinstall.

### Windows Command Prompt

```cmd
rmdir /s /q node_modules
npm install
```

### PowerShell

```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

---

## Camera / Microphone Not Working

Check the following:

* Allow browser camera permissions.
* Allow browser microphone permissions.
* Prefer Google Chrome or Microsoft Edge.
* Ensure another application is not using the camera or microphone.
* Restart the browser after changing permissions.

---

## AI Features Not Working

Check:

* `GROQ_API_KEY` is correctly configured.
* The `.env` file is inside the `backend` directory.
* The backend server is running.
* Internet connectivity is available.
* Required AI dependencies are installed.

---

# 🚀 Deployment

The current implementation is complete for local development and testing.

**Cloud deployment remains the major production step.**

Potential deployment architecture:

```text
                   ┌─────────────────────┐
                   │   Frontend Hosting  │
                   │  Vercel / Netlify   │
                   └──────────┬──────────┘
                              │
                         HTTPS / API
                              │
                   ┌──────────▼──────────┐
                   │   Backend Hosting   │
                   │ Render / Railway /  │
                   │        AWS          │
                   └──────────┬──────────┘
                              │
                   ┌──────────▼──────────┐
                   │ Managed PostgreSQL   │
                   │      Database       │
                   └─────────────────────┘
```

Potential deployment targets include:

* **Frontend:** Vercel / Netlify.
* **Backend:** Render / Railway / AWS.
* **Database:** Managed PostgreSQL.
* **Containerization:** Docker.
* **CI/CD:** GitHub Actions or equivalent.

Production deployment should also include appropriate environment configuration, HTTPS, secret management, logging, monitoring, and infrastructure hardening.

---

# 📊 Project Status

| Category                   | Status      |
| -------------------------- | ----------- |
| Frontend                   | ✅ Completed |
| Backend                    | ✅ Completed |
| Database                   | ✅ Completed |
| Authentication + Roles     | ✅ Completed |
| Resume Management          | ✅ Completed |
| Resume Analysis            | ✅ Completed |
| Job Description + Match    | ✅ Completed |
| Interview Types            | ✅ Completed |
| Conversational Interviews  | ✅ Completed |
| Interview Monitoring       | ✅ Completed |
| Speech Analysis            | ✅ Completed |
| Emotion Recognition        | ✅ Completed |
| Eye Contact Detection      | ✅ Completed |
| Filler / Fluency Analysis  | ✅ Completed |
| AI Answer Evaluation       | ✅ Completed |
| Analytics / Feedback / PDF | ✅ Completed |
| Recruiter Shortlisting     | ✅ Completed |
| Admin User View            | ✅ Completed |
| Account Deletion           | ✅ Completed |
| Documentation              | ✅ Completed |
| Cloud Deployment           | ⏳ Pending   |

---

# 📚 Documentation

Detailed project documentation is available inside the `docs` directory:

| Document                       | Description                                                             |
| ------------------------------ | ----------------------------------------------------------------------- |
| `ProjectScope.md`              | Project scope, objectives, users, modules, and milestones               |
| `FunctionalRequirements.md`    | Functional requirements of the platform                                 |
| `NonFunctionalRequirements.md` | Performance, security, scalability, usability, and quality requirements |
| `DatabaseDesign.md`            | Database schema and design                                              |
| `ERDiagram.md`                 | Entity Relationship Diagram                                             |
| `UIWireframes.md`              | Application interface wireframes                                        |
| `UserWorkflows.md`             | Candidate, Recruiter, Admin, and AI workflows                           |

---

# 👨‍💻 Author

**Soham Dey**

B.E. Computer Science & Engineering
University Institute of Technology, The University of Burdwan

Machine Learning • Artificial Intelligence • Full-Stack Development

* GitHub: https://github.com/SohamDey2005
* LinkedIn: https://www.linkedin.com/in/sohamdeydurgapur

---

# ⭐ Summary

SmartHire AI is a complete AI-powered interview and recruitment support platform that integrates:

* Multi-role authentication.
* Resume management.
* AI-powered resume analysis.
* Job Description matching.
* HR / Technical / Managerial AI interviews.
* Conversational interview workflows.
* AI answer evaluation.
* Speech-to-Text.
* Emotion recognition.
* Eye-contact detection.
* Filler-word and fluency analysis.
* Real-time interview monitoring.
* Analytics and AI feedback.
* PDF interview reports.
* Recruiter shortlisting.
* Admin user visibility.
* Role-based dashboards.

The platform provides an end-to-end workflow for candidates, recruiters, and administrators while maintaining a modular architecture suitable for future production deployment.

**The only major remaining production step is cloud deployment.**
