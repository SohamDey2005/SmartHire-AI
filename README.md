![Python](https://img.shields.io/badge/Python-3.10-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![React](https://img.shields.io/badge/React-19-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![Groq](https://img.shields.io/badge/Groq-LLM-orange)
![License](https://img.shields.io/badge/License-MIT-green)

# SmartHire AI

An AI-powered Resume Management and Recruitment Platform built using **FastAPI**, **React**, **TypeScript**, **PostgreSQL**, and **Groq LLM API**.

SmartHire AI streamlines the recruitment process by enabling candidates to securely manage resumes, receive AI-powered resume analysis, generate personalized interview questions, participate in AI-driven mock interviews, and receive detailed interview evaluation reports.

---

# 📌 Project Overview

SmartHire AI is an intelligent recruitment platform that combines modern web technologies with Generative AI to enhance the hiring experience for both candidates and recruiters.

The platform currently supports:

- Secure User Authentication
- Resume Management
- AI Resume Analysis
- AI Skill Extraction
- AI Interview Question Generation
- Interview Session Management
- AI Answer Evaluation
- AI Interview Reports

Future milestones will introduce speech analysis, emotion recognition, eye-contact tracking, recruiter analytics, and cloud deployment.

---

# 🚀 Features (Milestone 2)

## 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Password Hashing (BCrypt)
- Protected Routes
- Role-Based Access Control
- Logout

---

## 📄 Resume Management

- Upload Resume (PDF)
- View Uploaded Resumes
- Download Resume
- Delete Resume
- Resume Storage
- Resume Parsing

---

## 🤖 AI Resume Analysis

Powered by **Groq LLM (Llama 3.3 70B Versatile)**

Automatically extracts:

- Technical Skills
- Soft Skills
- Frameworks
- Tools
- Databases
- Cloud Technologies
- Certifications
- Education Details
- Work Experience
- Projects

---

## 🎤 AI Interview System

- AI Interview Question Generation
- Personalized Questions based on Resume
- Interview Session Creation
- Question-wise Answer Submission
- AI Answer Evaluation
- Overall Interview Score
- AI Feedback Generation
- Interview Report

---

## 💻 Candidate Dashboard

- Secure Dashboard
- Resume Management
- AI Resume Analysis
- AI Interview Access
- Interview Reports
- Responsive UI

---

## ⚙ Backend

- REST APIs using FastAPI
- SQLAlchemy ORM
- PostgreSQL Integration
- JWT Authentication
- Repository Pattern
- Service Layer Architecture
- Pydantic Validation

---

# 🛠 Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast

---

## Backend

- FastAPI
- SQLAlchemy
- PostgreSQL
- Alembic
- Pydantic
- JWT Authentication
- Passlib (BCrypt)

---

## Artificial Intelligence

- Groq API
- Llama 3.3 70B Versatile
- Prompt Engineering
- Resume Parsing
- Skill Extraction
- Resume Analysis
- Interview Question Generation
- Interview Answer Evaluation
- Structured JSON Output

---

## Database

- PostgreSQL

---

# 📂 Project Structure

```
SmartHire-AI
│
├── backend
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
│   │   └── ...
│   │
│   ├── uploads
│   ├── alembic
│   ├── requirements.txt
│   └── ...
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── contexts
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   └── ...
│   │
│   ├── public
│   └── ...
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
└── README.md
```

---

# 🌐 REST API Endpoints

## Authentication

```
POST   /api/v1/auth/register
POST   /api/v1/auth/login
GET    /api/v1/users/me
```

---

## Resume

```
POST   /api/v1/resume/upload
GET    /api/v1/resume/me
GET    /api/v1/resume/{id}
GET    /api/v1/resume/download/{id}
GET    /api/v1/resume/analyze/{id}
DELETE /api/v1/resume/{id}
```

---

## Interview

```
GET    /api/v1/interview/generate/{resume_id}
POST   /api/v1/interview/start/{resume_id}
POST   /api/v1/interview/finish/{session_id}
GET    /api/v1/interview/sessions
```

---

# ⚙ Installation

## 1. Clone Repository

```bash
git clone https://github.com/SohamDey2005/SmartHire-AI.git

cd SmartHire-AI
```

---

## 2. Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

Create a `.env` file.

```env
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/smarthire_ai

SECRET_KEY=your_secret_key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=60

GROQ_API_KEY=your_groq_api_key
```

Run backend

```bash
uvicorn app.main:app --reload
```

Backend

```
http://127.0.0.1:8000
```

Swagger

```
http://127.0.0.1:8000/docs
```

---

## 3. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend

```
http://localhost:5173
```

---

# 🗄 Database

Current Database Tables

- Users
- Resumes
- Resume Analysis
- Interview Questions
- Interview Sessions
- Interview Answers

Future Tables

- Jobs
- Applications
- Notifications
- Recruiter Feedback

---

# 📖 Documentation

Project documentation is available inside the **docs/** directory.

- Project Scope
- Functional Requirements
- Non-Functional Requirements
- Database Design
- ER Diagram
- UI Wireframes
- User Workflows

---

# ✅ Milestone Progress

## ✅ Milestone 1 (Completed)

- Project Setup
- FastAPI Backend
- React Frontend
- PostgreSQL Integration
- SQLAlchemy ORM
- JWT Authentication
- Role-Based Access Control
- Candidate Dashboard
- Resume Upload
- Resume Download
- Resume Delete
- Protected Routes

---

## ✅ Milestone 2 (Completed)

- Resume Parsing
- AI Resume Analysis
- Skill Extraction
- Education Extraction
- Experience Extraction
- Project Extraction
- AI Interview Question Generation
- Interview Session Management
- AI Answer Evaluation
- Interview Reports

---

# 🚧 Upcoming Milestones

## Milestone 3

- Speech-to-Text
- Filler Word Detection
- Emotion Recognition
- Eye Contact Tracking
- Confidence Analysis
- Real-Time AI Monitoring

---

## Milestone 4

- Analytics Dashboard
- Performance Charts
- Recruiter Dashboard
- Admin Dashboard
- Notifications
- Cloud Deployment
- End-to-End Testing

---

# 📷 Screenshots

Screenshots will be added after completion of the remaining milestones.

Planned screenshots include:

- Home Page
- Login
- Register
- Candidate Dashboard
- Resume Upload
- Resume Analysis
- AI Interview
- Interview Report

---

# 👨‍💻 Author

**Soham Dey**

B.E. Computer Science & Engineering

University Institute of Technology, The University of Burdwan

Machine Learning • Artificial Intelligence • Full-Stack Development

GitHub:
https://github.com/SohamDey2005

LinkedIn:
https://www.linkedin.com/in/sohamdeydurgapur

---

# ⭐ Project Status

**Current Version:** **v2.0 (Milestone 2)**

✅ Milestone 1 Completed

✅ Milestone 2 Completed

🚀 SmartHire AI now supports AI-powered resume analysis, interview question generation, AI interview evaluation, and intelligent recruitment workflows.

The project is actively being enhanced with speech analysis, emotion detection, eye-contact tracking, analytics dashboards, and cloud deployment in the upcoming milestones.