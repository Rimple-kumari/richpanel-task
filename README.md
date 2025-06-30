📬 richpanel-task
This is a full-stack web application built as part of a Richpanel interview assignment. The app integrates with the Facebook Graph API to fetch and respond to direct messages from users, mimicking helpdesk functionalities. It provides an organized UI for customer support agents to manage conversations efficiently.

🚀 Features
🔐 Facebook OAuth-based login & token handling
📥 Fetch Facebook Page messages using Graph API
📤 Reply to user DMs directly from the UI
🧠 Organized interface for viewing conversations
🌐 Real-time updates using polling (or extendable via WebSockets)
⚙️ Environment-based configuration using .env file
🛠️ Tech Stack
🔷 Frontend
React.js
Tailwind CSS
Axios
🔶 Backend
Node.js
Express.js
Facebook Graph API
dotenv
📁 Folder Structure
richpanel-task/ ├── client/ # React frontend │ └── src/ │ └── components/ # Reusable UI components ├── server/ # Node.js backend │ └── routes/ # API routes ├── .env # Environment variables ├── package.json └── README.md

⚙️ Setup Instructions
🔧 Backend Setup
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

Add required permissions:

pages_messaging

pages_show_list

pages_read_engagement

Set your Webhook Callback URL and Verify Token in the app's dashboard

🧪 Testing
Use a test Facebook Page and test user

Make sure your backend is exposed over HTTPS (use ngrok during local development)

Send and receive DMs to verify API connectivity

🚀 Deployment
This app can be deployed using platforms like:

Render (for backend)

Vercel / Netlify (for frontend)

Or use a full-stack deployment like Heroku

Let me know if you'd like deployment steps included.

👩‍💻 Author
Rimple Kumari
🔗 GitHub(https://github.com/Rimple-kumari)
🔗 LinkedIn(https://www.linkedin.com/in/rimple-kumari-747734256/)
