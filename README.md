# MyGov Login Clone

A clean, minimalistic login page clone with modern design.

## Features

- Clean and modern UI design
- Form validation
- Verification page
- Google Sheets integration for form submissions
- Responsive design

## Setup

1. Clone the repository
2. Set up Google Apps Script (see below)
3. Update the script URL in `script.js`
4. Deploy to your preferred hosting service

## Google Apps Script Setup

1. Create a new Google Sheet
2. Go to Extensions > Apps Script
3. Copy the contents of `google-script.js` into the script editor
4. Deploy as web app
5. Copy the deployment URL and update it in `script.js`

## Development

To run locally:
1. Use a local server (e.g., Live Server in VS Code)
2. Open `index.html` in your browser

## Deployment

This project is ready to deploy on Vercel or any static hosting service.

## Files

- `index.html` - Main login page
- `verification.html` - Verification status page
- `styles.css` - Stylesheet
- `script.js` - Form handling and submissions
- `google-script.js` - Google Apps Script for form processing 