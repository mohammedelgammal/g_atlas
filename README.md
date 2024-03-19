# GAtlas - A Game Atlas for Gamers 🎮

GAtlas is a gamer's paradise, designed with Vite, React, and ChakraUI. It's your one-stop destination to search, explore, and filter through a vast selection of games by genre and platform. Behind the scenes, GAtlas operates on a two-part backend: the RAWG API fetches game data, while a Node.js backend with Express and MongoDB handles user authentication. This backend ensures smooth registration, login, and profile access while keeping authentication tokens secure. With GAtlas, finding the perfect game is a breeze!

## Features

- **Search**: Search for games by name. The search bar uses debouncing to prevent unnecessary API calls and improve performance.
- **Infinite Scrolling**: View games in an infinite scrolling list. The list fetches more games as you scroll down.
- **Filter**: Filter games by genre and platform. The filter uses query caching to prevent unnecessary API calls and improve performance.
- **Dark Mode**: Toggle between light and dark mode. The theme is persisted in local storage.
- **Authentication**: Register and login to access the games list. The authentication is handled by a Node.js server with MongoDB as the database and JWT for token-based authentication.
- **Responsive**: The app is responsive and works on all devices. It is built with ChakraUI, which provides a mobile-first design.
- **Vite**: The app is built with Vite, which provides fast build times and a great development experience.

## Tech Stack

- **Frontend**: Vite, React - TypeScript, ChakraUI, React Query, React Hook Form, Axios, React Router Dom
- **Backend**: Node.js - TypeScript, Express, MongoDB, JWT
- **API**: [RAWG Video Games Database API](https://rawg.io/apidocs)

## Run Locally

### Installation

1. Clone the repository

   ```bash
   git clone
   ```

2. Frontend Setup

   ```bash
   cd client
   npm install
   ```

3. Environment Variables for Frontend

   Create a `.env` file in the `client` directory and add the following environment variables:

   ```env
   VITE_GAME_API_BASE_URL=https://api.rawg.io/api
   VITE_AUTH_API_BASE_URL=http://localhost:8000/api/users
   VITE_SECRET_KEY=your_secret
   ```

4. Run the client server

   ```bash
    npm start
   ```

5. Backend Setup

   ```bash
   cd server
   npm install
   ```

6. Environment Variables for Backend

   Create a `.env` file and add the following environment variables:

   ```env
   SERVER_CONNECTION_PORT=8000
   DB_CONNECTION_URI=mongodb://localhost:27017/gatlas
   JWT_SECRET=your_secret
   ```

7. Run the server

   ```bash
   npm start
   ```

8. Open your browser and go to `http://localhost:5173` to view the app.

9. Install MongoDB

   Make sure you have MongoDB installed and running on your local machine. If not, you can install it from [here](https://www.mongodb.com/try/download/community).
