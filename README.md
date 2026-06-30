
# Campus Hiring Evaluation - Full Stack

## Overview

This repository contains my submission for the AffordMed Campus Hiring Evaluation (Full Stack Track).

The project implements:

- Logging Middleware
- Notification Management System
- Notification Filtering
- Pagination
- Priority Notification Logic
- Material UI Frontend
- API Integration with AffordMed Evaluation APIs
- System Design Documentation

---

## Project Structure
```text

CAMPUS-EVALUATION-FS
│
├── logging-middleware
│   ├── index.js
│   └── README.md
│
├── notification-app-be
│   └── README.md
│
├── notification-app-fe
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── hooks
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── notification-system-design.md
```

---

Features

Logging Middleware

Reusable logging utility

Supports frontend and backend logging

Integration with AffordMed Logging API

Error handling support


Notification System

Fetch notifications from API

Filter notifications by type

Pagination support

Loading and error states

Responsive UI


Priority Notifications

Priority order:

1. Placement


2. Result


3. Event



Top notifications are identified using a priority-based sorting mechanism.


---

Technology Stack

Frontend

React

Vite

Material UI

Axios


Backend

Node.js

Express.js



---

Setup

Frontend

cd notification-app-fe
npm install
npm run dev

Application runs at:

http://localhost:5173


---

Documentation

Detailed system design responses for all stages are available in:

notification-system-design.md


---

Author

Name: Mithunavannan JR 
Roll Number: 23AIA64 

---

