# Shepherd Bus Tours

## Summary

This project, **Shepherd Bus Tours**, is a comprehensive web application designed to manage a bus tour company's operations. It includes features such as user-specific photo uploads, comments, and likes for trips. The project is built using a Node.js backend with Express and MongoDB, and a React frontend. It supports user authentication, trip management, and community features to enhance user engagement.

## Description

### Shepherd Bus Tours

**Shepherd Bus Tours** is a web application designed to manage and enhance the experience of a bus tour company. It includes features such as user-specific photo uploads, comments, and likes for trips, creating a community-like environment for users. The application is built with a robust backend using Node.js, Express, and MongoDB, and a dynamic frontend using React.

## Features

- **User Authentication**: Secure user registration and login.
- **Trip Management**: Create and manage trips with details such as destination, date, and passengers.
- **User-Specific Photo Uploads**: Users can upload photos specific to each trip.
- **Community Features**: Users can like and comment on trips, fostering a sense of community.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Project Structure

### Backend Directory (`backend/`)

- **config**
  - `db.js`: Database configuration and connection.
- **middleware**
  - `auth.js`: Middleware for user authentication.
- **models**
  - `user.js`: Defines the schema for user data.
  - `trip.js`: Defines the schema for trips, including user-specific photos, likes, and comments.
  - `comment.js`: Defines the schema for comments.
- **routes**
  - `auth.js`: Routes for user authentication (login/register).
  - `users.js`: Routes for user-related operations.
  - `trips.js`: Routes for trip-related operations, including photo uploads.
  - `comments.js`: Routes for managing comments on trips.
  - `likes.js`: Routes for liking and unliking trips.
- **uploads**: Directory for storing uploaded photos.
- `server.js`: Main server file that integrates all routes and configurations.
- `.gitignore`: Specifies files and directories to ignore in the repository.
- `LICENSE`: MIT License for the project.
- `package.json`: Lists project dependencies and scripts.

### Frontend Directory (`frontend/`)

- **public**
  - `index.html`: The main HTML file for the React application.
- **src**
  - **components**
    - `Dashboard.js`: User dashboard component.
    - `Login.js`: Login component.
    - `Register.js`: Registration component.
    - `TripDetail.js`: Component to handle trip details, including photo uploads, comments, and likes.
  - `App.js`: Main application component.
  - `App.css`: Styles for the application.
  - `index.js`: Entry point for the React application.
- `.gitignore`: Specifies files and directories to ignore in the repository.
- `LICENSE`: MIT License for the project.
- `package.json`: Lists project dependencies and scripts.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MongoDB installed and running locally or remotely.
- A modern web browser.

### Installation

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/McCal-Codes/Shepherd-Bus-Tours.git
   cd Shepherd-Bus-Tours
