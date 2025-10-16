# Healthy_Harvest
Project-H: Healthy Harvest

"Project-H: Healthy Harvest" is a comprehensive web application designed to showcase a smart farming IoT platform. The primary goal is to leverage technology to enhance agricultural efficiency, promote sustainability, and provide farmers with data-driven insights to improve crop yields.

Key Features

Interactive UI: A modern, responsive single-page application built with Tailwind CSS, featuring a dark/light mode and smooth, scroll-triggered animations.
Local Crop Advisor: Uses geolocation and a live weather API to provide real-time, personalized crop suggestions.
Farm Data Hub: Allows users to upload agricultural data via Excel files, which are processed and stored in a cloud database.
Click-Based Query Assistant: An interactive FAQ section that provides instant answers to common questions about the project.
External AI Tool Integration: Includes links to powerful external AI services for advanced data analysis and live chat support.

Technology Stack

Frontend:

HTML5, CSS3, JavaScript

Tailwind CSS for styling

Font Awesome for icons

xlsx.js for Excel file processing

Backend:

Node.js & Express.js for the server

MongoDB Atlas for the cloud database

cors, dotenv, mongodb (Node.js packages)

Getting Started

To get a local copy up and running, follow these simple steps.

Prerequisites

Node.js and npm installed.

A MongoDB Atlas account and a connection string.

Installation & Setup

Clone the repo:

git clone [https://github.com/your-repository/healthy-harvest.git](https://github.com/your-repository/healthy-harvest.git)

Navigate to the backend directory and install NPM packages:

cd healthy-harvest/backend
npm install


Create a .env file in the backend directory and add your MongoDB Atlas connection string:

MONGO_CONNECTION_STRING="your_mongodb_atlas_connection_string"


Start the backend server:

node server.js


The server will be running at http://localhost:3000.

Open the Frontend:

Simply open the index.html file in your web browser. The application will connect to your running backend.
