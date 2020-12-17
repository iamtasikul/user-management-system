const express = require('express');
const dotenv = require('dotenv').config({ path: '.env' });
const path = require('path');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const app = express();

// log requests
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');

// load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/add-user', (req, res) => {
  res.render('add_user');
});

app.get('/update-user', (req, res) => {
  res.render('update_user');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});
