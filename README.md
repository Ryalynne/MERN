# MERN Stack with MSSQL

## Overview
A simple MERN (MongoDB, Express, React, Node.js) stack application using Microsoft SQL Server (MSSQL) instead of MongoDB. Created by **Ryan Santiago**.

## Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```sh
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. **Configure MSSQL:**
   - Set up your database.
   - Create a `.env` file in the backend:
     ```env
     DB_USER=your_user
     DB_PASSWORD=your_password
     DB_NAME=your_db
     DB_HOST=your_host
     JWT_SECRET=your_secret
     ```

4. **Run the application:**
   ```sh
   cd backend && npm run dev
   cd ../frontend && npm start
   ```

## Features
- CRUD operations with MSSQL

## Author
**Ryan Santiago**
