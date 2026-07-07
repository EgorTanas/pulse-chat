# 🏗 PulseChat Architecture

## Overview

PulseChat consists of several independent parts.

```
             React Web
                 │
                 │ HTTPS
                 ▼
           REST API (Express)
                 │
     ┌───────────┴────────────┐
     │                        │
 PostgreSQL              Socket.IO
     │                        │
     └───────────┬────────────┘
                 │
             File Storage
```

---

## Frontend

Responsibilities

- Authentication
- Chat UI
- Profile
- Groups
- Settings
- Notifications

---

## Backend

Responsibilities

- REST API
- Authentication
- Business Logic
- Validation
- File Upload
- Socket Server

---

## Database

Stores

- Users
- Chats
- Messages
- Groups
- Files
- Reactions

---

## Realtime

Socket.IO

Used for

- Sending messages
- Online status
- Typing indicator
- Notifications

---

## Storage

Stores

- Images
- Videos
- Documents
- Avatars

---

## Authentication

JWT

Access Token

Refresh Token

---

## Future

- AI
- Video Calls
- Voice Calls
- Admin Dashboard
- Mobile App