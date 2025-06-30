# 📬 richpanel-task

This is a full-stack web application built as part of a Richpanel interview assignment. The app integrates with the Facebook Graph API to fetch and respond to direct messages from users, mimicking helpdesk functionalities. It provides an organized UI for customer support agents to manage conversations efficiently.

---

## 🚀 Features

- 🔐 Facebook OAuth-based login & token handling  
- 📥 Fetch Facebook Page messages using Graph API  
- 📤 Reply to user DMs directly from the UI  
- 🧠 Organized interface for viewing conversations  
- 🌐 Real-time updates using polling (or extendable via WebSockets)  
- ⚙️ Environment-based configuration using `.env` file  

---

## 🛠️ Tech Stack

### 🔷 Frontend
- React.js  
- Tailwind CSS  
- Axios  

### 🔶 Backend
- Node.js  
- Express.js  
- Facebook Graph API  
- dotenv  

---

## 📁 Folder Structure

richpanel-task/
├── client/ # React frontend
│ └── src/
│ └── components/ # Reusable UI components
├── server/ # Node.js backend
│ └── routes/ # API routes
├── .env # Environment variables
├── package.json
└── README.md

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

```bash
cd server
npm install
Create a .env file inside the server/ directory with the following variables:
PORT=5000
FB_APP_ID=your_facebook_app_id
FB_APP_SECRET=your_facebook_app_secret
PAGE_ACCESS_TOKEN=your_page_access_token
VERIFY_TOKEN=your_custom_verify_token
Run the backend server:

npm run dev
💻 Frontend Setup
cd ../client
npm install
npm start

🔐 Facebook App Setup
To connect with Facebook Messenger API:

Go to Facebook for Developers

Create a new Facebook App

Enable Messenger and Webhooks

Generate a Page Access Token

Add the required permissions:

pages_messaging

pages_show_list

pages_read_engagement

Set the Webhook Callback URL and Verify Token in your app's dashboard

🧪 Testing
Use a test Facebook Page and a test user account

Make sure your backend is exposed over HTTPS
(Use ngrok during local development)

Test sending and receiving messages from the Facebook Page

🚀 Deployment
 the app using:

🌐 Render – for backend

🌐  Render – for frontend

 Live link -https://assignment-richpanel-rimple.onrender.com/

## 👩‍💻 Author & Contact

**Rimple Kumari**  
📧 Email: (kumaririmple562@gmail.com
🔗 GitHub: (https://github.com/Rimple-kumari)  
🔗 LinkedIn: [linkedin.com/in/rimple-kumari-747734256](https://www.linkedin.com/in/rimple-kumari-747734256/)

> If you have any queries, feel free to connect or reach out via email.

 

 







Ask ChatGPT



