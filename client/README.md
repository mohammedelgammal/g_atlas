# GAtlas - A Game Atlas for Gamers 🎮

GAtlas is a game atlas for gamers to search for their favorite games, view details, and filter by genre and platform to find the perfect game to play. It is built with Vite, React, and ChakraUI.

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

## Installation

1. Clone the repository

   ```bash
   git clone
   ```

2. Change the directory to the client folder

   ```bash
   cd client
   ```

3. Install the dependencies

   ```bash
   npm install
   ```

4. Create a `.env` file and add the following environment variables:

   ```env
   VITE_GAME_API_BASE_URL=https://api.rawg.io/api
   VITE_AUTH_API_BASE_URL=http://localhost:8000/api/users
   VITE_SECRET_KEY=your_secret
   ```

5. Run the client server

   ```bash
    npm start
   ```
