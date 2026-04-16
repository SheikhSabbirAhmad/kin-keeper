# 🌟 KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a modern friendship management web application that helps users maintain meaningful relationships by tracking interactions with friends. The app reminds users when it’s time to reconnect and provides an easy way to log calls, texts, and video chats with friends.

This project is built with modern web technologies using **Next.js App Router** and provides a clean, responsive UI across mobile, tablet, and desktop devices.

---

## 🚀 Live Features

- 👫 **Friend Management**
  - View a list of friends with profile pictures, tags, and contact status
  - Easily track how many days since you last contacted them

- ⚡ **Quick Check-In**
  - Instantly log interactions like **Call, Text, or Video**
  - Automatically adds the interaction to the timeline

- 📜 **Timeline Tracking**
  - View a history of all your interactions
  - Filter interactions by **Call, Text, or Video**

- 📊 **Friendship Analytics**
  - Visualize communication habits with a **Recharts Pie Chart**
  - Track how often you call, text, or video chat with friends

- 🔔 **Toast Notifications**
  - Receive instant feedback when logging interactions

- 📱 **Fully Responsive**
  - Works smoothly on **mobile, tablet, and desktop**

---

## 🛠️ Technologies Used

- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **DaisyUI**
- **Recharts**
- **React Toastify**
- **React Icons**

---

## 📂 Project Structure Overview

```
app/
 ├── page.js (Home Page)
 ├── timeline/page.js
 ├── stats/page.js
 ├── friends/[id]/page.js
 ├── not-found.js
components/
 ├── Navbar.jsx
 ├── Banner.jsx
 ├── FriendsCard.jsx
 ├── Footer.jsx
 ├── StatsCards.jsx
context/
 ├── DataContext.jsx
public/
 ├── friends.json
```

---

## ⭐ Key Features

### 1️⃣ Smart Friendship Tracking
Monitor how long it has been since you last contacted a friend and stay connected with meaningful reminders.

### 2️⃣ Quick Interaction Logging
Log **calls, texts, and video chats** instantly with one click from the friend details page.

### 3️⃣ Visual Friendship Analytics
View your interaction patterns using **Recharts pie charts** to better understand your communication habits.

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/SheikhSabbirAhmad/keenkeeper.git
```

Navigate to the project directory:

```bash
cd keenkeeper
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 📸 Screens Included

- Home Page
- Friend Details Page
- Timeline Page
- Analytics Page

---

## 👨‍💻 Author

**Sheikh Sabbir Ahmad**  
CSE Student | Full Stack Web Developer

---

## 📜 License

This project is created for educational purposes.