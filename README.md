# 📬 richpanel-task

This is a full-stack web application built as part of a Richpanel interview assignment. The app integrates with the Facebook Graph API to fetch and respond to direct messages from users, mimicking helpdesk functionalities. It provides an organized UI for customer support agents to manage conversations efficiently.

---

## 🚀 Features

- 🔐 Facebook OAuth-based login & token handling  
- 📥 Fetch Facebook Page messages using Graph API  
- 📤 Reply to user DMs directly from the UI  
- 🧠 Organized interface for viewing conversations  
- 🌐 Real-time updates using polling (or can be extended with sockets)  
- ⚙️ Environment-based configuration using `.env` file  

---

## 🛠 Tech Stack

### Frontend
- React.js  
- Tailwind CSS  
- Axios  

### Backend
- Node.js  
- Express.js  
- Facebook Graph API  
- dotenv  

---

## 📂 Folder Structure
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

## 🧰 Backend Setup

```bash
cd server
npm install

Create a .env file inside the server/ directory with the following content:

env
Copy
Edit
PORT=5000
FB_APP_ID=your_facebook_app_id
FB_APP_SECRET=your_facebook_app_secret
PAGE_ACCESS_TOKEN=your_page_access_token
VERIFY_TOKEN=your_custom_verify_token
npm run dev
---
💻 Frontend Setup
 cd ../client
npm install
npm start

 
##🔐 Facebook App Setup
```bash
Create a Facebook App from Facebook for Developers.

Enable Messenger and Webhooks in the app.

Generate a Page Access Token.

Subscribe the app to your Facebook Page with the following permissions:

pages_messaging

pages_show_list

pages_read_engagement

Set the Webhook Callback URL and Verify Token in your app setting
##🧪 Testing
Use a test Facebook Page and test user account.

Make sure the webhook endpoint is reachable via HTTPS (use ngrok for local testing).

Test sending and receiving DMs from the page.


