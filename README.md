![Python](https://img.shields.io/badge/Python-3.10-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![React](https://img.shields.io/badge/React-19-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![License](https://img.shields.io/badge/License-MIT-green)

# SmartHire AI

An AI-powered Resume Management and Recruitment Platform built using **FastAPI**, **React**, and **PostgreSQL**. The platform enables candidates to securely manage resumes while laying the foundation for AI-powered resume analysis, mock interviews, and recruiter-driven hiring workflows.

---

# 📌 Project Overview

SmartHire AI is designed to simplify the recruitment process for both candidates and recruiters.

Current implementation (Milestone 1) includes:

- Secure JWT Authentication
- Role-Based Access Control (RBAC)
- Resume Management System
- Protected Candidate Dashboard
- PostgreSQL Integration
- RESTful Backend APIs

Future milestones will introduce AI-powered resume parsing, ATS scoring, interview generation, candidate evaluation, and recruiter dashboards.

---

# 🚀 Features (Milestone 1)

### Authentication

- User Registration
- Secure Login
- JWT Authentication
- Logout
- Protected Routes
- Role-Based Access Control (Candidate, Recruiter, Administrator)

### Resume Management

- Upload PDF Resume
- View Uploaded Resumes
- Download Resume
- Delete Resume

### Dashboard

- Candidate Dashboard
- Live User Information
- Responsive UI
- Resume Management Portal

### Backend

- REST APIs using FastAPI
- SQLAlchemy ORM
- PostgreSQL Database
- Password Hashing using BCrypt
- JWT Token Authentication

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- React Hot Toast

## Backend

- FastAPI
- SQLAlchemy
- PostgreSQL
- Alembic
- Passlib (BCrypt)
- JWT Authentication
- Pydantic

---

# 📂 Project Structure

```
SmartHire-AI
│
├── backend
│   ├── app
│   ├── uploads
│   ├── alembic
│   ├── requirements.txt
│   └── ...
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
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

# ⚙️ Installation

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

Create a `.env` file inside the backend folder.

Example:

```env
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/smarthire_ai
SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
```

Run the backend:

```bash
uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

## 3. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🗄 Database

Database: PostgreSQL

Current Tables

- Users
- Resumes

Future Tables

- Jobs
- Applications
- Interviews
- Interview Questions
- Interview Responses
- AI Feedback
- Notifications
- Skills

---

# 📖 Documentation

Project documentation is available in the **docs/** directory.

- Project Scope
- Functional Requirements
- Non-Functional Requirements
- Database Design
- ER Diagram
- UI Wireframes
- User Workflows

---

# ✅ Milestone 1 Status

Completed

✔ Project Setup

✔ FastAPI Backend

✔ React Frontend

✔ PostgreSQL Integration

✔ SQLAlchemy ORM

✔ JWT Authentication

✔ Role-Based Access Control

✔ Candidate Dashboard

✔ Resume Upload

✔ Resume Download

✔ Resume Delete

✔ Protected Routes

✔ Documentation

---

# 🚧 Upcoming Milestones

## Milestone 2

- Resume Parsing
- AI Resume Analysis
- ATS Score Generation
- Skill Extraction
- Resume Feedback

## Milestone 3

- Job Management
- Candidate Applications
- Recruiter Dashboard
- Job Matching
- Notifications

## Milestone 4

- AI Mock Interview
- Speech-to-Text
- AI Evaluation
- Performance Reports
- Analytics Dashboard

---

## 📷 Screenshots

Screenshots will be added after the completion of all four project milestones.

---

## 👨‍💻 Author

**Soham Dey**

B.E. in Computer Science & Engineering (CSE)

Machine Learning | Artificial Intelligence | Full-Stack Development

GitHub: https://github.com/SohamDey2005

LinkedIn: https://www.linkedin.com/in/sohamdeydurgapur

---

# ⭐ Project Status

**Current Version:** v1.0 (Milestone 1)

✅ Milestone 1 Completed 

The project is actively being developed with AI-powered recruitment features planned in the upcoming milestones.