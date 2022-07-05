const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys.js');
const passport = require('passport');

const User = require('../../models/User.js');
const Cart = require('../../models/Cart.js');
const validateRegisterInput = require('../../validation/register.js');
const validateLoginInput = require('../../validation/login.js');

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then((user) => {
            const payload = {
              id: user.id,
              name: user.name,
              email: user.email,
            };

            jwt.sign(
              payload,
              keys.default.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token,
                });
              }
            );
          });
        });
      });
    }
  });
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ email: 'This user does not exist' });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          // Tell the key to expire in one hour
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
            });
          }
        );
      } else {
        return res.status(400).json({ password: 'Incorrect password' });
      }
    });
  });
});

// You may want to start commenting in information about your routes so that you can find the appropriate ones quickly.
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  }
);

// Add to cart
router.post('/cart', async (req, res) => {
  const { petId, quantity, price } = req.body;
  const userId = req.user.id;
  try {
    let cart = await Cart.findOne({ userId });
    // if cart doesn't exist, create a new cart
    if (!cart) {
      const newCart = await Cart.create({
        userId,
        pets: [{ petId, name, quantity, price }],
      });
      return res.status(201).send(newCart);
      // if cart exists, add pet to cart
    } else {
      cart.pets.push({ petId, name, quantity, price });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('BROKEN');
  }
});

module.exports = router;
