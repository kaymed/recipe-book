const express = require('express');
const { json } = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(json());

app.get('/health', (_req, res) => {
  res.json({ status: 'OK', message: 'Server running!' });
});

// Add auth routes
app.use('/api/auth', require('./routes/auth.js'));

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
