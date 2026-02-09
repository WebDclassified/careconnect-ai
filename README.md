# 🏥 CareConnect AI — Healthcare Support Platform

CareConnect AI is a full-stack healthcare support platform designed to help patients quickly request assistance while enabling organizations and NGOs to manage cases efficiently.

The platform integrates **AI-powered healthcare guidance** with a modern admin dashboard, creating a scalable solution for community-driven medical support.

---

# 🚀 Live Demo

Frontend: https://your-vercel-url  
Backend API: https://your-render-url  

---

# 💡 Inspiration

Access to timely healthcare assistance remains a major challenge, especially during emergencies, natural disasters, and in underserved communities.

CareConnect AI was built to:

✅ Reduce response time  
✅ Provide instant AI guidance  
✅ Help NGOs manage patient requests  
✅ Enable scalable healthcare coordination  

---

# 🤖 AI Integration

The platform uses **Google Gemini AI** to power a smart healthcare assistant capable of:

- Answering basic health questions
- Providing precautionary advice
- Recommending medical attention when necessary
- Detecting potentially serious symptoms (extensible feature)

### Example:

**User:** "I have chest pain."

**AI:**  
🚨 *Seek immediate medical attention or call emergency services.*

The AI is intentionally configured to:

✔ Keep responses short  
✔ Avoid diagnosing diseases  
✔ Never prescribe medication  
✔ Encourage professional consultation  

This ensures safe and responsible AI usage.

---

# 🧠 Core Idea

CareConnect AI acts as a **digital bridge** between patients and healthcare support providers.

It is especially valuable for:

- NGOs
- Medical camps
- Disaster relief teams
- Rural healthcare programs
- Volunteer organizations

---

# 🏗️ Tech Stack

## Frontend
- React (Vite)
- Tailwind CSS
- Axios
- Recharts (analytics)
- React Hot Toast

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## AI
- Google Gemini API

## Deployment
- **Frontend:** Vercel  
- **Backend:** Render  
- **Database:** MongoDB Atlas  

---

# ✨ Features

## 👨‍⚕️ Patient Support System
Users can submit healthcare requests with symptoms and location data.

## 🤖 AI Healthcare Assistant
Floating chatbot providing instant medical guidance.

## 📊 Admin Analytics Dashboard
Includes:

- Total requests
- Pending vs resolved cases
- Daily request tracking
- Case management

## 🌙 Modern Dark UI
Designed with a SaaS-inspired interface for a premium user experience.

## ⚡ Real-Time Ready Architecture
Backend is structured to support future WebSocket integration.

---

# 🧱 System Architecture

React → Express → MongoDB
↓
Gemini AI

The architecture is modular and production-ready.

---

# 🔐 Responsible AI Design

CareConnect AI follows safe AI principles:

- No medical prescriptions  
- No diagnoses  
- Encourages professional care  
- Emergency-aware prompting  

This makes the system suitable for real-world support workflows.

---

# 📦 Installation (Local Setup)

## Clone Repo

```bash
git clone https://github.com/yourusername/careconnect-ai
cd careconnect-ai

```bash
cd server
npm install

```bash
MONGO_URI=your_mongo_uri
GEMINI_API_KEY=your_key
PORT=8000

```bash
npm run dev


# 🚀 Frontend Setup

Navigate to the client folder:

```bash
cd client
npm install

```bash
npm run dev

