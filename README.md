# richpanel-task
 This is a full-stack web application built as part of a Richpanel interview assignment. The app integrates with the Facebook Graph API to fetch and respond to direct messages from users, mimicking helpdesk functionalities. It provides an organized UI for customer support agents to manage conversations efficiently.

---

## 🚀 Features

- 🔐 Facebook OAuth-based login & token handling
- 📥 Fetch Facebook Page messages using Graph API
- 📤 Reply to user DMs directly from the UI
- 🧠 Organized interface for viewing conversations
- 🌐 Real-time updates using polling (or could be extended with sockets)
- ⚙️ Environment-based configuration with `.env` support

---

## 🛠 Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- Axios

**Backend**
- Node.js
- Express.js
- Facebook Graph API
- dotenv

---

## 📂 Folder Structure

richpanel-task/
├── client/ # React frontend
│ └── src/
│ └── components/
├── server/ # Node + Express backend
│ └── routes/
├── .env # API keys and config
├── package.json
└── README.md
##2️⃣ Backend Setup
 
cd server
npm install
Create a .env file in server/:
PORT=5000
FB_APP_ID=your_facebook_app_id
FB_APP_SECRET=your_facebook_app_secret
PAGE_ACCESS_TOKEN=your_page_access_token
VERIFY_TOKEN=your_custom_token
Start the backend server:
npm run dev

##3️⃣ Frontend Setup
 cd ../client
npm install
npm start
 #🔐 Facebook App Setup
Create a Facebook app on Facebook for Developers.

Enable Messenger and Webhooks.

Generate a Page Access Token.

Subscribe the app to the page with the required permissions:
pages_messaging, pages_show_list, pages_read_engagement, etc.

Set the webhook callback URL and verify token in Facebook App Dashboard.

🧪 Testing
Use a test Facebook Page and test user.

Ensure webhook endpoint is reachable via HTTPS (use ngrok for localhost).

Test DM sending and replies.

##👩‍💻 Author
Rimple Kumari
🔗 GitHub(https://github.com/Rimple-kumari)
🔗 LinkedIn(https://www.linkedin.com/in/rimple-kumari-747734256/)
