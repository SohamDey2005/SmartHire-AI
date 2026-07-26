# 🤖 SmartHire AI

### AI-Powered Recruitment Platform with Resume Analysis, Mock Interviews, Real-Time Interview Monitoring & AI Analytics

![Python](https://img.shields.io/badge/Python-3.10-blue?style=for-the-badge&logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-0.138-green?style=for-the-badge&logo=fastapi)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?style=for-the-badge&logo=postgresql)
![Groq](https://img.shields.io/badge/Groq-LLM-orange?style=for-the-badge)

**An intelligent recruitment platform that leverages Artificial Intelligence to automate resume analysis, conduct AI-powered mock interviews, monitor candidate performance in real time, and generate comprehensive interview analytics.**

---

# 📑 Table of Contents

- Project Overview
- Key Features
- System Architecture
- Tech Stack
- Project Structure
- REST API Endpoints
- Installation
- Environment Variables
- Database
- AI Models Used
- Screenshots
- Milestone Progress
- Roadmap
- Author

---

# 📌 Project Overview

SmartHire AI is a full-stack AI-powered recruitment platform designed to simplify and modernize the hiring process.

The platform enables candidates to upload resumes, receive detailed AI-powered resume analysis, generate personalized interview questions, participate in AI-driven mock interviews, receive intelligent answer evaluation, and monitor communication skills using speech and computer vision.

The project combines modern web development with Generative AI, Speech Processing, Computer Vision, and Natural Language Processing to create a realistic interview experience.

---

# 🎯 Objectives

- Simplify recruitment workflows
- Analyze resumes using Large Language Models
- Generate personalized interview questions
- Evaluate interview answers using AI
- Monitor candidate behavior during interviews
- Analyze communication skills
- Generate interview analytics and reports
- Improve candidate preparation through AI feedback

---

# ✨ Key Features

## 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Password Hashing (BCrypt)
- Protected APIs
- Role-Based Access Control
- Logout

---

## 📄 Resume Management

- Upload PDF Resume
- Resume Storage
- Resume Download
- Resume Deletion
- Resume Parsing
- Resume Dashboard

---

## 🤖 AI Resume Analysis

Powered by **Groq Llama 3.3 70B Versatile**

Automatically extracts:

- Technical Skills
- Soft Skills
- Frameworks
- Libraries
- Programming Languages
- Databases
- Cloud Technologies
- Certifications
- Education
- Work Experience
- Projects
- Resume Summary

---

## 🎤 AI Interview Question Generation

Generate personalized interview questions directly from the uploaded resume.

Features include:

- Technical Questions
- HR Questions
- Project-based Questions
- Resume-based Questions
- Difficulty Levels
- Expected Answer Points

---

## 💬 AI Mock Interview

Candidates can participate in AI-driven mock interviews.

Features:

- Interview Sessions
- Question-wise Answer Submission
- AI Answer Evaluation
- Strength Analysis
- Weakness Analysis
- Ideal Answer Generation
- AI Feedback
- Interview Score

---

## 🎥 AI Interview Monitoring

During every interview answer, SmartHire AI continuously monitors candidate performance.

Features:

- Voice Recording
- Speech-to-Text
- Emotion Detection
- Eye Contact Detection
- Filler Word Detection
- Fluency Analysis
- Communication Score
- Overall Monitoring Score
- AI Recommendation
- Real-Time Monitoring Dashboard

---

## 📊 Interview Analytics

After interview completion, candidates receive:

- Overall Interview Score
- Communication Analysis
- Speech Analysis
- Emotion Summary
- Eye Contact Statistics
- Filler Word Statistics
- AI Feedback
- Performance Report
- Interview History

---

## 💻 Candidate Dashboard

The candidate dashboard provides:

- Resume Management
- Resume Analysis
- Interview Sessions
- Interview Monitoring
- Interview Reports
- Analytics Dashboard
- Secure Profile Management

---

# 🏗 System Architecture

The SmartHire AI platform follows a modern three-tier architecture.

```
                    +---------------------------+
                    |       React Frontend      |
                    |  TypeScript + TailwindCSS |
                    +------------+--------------+
                                 |
                                 |
                        REST API (Axios)
                                 |
                                 |
                    +------------v--------------+
                    |      FastAPI Backend      |
                    | Authentication            |
                    | Resume Management         |
                    | Interview Engine          |
                    | AI Monitoring             |
                    | Analytics                 |
                    +------------+--------------+
                                 |
                ----------------------------------------
                |                  |                   |
                |                  |                   |
      +---------v------+   +-------v-------+   +-------v--------+
      | PostgreSQL DB  |   |   Groq API    |   | AI Models      |
      |                |   | Llama 3.3 70B |   | Whisper         |
      | Users          |   |               |   | DeepFace        |
      | Resumes        |   | Resume AI     |   | MediaPipe       |
      | Interviews     |   | Evaluation    |   | OpenCV          |
      +----------------+   +---------------+   +----------------+
```

---

# ⚙ Technology Stack

## 🎨 Frontend

The frontend is built using modern React technologies.

| Technology | Purpose |
|------------|---------|
| React 19 | User Interface |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| React Router DOM | Routing |
| Axios | API Communication |
| React Webcam | Camera Integration |

---

## 🚀 Backend

The backend provides REST APIs and business logic.

| Technology | Purpose |
|------------|---------|
| FastAPI | REST APIs |
| SQLAlchemy | ORM |
| Alembic | Database Migration |
| PostgreSQL | Database |
| Pydantic | Validation |
| JWT | Authentication |
| Passlib (BCrypt) | Password Hashing |
| Uvicorn | ASGI Server |

---

# 🤖 Artificial Intelligence Stack

SmartHire AI integrates multiple AI technologies.

## 🧠 Large Language Model

- Groq API
- Llama 3.3 70B Versatile
- Prompt Engineering
- Structured JSON Output

Used for:

- Resume Analysis
- Skill Extraction
- Resume Summarization
- Interview Question Generation
- Interview Answer Evaluation
- AI Feedback Generation

---

## 🎙 Speech Processing

### OpenAI Whisper

Speech recordings are automatically converted into text.

Features:

- Automatic Speech Recognition
- High Accuracy
- Noise Robustness
- English Speech Recognition

Used for:

- Interview Transcript
- Speech Analysis
- Communication Evaluation

---

## 😊 Emotion Recognition

### DeepFace

DeepFace analyzes facial expressions captured through the webcam.

Supported emotions include:

- Happy
- Neutral
- Sad
- Angry
- Fear
- Surprise
- Disgust

The dominant emotion is displayed in real time during interviews.

---

## 👀 Eye Contact Detection

Eye contact tracking is implemented using:

- MediaPipe Face Mesh
- OpenCV

Features:

- Detects if the candidate is looking at the camera
- Calculates eye alignment
- Provides eye-contact confidence

---

## 🗣 Communication Analysis

Speech is analyzed to evaluate communication quality.

Current metrics:

- Transcript Generation
- Filler Word Detection
- Fluency Score
- Communication Score
- Overall AI Recommendation

---

# 🧠 AI Workflow

The interview pipeline works as follows:

```
Resume Upload
        │
        ▼
Resume Parsing
        │
        ▼
Resume Analysis (Groq)
        │
        ▼
Question Generation
        │
        ▼
Interview Session
        │
        ▼
Audio Recording
        │
        ▼
Whisper Speech-to-Text
        │
        ▼
DeepFace Emotion Detection
        │
        ▼
MediaPipe Eye Contact Detection
        │
        ▼
Filler Word Analysis
        │
        ▼
AI Answer Evaluation
        │
        ▼
Interview Analytics
```

---

# 🗄 Database Design

Current database tables include:

| Table | Description |
|--------|-------------|
| users | Candidate information |
| resumes | Uploaded resumes |
| resume_analysis | AI resume analysis |
| interview_questions | AI generated questions |
| interview_sessions | Interview sessions |
| interview_answers | Candidate answers |
| interview_evaluations | AI evaluation reports |
| interview_monitor_snapshots | Real-time monitoring snapshots |
| interview_monitor_reports | Final interview monitoring reports |

---

# 🔒 Security Features

SmartHire AI follows security best practices.

Authentication:

- JWT Authentication
- Secure Password Hashing
- Token-based Authorization

Database:

- SQLAlchemy ORM
- Parameterized Queries
- Foreign Key Constraints
- Cascading Deletes

Backend:

- Input Validation
- Pydantic Schemas
- Exception Handling
- Protected Routes

Frontend:

- Route Guards
- Secure API Calls
- Token Storage
- Responsive Design

---

# 📈 Current Project Statistics

### Backend

- 40+ REST APIs
- SQLAlchemy ORM
- Repository Pattern
- Service Layer Architecture

### Frontend

- React Components
- Responsive Pages
- Tailwind CSS UI
- AI Monitoring Dashboard

### Artificial Intelligence

- Resume Analysis
- Interview Question Generation
- Answer Evaluation
- Speech Recognition
- Emotion Detection
- Eye Contact Detection
- Communication Analysis

---

# 📁 Project Structure

```text
SmartHire-AI
│
├── backend
│   ├── alembic
│   │
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
│   ├── requirements.txt
│   └── .env
│
├── frontend
│   ├── public
|   |
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── contexts
│   │   ├── hooks
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── styles
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

The backend exposes RESTful APIs built with **FastAPI**.

Base URL

```
http://127.0.0.1:8000/api/v1
```

---

# 🔐 Authentication APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login user |
| GET | `/users/me` | Get logged-in user |

---

# 📄 Resume APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/resume/upload` | Upload Resume |
| GET | `/resume/me` | Get All User Resumes |
| GET | `/resume/{id}` | Resume Details |
| GET | `/resume/download/{id}` | Download Resume |
| GET | `/resume/analyze/{id}` | AI Resume Analysis |
| DELETE | `/resume/{id}` | Delete Resume |

---

# 🤖 AI Interview APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/interview/generate/{resume_id}` | Generate Interview Questions |
| POST | `/interview/start/{resume_id}` | Start Interview |
| POST | `/interview/evaluate` | Evaluate Answer |
| POST | `/interview/finish/{session_id}` | Finish Interview |
| GET | `/interview/sessions` | Interview History |
| GET | `/interview/report/{session_id}` | Interview Report |

---

# 🎥 Interview Monitoring APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/interview-monitor/analyze` | Analyze Audio + Webcam |
| GET | `/interview-monitor/report/{session_id}` | Monitoring Report |
| GET | `/interview-monitor/history` | Monitoring History |

---

# 📊 Analytics APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/analytics/interview/{session_id}` | Interview Analytics |
| GET | `/analytics/dashboard` | Candidate Dashboard Analytics |

---

# 🔄 Resume Analysis Workflow

```text
Candidate Uploads Resume
          │
          ▼
PDF Parsing
          │
          ▼
Groq LLM Analysis
          │
          ▼
Skill Extraction
          │
          ▼
Database Storage
          │
          ▼
Candidate Dashboard
```

---

# 🎤 Interview Workflow

```text
Resume Selected
       │
       ▼
Generate Questions
       │
       ▼
Start Interview Session
       │
       ▼
Answer Questions
       │
       ▼
AI Evaluation
       │
       ▼
Interview Monitoring
       │
       ▼
Analytics Dashboard
```

---

# 🎥 Interview Monitoring Workflow

```text
Candidate Speaks
       │
       ▼
Audio Recording
       │
       ▼
Speech-to-Text
       │
       ▼
Transcript
       │
       ▼
Filler Word Detection

----------------------------

Webcam Image
       │
       ▼
DeepFace
       │
       ▼
Emotion Detection

----------------------------

Webcam Image
       │
       ▼
MediaPipe
       │
       ▼
Eye Contact Detection

----------------------------

All Results
       │
       ▼
Overall AI Score
       │
       ▼
Recommendation
```

---

# 📊 Database Relationships

```text
User
 │
 └────────── Resume
                  │
                  ├──────── Resume Analysis
                  │
                  ├──────── Interview Questions
                  │
                  └──────── Interview Sessions
                                  │
                                  ├──────── Interview Answers
                                  │                │
                                  │                └──── Interview Evaluation
                                  │
                                  ├──────── Monitor Snapshots
                                  │
                                  └──────── Monitor Reports
```

---

# 📌 Backend Design Pattern

The backend follows a clean layered architecture.

```
API Layer
      │
      ▼
Service Layer
      │
      ▼
Repository Layer
      │
      ▼
SQLAlchemy Models
      │
      ▼
PostgreSQL
```

Benefits:

- Separation of concerns
- Scalable architecture
- Easy testing
- Clean codebase
- Reusable services
- Maintainable project structure

---

# ⚙ Installation Guide

## Prerequisites

Before running SmartHire AI, ensure the following software is installed:

- Python 3.10+
- Node.js 20+
- PostgreSQL 15+
- Git

Verify installation:

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

Navigate to the backend directory.

```bash
cd backend
```

Create a virtual environment.

```bash
python -m venv .venv
```

Activate the virtual environment.

### Windows

```bash
.venv\Scripts\activate
```

### Linux / macOS

```bash
source .venv/bin/activate
```

Upgrade pip.

```bash
python -m pip install --upgrade pip
```

Install project dependencies.

```bash
pip install -r requirements.txt
```

---

# ⚙ Environment Variables

Create a `.env` file inside the **backend** directory.

```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/smarthire_ai

SECRET_KEY=your_secret_key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=60

GROQ_API_KEY=your_groq_api_key
```

---

# 🗄 PostgreSQL Database

Create a PostgreSQL database.

```sql
CREATE DATABASE smarthire_ai;
```

---

# 🧱 Run Database Migrations

Apply Alembic migrations.

```bash
alembic upgrade head
```

---

# ▶ Start Backend Server

```bash
uvicorn app.main:app --reload
```

The backend will be available at:

```
http://127.0.0.1:8000
```

---

# 📖 Swagger API Documentation

FastAPI automatically generates interactive API documentation.

Swagger UI

```
http://127.0.0.1:8000/docs
```

ReDoc

```
http://127.0.0.1:8000/redoc
```

---

# ⚛ Frontend Setup

Open a new terminal.

Navigate to the frontend folder.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Run the React application.

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# 📂 Upload Directories

Ensure the following directories exist before running the application.

```
backend/uploads/

backend/uploads/resumes/

backend/uploads/audio/

backend/uploads/images/
```

If they do not exist, create them manually.

---

# 🧪 Running the Complete Application

Start the services in the following order:

### Terminal 1

```bash
postgresql
```

### Terminal 2

```bash
cd backend

.venv\Scripts\activate

uvicorn app.main:app --reload
```

### Terminal 3

```bash
cd frontend

npm run dev
```

Now open:

```
http://localhost:5173
```

---

# 🧪 Testing the Application

Recommended workflow:

1. Register a new account.
2. Log in.
3. Upload a PDF resume.
4. Analyze the resume using AI.
5. Generate interview questions.
6. Start an interview session.
7. Answer interview questions.
8. Allow microphone and webcam access.
9. View AI evaluation.
10. Review interview analytics.

---

# 📊 Current Database Schema

The application currently contains the following tables:

| Table | Purpose |
|--------|----------|
| users | User accounts |
| resumes | Resume storage |
| resume_analysis | AI-generated resume insights |
| interview_questions | Generated interview questions |
| interview_sessions | Interview session tracking |
| interview_answers | Candidate responses |
| interview_evaluations | AI answer evaluation |
| interview_monitor_snapshots | Webcam monitoring snapshots |
| interview_monitor_reports | Interview monitoring reports |

---

# 📂 Important Project Files

| File | Description |
|------|-------------|
| requirements.txt | Python dependencies |
| package.json | Frontend dependencies |
| alembic.ini | Alembic configuration |
| .env | Environment variables |
| README.md | Project documentation |
| .gitignore | Git ignore rules |

---

# 🛠 Troubleshooting

### PostgreSQL Connection Error

Check that:

- PostgreSQL service is running.
- `DATABASE_URL` is correct.
- Database exists.
- Username and password are valid.

---

### Module Not Found

Activate the virtual environment before running the backend.

```bash
.venv\Scripts\activate
```

Then reinstall dependencies.

```bash
pip install -r requirements.txt
```

---

### Frontend Build Errors

Delete `node_modules` and reinstall.

```bash
rm -rf node_modules

npm install
```

or on Windows:

```cmd
rmdir /s /q node_modules

npm install
```

---

### Alembic Migration Issues

Check the current migration version.

```bash
alembic current
```

Upgrade to the latest migration.

```bash
alembic upgrade head
```

---

### Camera or Microphone Not Working

- Allow browser permissions.
- Use a supported browser (Chrome or Edge).
- Ensure no other application is using the webcam or microphone.

---

# 🚀 Deployment (Planned)

The following deployment targets are planned for future releases:

- Docker
- Render
- Railway
- AWS
- Azure
- Google Cloud Platform

Deployment guides will be added in future milestones.

---

# 📈 Milestone Progress

## ✅ Milestone 1 — Project Foundation

Completed Features:

- Project Planning
- Functional & Non-Functional Requirements
- Database Design
- ER Diagram
- UI Wireframes
- FastAPI Backend Setup
- React + TypeScript Frontend Setup
- PostgreSQL Integration
- SQLAlchemy ORM
- Alembic Migrations
- JWT Authentication
- Role-Based Access Control
- Candidate Dashboard
- Resume Upload
- Resume Download
- Resume Deletion
- Protected Routes

---

## ✅ Milestone 2 — AI Recruitment Engine

Completed Features:

- AI Resume Parsing
- AI Resume Analysis
- Technical Skill Extraction
- Soft Skill Extraction
- Education Extraction
- Experience Extraction
- Project Extraction
- Certification Extraction
- AI Interview Question Generation
- Interview Session Management
- AI Answer Evaluation
- AI Feedback Generation
- Interview Reports

---

## ✅ Milestone 3 — AI Interview Monitoring

Completed Features:

- Speech-to-Text Transcription
- Emotion Recognition
- Eye Contact Detection
- Filler Word Detection
- Fluency Analysis
- Overall AI Monitoring Score
- AI Recommendation Engine
- Real-Time Monitoring Dashboard
- Monitoring Reports
- Interview Analytics
- Improved Loading UI with Skeleton Animations

---

# 🚀 Upcoming Milestones

## 🔹 Milestone 4

Planned Features:

- Recruiter Dashboard
- Candidate Ranking
- Resume Shortlisting
- Job Posting Management
- Application Tracking System
- Recruiter Analytics
- Admin Dashboard
- Email Notifications
- Advanced Charts & Graphs
- PDF Report Export

---

## 🔹 Milestone 5

Future Enhancements:

- Live AI Interview
- Voice-Based Interview
- AI Avatar Interviewer
- Behavioral Question Generation
- Coding Interview Module
- Video Recording
- Cloud Deployment
- Docker Support
- CI/CD Pipeline
- Multi-Language Support
- Mobile Responsive Improvements

---

# 📸 Screenshots

Screenshots will be added after the completion of the remaining milestones.

Planned screenshots include:

- Landing Page
- Login
- Register
- Dashboard
- Resume Upload
- Resume Analysis
- Resume Details
- Interview Questions
- AI Interview
- Interview Monitoring
- Analytics Dashboard
- Interview Report

---

# 📊 Project Statistics

| Category | Status |
|----------|--------|
| Frontend | ✅ Completed |
| Backend | ✅ Completed |
| Database | ✅ Completed |
| Authentication | ✅ Completed |
| Resume Management | ✅ Completed |
| Resume Analysis | ✅ Completed |
| Interview Generation | ✅ Completed |
| Interview Evaluation | ✅ Completed |
| Speech Analysis | ✅ Completed |
| Emotion Detection | ✅ Completed |
| Eye Contact Detection | ✅ Completed |
| Filler Word Detection | ✅ Completed |
| Interview Analytics | ✅ Completed |

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing using BCrypt
- Protected API Endpoints
- Role-Based Access Control
- Secure File Uploads
- Input Validation using Pydantic
- SQLAlchemy ORM Protection
- Environment Variable Configuration

---

# ⚡ Performance Highlights

- FastAPI asynchronous APIs
- PostgreSQL relational database
- Optimized SQLAlchemy ORM queries
- React 19 + Vite frontend
- AI-powered resume analysis
- Real-time interview monitoring
- Skeleton loading animations
- Responsive user interface

---

# 👨‍💻 Author

**Soham Dey**

B.E. Computer Science & Engineering

University Institute of Technology, The University of Burdwan

Machine Learning • Artificial Intelligence • Full-Stack Development

### GitHub

https://github.com/SohamDey2005

### LinkedIn

https://www.linkedin.com/in/sohamdeydurgapur

---

# ⭐ Project Status

## SmartHire AI — Version 3.0

### Current Status

✅ Milestone 1 Completed

✅ Milestone 2 Completed

✅ Milestone 3 Completed

### Highlights

- AI-powered Resume Parsing
- AI Resume Analysis
- Interview Question Generation
- AI Answer Evaluation
- Speech-to-Text Analysis
- Emotion Recognition
- Eye Contact Detection
- Filler Word Detection
- Fluency Scoring
- Real-Time Interview Monitoring
- Interview Analytics Dashboard

The project is actively evolving into a complete AI-powered recruitment platform with upcoming recruiter tools, live AI interviews, cloud deployment, and advanced analytics.

---