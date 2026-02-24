# 🎓 Aluminix — Alumni Mentorship Platform

> A real-time web platform connecting students with alumni for mentorship, career guidance, and professional networking.
> Developed as part of **Smart India Hackathon (SIH) 2024**.

---

## 📌 Overview

Aluminix bridges the gap between current students and alumni by providing a centralized platform for communication, mentorship, and career support.

Students can discover alumni based on interests and domains, initiate conversations, and receive guidance from experienced professionals.

---

## ✨ Key Features

* 👤 Secure user authentication (Students & Alumni)
* 🔎 Alumni discovery and profile browsing
* 💬 Real-time chat using Socket.IO
* 🧑‍🏫 Mentor–mentee interaction
* 📄 User profile management
* 🔒 Secure communication channels
* ⚡ Responsive and user-friendly interface

---

## 🧠 Problem Statement

Students often struggle to access career guidance from experienced professionals, while alumni lack a structured way to mentor juniors.

Aluminix solves this by:

* Creating a trusted communication platform
* Enabling scalable mentorship
* Strengthening alumni–student relationships
* Supporting career development and networking

---

## 🛠️ Tech Stack

### 🌐 Frontend

* React.js
* HTML5
* CSS3
* JavaScript

### ⚙️ Backend

* Node.js
* Express.js

### 🗄️ Database

* MongoDB

### 🔄 Real-Time Communication

* Socket.IO

---

## 🏗️ System Architecture

```
Client (React)
      ↓
Node.js + Express Server
      ↓
MongoDB Database
      ↓
Socket.IO Server (Real-time messaging)
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Rohityadav309/TechTitansSih.git
cd TechTitansSih
```

---

### 2️⃣ Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file inside the backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the Application

#### Start Backend Server

```bash
npm start
```

#### Start Frontend

```bash
npm start
```

---

## 📷 Screenshots (Optional)

*Add screenshots of the application UI*

```
![Home Page](screenshots/home.png)
![Chat Interface](screenshots/chat.png)
```

---

## 🏁 Hackathon Details

* 🏆 Event: Smart India Hackathon 2024
* 🏫 Level: College-Level Selection
* 👥 Team: Tech Titans
* 💡 Domain: Mentorship / Education / Networking

---

## 🤝 Team Contribution

This project was developed collaboratively as part of SIH 2024.
Team members contributed across frontend development, backend services, database integration, and real-time communication features.

---

## 📜 License

This project is intended for educational and demonstration purposes.

---

## 👤 Author

**Rohit Yadav**

📧 Email: [rohit.codesolution@gmail.com](mailto:rohit.codesolution@gmail.com)
🔗 LinkedIn: https://linkedin.com/in/rohit-yadav-903558250
💻 GitHub: https://github.com/Rohityadav309

---

## ⭐ Support

If you find this project useful, please consider giving it a star ⭐ on GitHub.
