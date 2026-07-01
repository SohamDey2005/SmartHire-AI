# Functional Requirements

## Introduction

This document defines the functional requirements of the SmartHire AI platform.

The system provides different functionalities for Candidates, Recruiters, and Administrators while integrating AI-powered recruitment assistance.

---

# Candidate Module

## User Authentication

- Register an account
- Login securely
- Logout
- Reset password
- Update profile

---

## Resume Management

- Upload resume
- Replace resume
- Delete resume
- View uploaded resume

---

## Job Management

- Browse available jobs
- Search jobs
- Filter jobs
- View job details
- Apply for jobs

---

## AI Resume Analysis

- Extract resume text
- Parse resume information
- Identify technical skills
- Identify soft skills
- Suggest missing skills
- Calculate resume score

---

## AI Interview

- Generate interview questions
- Conduct mock interviews
- Record candidate responses
- Evaluate responses
- Generate AI feedback
- Calculate interview score

---

## Dashboard

- View applied jobs
- View interview history
- View AI feedback
- View resume score
- View interview performance

---

# Recruiter Module

## Authentication

- Register recruiter account
- Login
- Update profile

---

## Job Management

- Create jobs
- Edit jobs
- Delete jobs
- Close jobs
- View applicants

---

## Candidate Management

- View candidate profiles
- View resumes
- Compare candidates
- Shortlist candidates
- Reject candidates

---

## Interview Management

- Schedule interviews
- Generate AI interview questions
- Review AI evaluations
- Provide recruiter feedback

---

## Dashboard

- View hiring statistics
- View job statistics
- Track candidate progress

---

# Administrator Module

## User Management

- Manage candidates
- Manage recruiters
- Activate accounts
- Deactivate accounts

---

## Platform Management

- View platform statistics
- Manage reported users
- Monitor AI usage
- View system logs

---

# AI Module

The AI engine should support:

- Resume parsing
- Resume scoring
- Job description matching
- Skill gap analysis
- Interview question generation
- Candidate answer evaluation
- Feedback generation
- Candidate ranking

---

# Notifications

The system should notify users when:

- Account created
- Resume uploaded
- Job application submitted
- Interview scheduled
- AI evaluation completed

---

# Security

The system must:

- Authenticate users
- Authorize users based on roles
- Encrypt passwords
- Protect APIs using JWT