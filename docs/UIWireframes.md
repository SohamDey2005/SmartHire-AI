# UI Wireframes

## Introduction

This document outlines the planned user interface screens for the SmartHire AI platform. These wireframes provide a high-level view of the application layout and navigation flow before frontend implementation.

---

# Candidate Interface

## Login Page

```
+--------------------------------------+
|              SmartHire AI            |
|--------------------------------------|
| Email                                |
| [______________________________]      |
| Password                             |
| [______________________________]      |
|                                      |
| [ Login ]                            |
|                                      |
| New user? Register                   |
+--------------------------------------+
```

---

## Candidate Dashboard

```
+--------------------------------------------------+
| SmartHire AI                                     |
|--------------------------------------------------|
| Sidebar             | Main Dashboard             |
|---------------------|----------------------------|
| Dashboard           | Welcome, Candidate         |
| Profile             | Resume Score              |
| Resume              | Applied Jobs              |
| Jobs                | Upcoming Interviews       |
| Interviews          | AI Feedback               |
| Logout              | Notifications             |
+--------------------------------------------------+
```

---

## Resume Upload

```
+-------------------------------------------+
| Upload Resume                             |
|-------------------------------------------|
| Select PDF                                |
| [ Choose File ]                           |
|                                           |
| [ Upload ]                                |
|                                           |
| Uploaded Resume                           |
+-------------------------------------------+
```

---

## Recruiter Interface

## Recruiter Dashboard

```
+--------------------------------------------------+
| SmartHire AI                                     |
|--------------------------------------------------|
| Sidebar             | Main Dashboard             |
|---------------------|----------------------------|
| Dashboard           | Active Jobs               |
| Create Job          | Total Applicants          |
| Manage Jobs         | Interviews Scheduled      |
| Candidates          | AI Rankings               |
| Logout              | Notifications             |
+--------------------------------------------------+
```

---

## Job Creation

```
+-------------------------------------------+
| Create Job                                |
|-------------------------------------------|
| Job Title                                 |
| Company                                   |
| Location                                  |
| Employment Type                           |
| Salary                                    |
| Description                               |
|                                           |
| [ Create Job ]                            |
+-------------------------------------------+
```

---

## Admin Interface

## Admin Dashboard

```
+--------------------------------------------------+
| SmartHire AI                                     |
|--------------------------------------------------|
| Sidebar             | Main Dashboard             |
|---------------------|----------------------------|
| Users               | Total Users               |
| Recruiters          | Platform Statistics       |
| Reports             | AI Usage                  |
| Logs                | System Health             |
| Logout              | Notifications             |
+--------------------------------------------------+
```

---

# Navigation Flow

Candidate:

Login → Dashboard → Resume → Jobs → Interview → Feedback

Recruiter:

Login → Dashboard → Jobs → Candidates → Interviews

Administrator:

Login → Dashboard → User Management → Reports