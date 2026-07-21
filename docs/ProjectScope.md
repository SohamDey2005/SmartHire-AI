# SmartHire AI

# Project Scope

## Project Overview

SmartHire AI is an AI-powered recruitment and interview preparation platform developed using **FastAPI**, **React**, **PostgreSQL**, and **Groq LLM API**.

The platform enables candidates to securely manage resumes, perform AI-powered resume analysis, generate personalized interview questions, and participate in AI-driven mock interview sessions. The architecture is designed to be scalable, allowing future integration of recruiter workflows, speech analysis, candidate evaluation, and analytics.

This document reflects the project scope up to **Milestone 2 (Resume Parsing & Interview Engine)**.

---

# Problem Statement

Traditional recruitment processes require significant manual effort for resume screening, technical evaluation, and interview preparation. Recruiters spend considerable time reviewing resumes, while candidates often lack access to personalized interview practice and constructive feedback.

SmartHire AI addresses these challenges by automating resume analysis and interview preparation using Artificial Intelligence, enabling a more efficient and personalized recruitment experience.

---

# Project Objectives

The primary objectives of SmartHire AI are:

- Build a secure recruitment platform.
- Provide role-based authentication and authorization.
- Enable secure resume management.
- Extract structured information from resumes using AI.
- Generate personalized interview questions from resume content.
- Manage AI mock interview sessions.
- Establish a scalable architecture for future AI-powered recruitment features.

---

# Target Users

The platform supports three categories of users:

## Candidate

Candidates can:

- Register and login securely.
- Upload multiple resumes.
- Download and delete resumes.
- Analyze resumes using AI.
- View extracted skills and resume details.
- Generate AI interview questions.
- Start and manage interview sessions.

---

## Recruiter (Future)

Recruiters will be able to:

- Create and manage job postings.
- Review candidate resumes.
- Access AI-generated resume insights.
- Evaluate interview performance.
- Track applicants.

---

## Administrator (Future)

Administrators will be able to:

- Manage platform users.
- Monitor system usage.
- View analytics.
- Manage platform configuration.

---

# Technology Stack

## Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- React Hot Toast

---

## Backend

- FastAPI
- Python 3.10
- SQLAlchemy ORM
- Pydantic
- Alembic

---

## Database

- PostgreSQL

---

## Authentication

- JWT Authentication
- BCrypt Password Hashing
- Role-Based Access Control (RBAC)

---

## Artificial Intelligence

- Groq API
- Llama 3.3 70B Versatile
- Large Language Models (LLMs)
- Prompt Engineering
- JSON-based AI Extraction

---

# Current Project Modules (Implemented)

## Authentication Module

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Role-Based Authorization

---

## Resume Management Module

- Resume Upload
- Resume Download
- Resume Deletion
- Resume Listing
- Resume Text Extraction

---

## AI Resume Analysis Module

- Technical Skill Extraction
- Soft Skill Extraction
- Framework Detection
- Tool Detection
- Database Detection
- Cloud Technology Detection
- Certification Extraction
- Education Extraction
- Experience Extraction
- Project Extraction

---

## AI Interview Engine

- AI Interview Question Generation
- Resume-Based Questions
- Categorized Questions
- Dynamic Question Generation

---

## Interview Session Module

- Start Interview Session
- Finish Interview Session
- Session Status Tracking
- Session History

---

## Candidate Dashboard

- Resume Management
- Resume Analysis
- Interview Generation
- Interview Session Access

---

# Planned Modules (Future)

## Recruiter Module

- Job Management
- Candidate Management
- Resume Screening
- Applicant Tracking
- Interview Scheduling

---

## AI Interview Evaluation

- Speech-to-Text
- Candidate Answer Evaluation
- AI Scoring
- AI Feedback Generation

---

## AI Monitoring

- Emotion Recognition
- Eye Contact Tracking
- Confidence Analysis
- Communication Analysis

---

## Analytics Dashboard

- Resume Analytics
- Interview Analytics
- Candidate Performance Reports
- Recruiter Insights

---

## Notification System

- Email Notifications
- Interview Alerts
- Application Updates
- AI Report Notifications

---

# Expected Outcomes

Upon completion of Milestone 2, SmartHire AI provides:

- Secure authentication system.
- Resume management platform.
- AI-powered resume parsing.
- AI-based skill extraction.
- AI-generated interview questions.
- Interview session management.
- Responsive candidate dashboard.
- Modular backend architecture for future expansion.

---

# Project Scope Status

## Completed (Milestone 1)

- Project Initialization
- Database Setup
- Authentication
- Role-Based Access Control
- Resume Management
- Candidate Dashboard

---

## Completed (Milestone 2)

- Resume Parsing
- AI Resume Analysis
- Skill Extraction
- Interview Question Generation
- Interview Session Management
- AI Interview Workflow

---

## Planned (Milestone 3)

- Speech-to-Text
- Emotion Detection
- Eye Contact Tracking
- AI Candidate Evaluation
- Scoring Engine

---

## Planned (Milestone 4)

- Recruiter Dashboard
- Analytics Dashboard
- Reports
- Notifications
- Cloud Deployment
- Production Release

---

# Expected Final Outcome

SmartHire AI will evolve into a comprehensive AI-powered recruitment platform capable of assisting candidates throughout interview preparation while providing recruiters with intelligent resume screening, interview evaluation, analytics, and hiring support through advanced Artificial Intelligence technologies.