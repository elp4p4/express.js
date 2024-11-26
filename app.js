require('dotenv').config(); 
const express = require('express');
const app = express();

// Set the pages directory for serving HTML files
app.set('pages', 'pages');

// Apply the middleware globally
const verify = require("./middleware/verify");
app.use(verify(app.get('pages')));

// Define routes for the pages
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
