const express = require('express');
const connectToMongo = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize MongoDB connection
connectToMongo();

app.get('/', (req, res) => {
  res.send('Hello from the Express server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
