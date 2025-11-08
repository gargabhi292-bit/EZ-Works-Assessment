# 🌟 EZ Works Contact Form App

A sleek and efficient **React-based contact form** built using **Vite**, **Tailwind CSS**, and **React Hook Form**.  
This project delivers a seamless user experience with real-time validation and secure API communication through **Axios**.

---

## 📸 Application Preview

*(Add your application screenshot or preview image here)*

---

## 🚀 Features

- ⚛️ Developed with **React functional components**
- 🎨 Responsive and clean UI built with **Tailwind CSS**
- ⚡️ Superfast build & dev setup powered by **Vite**
- 🧠 Real-time form validation using **React Hook Form**
- 🔗 Smooth backend integration with **Axios**
- ✅ Email & phone number validation
- 🧱 Structured following a lightweight **MVVM pattern**

---

## 🧠 Tech Stack

| Technology       | Purpose |
|------------------|----------|
| **React**        | UI Components |
| **Vite**         | Development & Build Tool |
| **Tailwind CSS** | Styling |
| **React Hook Form** | Form Handling & Validation |
| **Axios**        | API Requests |

---

## 🧰 Prerequisites

Make sure the following are installed on your system:

- **Node.js** version 14 or higher  
- **npm** or **yarn**

---

## ⚙️ Getting Started

### 1️⃣ Install Dependencies

```bash
cd client
npm install
```

### 2️⃣ Run the Development Server
```bash
npm run dev
```
### Then open your browser and visit:
👉 http://localhost:5173

### 🏗 Build for Production
To generate an optimized production build:
```bash
npm run build
```
### 🌐 API Integration
The form sends data to the following API endpoint:
```http
POST https://vernanbackend.ezlab.in/api/contact-us/
```
### 📁 Project Structure
```CSS
src/
│── views/
│   ├── App.jsx
│   └── components/
│
│── viewmodels/
│   └── ContactViewModel.js
│
└── api/
    └── ContactApi.js
```

### 📂 Folder Overview

views/ → Main UI screens and reusable components
viewmodels/ → Contains form logic, validation, and state management using React Hook Form
api/ → Includes Axios API call functions and configuration

### 🔄 How the Application Works

1.The user fills out the contact form.
2.React Hook Form validates the inputs (email, phone, message, etc.).
3.Valid data is sent to the backend API through Axios.
4.The user receives immediate feedback — either a success or error message.

### 💡 Summary
The EZ Works Contact Form App provides a modern, responsive, and developer-friendly form interface.
It’s lightweight, easily customizable, and ideal for integrating a contact feature into any web project.





