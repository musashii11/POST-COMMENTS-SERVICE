# Post-Comments Service

This project is a simple Post-Comments Service where users can create text-based posts and other users can comment on these posts. The comments support rich text formatting such as bold, italics, and hyperlinks.

## Features

- Create text-based posts
- Comment on posts with rich text support
- Persist data in MongoDB

## Technologies Used

- React.js for the frontend
- Node.js and Express.js for the backend
- MongoDB for the database
- Material-UI for UI components
- React-Quill for rich text editor

## Setup Instructions

### Prerequisites

- Node.js installed
- MongoDB installed and running (Use MongoDB Compass for GUI management)

### Clone the Repository

```bash
git clone <repository_url>
cd <repository_name>
npm install

### Install Dependencies
-Backend
  cd backend
  node server.js

-Frontend
  cd frontend
  npm install
  npm start
The frontend application will start on 'http://localhost:3000'.

## Using MongoDB Compass
- Open MongoDB Compass.
- Connect to your MongoDB instance (usually mongodb://localhost:27017).
- Ensure the database post-comments is created and collections posts and comments are populated when you create posts and comments through the application.
## Usage
- Navigate to http://localhost:3000 in your web browser.
- Create a new post using the "Create a New Post" form.
- Add comments to the post using the rich text editor provided in the comment section of each post.
