# Node.js + Sequelize + MySQL Setup

This project demonstrates a Node.js application with MySQL database connection using Sequelize ORM.

## Prerequisites

- Node.js (v14 or higher)
- MySQL Server
- npm or yarn

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure your database:
   - Create a MySQL database
   - Update the `.env` file with your database credentials:
     ```
     DB_HOST=localhost
     DB_USER=your_username
     DB_PASSWORD=your_password
     DB_NAME=your_database
     DB_PORT=3306
     PORT=3000
     ```

## Running the Application

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## Project Structure

- `config/database.js` - Database configuration
- `models/User.js` - Sample User model with various Sequelize data types
- `index.js` - Main application file
- `.env` - Environment variables (create this file)

## Sequelize Data Types Used

The User model demonstrates various Sequelize data types:
- INTEGER
- STRING
- BOOLEAN
- DATE
- DECIMAL
- TEXT
- BLOB
- ENUM
- JSON

## API Endpoints

- GET `/` - Welcome message 