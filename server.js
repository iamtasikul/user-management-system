const express = require('express');
const dotenv = require('dotenv').config({ path: '.env' });

const app = express();

app.get('/', (req, res) => {
  res.send('Use Management System');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});
