const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple API Route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello, World! Welcome to our website backend.' });
});

// Serve Static Frontend Files
app.use(express.static('../frontend'));

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
