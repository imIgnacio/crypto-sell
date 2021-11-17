let bitcoinPrice;

// Express
const express = require('express');
const path = require('path');

const app = express();

// PORT
const PORT = process.env.PORT || 3001;

// APP use
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static('public'));

// GET
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Wildcard for routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Listen
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);