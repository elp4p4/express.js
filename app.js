require('dotenv').config(); 
const express = require('express');
const app = express();

// Middleware
const workingHoursMiddleware = (_req, res, next) => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
  } else {
    res.status(403).sendFile('error.html', { root: app.get('pages') });
  }
};


// Apply middleware for all routes
app.use(workingHoursMiddleware);

// Define routes for the pages
app.set('pages', 'pages');

app.get('/', (_req, res) => {
  res.sendFile('home.html', { root: app.get('pages') });
});

app.get('/services', (_req, res) => {
  res.sendFile('services.html', { root: app.get('pages') });
});

app.get('/contact', (_req, res) => {
  res.sendFile('contact.html', { root: app.get('pages') });
});

// Start the server
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
