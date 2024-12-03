TodoList App

Overview

The TodoList App is a full-stack application for managing daily tasks efficiently. It features a React frontend and an Express + MongoDB backend. Users can perform CRUD (Create, Read, Update, Delete) operations on their tasks with persistent data storage.

Features

Add, edit, delete, and mark tasks as complete.
Filter tasks by status: All, Active, or Completed.
Persistent storage using MongoDB.
User-friendly and responsive UI.
End-to-end testing using Cypress.
Frontend

Tech Stack
React (Functional Components with Hooks)
CSS for styling
Setup Instructions
Navigate to the frontend directory:
cd todo-frontend
Install dependencies:
npm install
Start the development server:
npm start
Open the app in your browser:
http://localhost:3000
Backend

Tech Stack
Node.js (Express)
MongoDB (Mongoose ODM)
dotenv for environment variables
body-parser and cors for middleware
Setup Instructions
Navigate to the backend directory:
cd todo-backend
Install dependencies:
npm install
Set up environment variables in .env file:
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
Replace <username>, <password>, and <dbname> with your MongoDB credentials.
Start the server:
node server.js
Confirm the server is running:
Server running on port 5000
MongoDB connected
Folder Structure

todolistapp/
│
├── todo-frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── TodoWrapper.js
│   │   ├── components/
│   │   │   ├── TodoForm.js
│   │   │   ├── TodoItem.js
│   │   │   └── Filters.js
│   │   └── styles/
│   └── public/
│
├── todo-backend/
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── server.js
│   └── .env
└── README.md
API Endpoints

Base URL: http://localhost:5000/api/todos
Method	Endpoint	Description
GET	/	Fetch all tasks
POST	/	Add a new task
PUT	/:id	Update an existing task
DELETE	/:id	Delete a task by ID
Testing

Cypress (Frontend)
Ensure Cypress is installed:
npm install cypress --save-dev
Run Cypress:
npx cypress open
Test scenarios include:
Adding a new todo
Deleting a todo
Filtering todos (All, Active, Completed)
Marking a task as complete/incomplete
Postman (Backend)
Use Postman or similar tools to test API endpoints.
Deployment

Frontend
Build the app for production:
npm run build
Deploy the build folder to hosting services like Vercel, Netlify, or AWS.
Backend
Use services like Heroku, AWS, or Railway for deployment.
Ensure the MONGO_URI in the production .env file points to a live MongoDB database.
