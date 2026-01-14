# 🌾 AI-Based FAQ System for Agricultural Shops

> An intelligent, bilingual AI assistant designed to help seed and pesticide shops in Uttar Pradesh answer customer queries instantly.

---

## 🚀 Project Overview

In agricultural shops, shopkeepers repeatedly answer common questions like:

- *“Wheat seed ka rate kya hai?”*
- *“Is pesticide ka use kaise karein?”*
- *“Kaunsa fertilizer best rahega?”*

This project solves that problem by providing an **AI-powered FAQ chatbot** that delivers **instant, accurate, and locally relevant answers** using a natural **Hindi–English mix**, just like real conversations in UP.

---

## 🧠 Why This Project Matters

- Built for **real agricultural use cases**
- Uses a **powerful LLM (Llama 3.3 – 70B)** via Groq API
- Supports **bilingual communication**
- Fast, real-time chat experience
- Designed as a **full-stack, production-style application**

This is not a demo app — it’s a **practical AI solution**.

---

## 🏗️ Architecture
Frontend (React + Vite)
↓
Backend (Node.js + Express)
↓
Groq API (Llama 3.3 70B)



---

## 🖥️ Technology Stack

### Frontend (`FAQ/`)
- React 19.2
- Vite
- ESLint
- Modern ES6+ JavaScript
- Interactive chat UI with quick-action buttons

### Backend (`backend/`)
- Node.js
- Express.js 5.2.1
- Groq SDK (Llama 3.3 70B)
- Environment-based configuration
- CORS enabled
- Modular API architecture

---

## 📁 Project Structure

```bash
Ai Based FAQ/
├── backend/
│ ├── server.js # Express server & AI logic
│ ├── package.json # Backend dependencies
│ └── .env.example # Environment variables template
│
├── FAQ/
│ ├── src/ # React source code
│ ├── public/ # Static assets
│ └── package.json # Frontend dependencies
│
└── .gitignore


---
```

## ✨ Key Features

### 💬 Interactive Chat Interface
- Clean and modern UI
- Real-time message handling
- Smooth and responsive design

### 🤖 AI-Powered Responses
- Custom system prompt for agriculture-related FAQs
- Handles pesticide, seed, fertilizer, and general farming queries

### 🌐 Bilingual Support
- Natural Hindi + English responses
- Designed for local farmers and shopkeepers

### ⚡ Quick Action Buttons
- One-click predefined questions:
  - Pesticide prices
  - Wheat seed availability
  - Fertilizer usage guide

### 🛡️ Error Handling
- Graceful API error management
- User-friendly feedback messages

---

## 🔌 How It Works

1. User enters a query in the chat interface
2. Frontend sends the message to the `/chat` API
3. Backend forwards it to Groq’s Llama model
4. AI generates a context-aware response
5. Response is displayed instantly in the UI

---

## 🛠️ How to Run the Project Locally

### Clone the repository
```bash
git clone https://github.com/your-username/ai-based-faq.git
cd ai-based-faq
```

## ---------------- BACKEND SETUP ----------------
```bash
cd backend
npm install
```

### Create environment file
cp .env.example .env
### Edit .env and add your GROQ_API_KEY

### Start backend server
```bash
npm start
```

## ---------------- FRONTEND SETUP ----------------
```bash
cd ../FAQ
npm install
```
### Start frontend (Vite)
```bash
npm run dev
```
📍 Open in browser:
```bash
http://localhost:5173
```

