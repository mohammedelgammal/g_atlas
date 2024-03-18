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

### Installation

1. Clone the repository

   ```bash
   git clone
   ```

Follow the instructions in the `client` and `server` README.md directories to run the client and server locally.

[]: # (END)
