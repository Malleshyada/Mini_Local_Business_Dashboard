# Mini Local Business Dashboard

This project is a full-stack Mini Local Business Dashboard built for GrowthProAI, simulating a small business dashboard to display SEO content and Google Business data.

## Project Structure

- **frontend/**: React application with Tailwind CSS.
- **backend/**: Node.js Express server with API endpoints.
- **README.md**: This file.

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend


Install dependencies:npm install


Start the backend server:npm start

The server runs on http://localhost:3000.

Frontend Setup

Navigate to the frontend directory:cd frontend


Install dependencies:npm install


Start the development server:npm start

The app runs on http://localhost:5173 (default Vite port).

Features

Input Form: Enter business name and location with client-side validation.
Display Card: Shows simulated Google Rating (4.3), reviews (127), and an AI-generated SEO headline.
Regenerate Headline: Fetches a new headline via a button click.
Responsive Design: Mobile-friendly UI using Tailwind CSS.
Loading State: Displays loading text during API calls.
Error Handling: Shows error messages for failed API calls or invalid inputs.

API Endpoints

POST /business-data: Accepts { "name": "Business Name", "location": "Location" } and returns { rating: 4.3, reviews: 127, headline, name, location }.
GET /regenerate-headline: Returns a new SEO headline based on query parameters name and location.

Notes

No database is used; data is simulated.
CORS is enabled for frontend-backend communication.
For deployment, consider hosting the backend on Render/Glitch and the frontend on Vercel/Netlify.
To submit, create a public GitHub repository with this structure and include this README. Optionally, include deployed links.

Submission

Create a public GitHub repository with this code.
Email the repository link with the subject: Submission: Full Stack Intern Assignment [Your Name].


