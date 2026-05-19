# Anonymous Cyber Games (ACG) 🎮🔥

> **Project Status:** 🚧 **Work in Progress (WIP)** > *A comprehensive Full-Stack web ecosystem combining social networking, live gaming community interactions, and automated internet café (net café) service integration with a strong focus on user privacy.*

---

## 🚀 Tech Stack

### Backend Architecture
- **Core Framework:** Java Spring Boot
- **Security & Auth:** Spring Security, JSON Web Tokens (JWT)
- **Architecture Pattern:** MVC (Model-View-Controller), RESTful API Development
- **Routing & Middleware:** Custom request routing and middleware validation

### Frontend Architecture
- **Core Library:** ReactJS (JavaScript)
- **Design Pattern:** Component-Based Architecture
- **Styling:** HTML5, CSS3, Responsive Web Design (Mobile-First approach)

### Database & DevOps
- **Database Management:** MySQL (Relational DB Design, Complex SQL Queries, CRUD Operations)
- **Containerization:** Docker (Deployment & Isolation)
- **Version Control:** Git & GitHub (Monorepo structure)

---

## ✨ Main Features & Current Progress

### 1. Game Discovery & Rankings 🏆
- Detailed game information pages with access/download links.
- Dynamic game ranking system based on community interactions.

### 2. Social Media Feed & Communities 🌐
- A social-media-style feed allowing users to browse, share posts, and interact with gaming content.
- Dedicated community/group creation for specific game titles.

### 3. Real-Time Communication 💬
- Public chat rooms mapped to specific gaming groups (similar to Discord channels).
- Real-time private messaging (1-on-1) and secure group conversations between users.

### 4. Internet Café Ecosystem 🏪
- **Business Registration:** A system allowing cyber café owners to register and promote their local services.
- **Real-Time Seat Reservation:** Advanced tracking system helping users view live PC availability and reserve seats before physically visiting the café.

---

## 🛠️ Current Achievements (Phase 1)

- [x] **Monorepo Architecture:** Structured clean, modular separation between `backend` and `frontend`.
- [x] **Database Schema Design:** Implemented robust relational schemas in MySQL for users, posts, and core systems.
- [x] **Secure Auth:** Fully integrated robust JWT Authentication and secure routing middleware.
- [x] **RESTful APIs:** Built core endpoints for community feeds, user management, and service listings.
- [x] **Responsive UI Base:** Developed the main dashboard and component layout utilizing ReactJS.

---

## 🗺️ Future Roadmap

- [ ] **Dockerization:** Containerize both backend and frontend applications for scalable cloud deployment.
- [ ] **WebSocket Integration:** Implement WebSockets to power real-time chat rooms and instant seat availability updates.
- [ ] **Privacy Layer Optimization:** Enhance the platform's routing system to guarantee total user anonymity in public match-making.
- [ ] **Automated Testing:** Implement JUnit and Mockito for Backend API testing and React Testing Library for UI assurance.

---

## ⚙️ Local Setup & Installation

### Prerequisites
- Java Development Kit (JDK) 17 or higher
- Node.js (v18+) & npm
- MySQL Server / Docker Deskto