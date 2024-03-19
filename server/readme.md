# GAtlas - Authentication API

## Description

This API is responsible for managing the authentication of users. It is responsible for registering, login, and getting user's profiles as well as managing their authentication tokens.

## Technologies

- Node.js
- Express
- MongoDB & Mongoose
- JWT
- Bcrypt
- Cors

## Features

- Register
- Login
- Get User Profile
- Token Management
- Password Hashing
- CORS
- Validation & Error Middlewares

## Installation

1. Clone the repository

   ```bash
   git clone
   ```

2. Install the dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file and add the following environment variables:

   ```env
   SERVER_CONNECTION_PORT=8000
   DB_CONNECTION_URI=mongodb://localhost:27017/gatlas
   JWT_SECRET=your_secret
   ```

4. Run the server

   ```bash
    npm run server
   ```

## Endpoints

#### Base URL

`/api/auth`

### Register

- **URL**: `/register`
- **Method**: `POST`
- **Request Body**:

  - `username`: string
  - `email`: string
  - `password`: string

- **Response**:
- `_id`: string
- `username`: string
- `email`: string
- `token`: string

### Login

- **URL**: `/login`
- **Method**: `POST`
- **Request Body**:

  - `email`: string
  - `password`: string

- **Response**:
- `_id`: string
- `username`: string
- `email`: string
- `token`: string

### Get User Profile

- **URL**: `/me`
- **Method**: `GET`
- **Request Headers**:

  - `Authorization Bearer <token>`

- **Response**:
- `_id`: string
- `username`: string
- `email`: string

```

```
