// const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys.js').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users.js');
const pets = require('./routes/api/pets.js');
const reviews = require('./routes/api/reviews.js');
const carts = require('./routes/api/carts.js');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

// app.get('/', (req, res) => res.send('Hello World'));

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to mongoDB'))
  .catch((err) => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/reviews', reviews);
app.use('/api/pets', pets);
app.use('/api/carts', carts);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
