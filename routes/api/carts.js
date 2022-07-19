const express = require('express');
const router = express.Router();
const Cart = require('../../models/Cart');
const Pet = require('../../models/Pet');
const passport = require('passport');

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const user = req.user;
    let cart = await Cart.findOne({ userId: user._id });
    res.json(cart);
  }
);

// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   const cart = await Cart.findById(id);

//   if (!cart) {
//     return res.status(404).json({ cartnotfound: 'Cart not found' });
//   } else {
//     res.json(cart);
//   }
// });

router.patch(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { petId } = req.body;
    const user = req.user;
    let cart = await Cart.findOne({ userId: user._id });
    let pet = await Pet.findById(petId);
    const petIndex = cart.items.findIndex((item) => item.petId == petId);
    if (petIndex !== -1) {
      cart.items[petIndex].quantity = cart.items[petIndex].quantity + 1;
      cart.items[petIndex].total = cart.items[petIndex].quantity * pet.price;
      cart.items[petIndex].price = pet.price;
      cart.subTotal = cart.items
        .map((item) => item.total)
        .reduce((a, b) => a + b);
      await cart.save();
      res.json(cart);
    } else {
      let petDetails = {
        name: pet.name,
        image_url: pet.image_url,
        petId: petId,
        quantity: 1,
        price: pet.price,
        total: pet.price * 1,
      };
      cart.items.push(petDetails);
      await cart.save();
      res.json(cart);
    }
  }
);

router.patch(
  '/remove_one',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { petId } = req.body;
    const user = req.user;
    let cart = await Cart.findOne({ userId: user._id });
    const petIndex = cart.items.findIndex((item) => item.petId == petId);
    let newQuantity = cart.items[petIndex].quantity - 1;
    if (newQuantity <= 0) {
      cart.items.splice(petIndex, 1);
      if (cart.items.length === 0) {
        cart.subTotal = 0;
      } else {
        cart.subTotal = cart.items
          .map((item) => item.total)
          .reduce((a, b) => a + b);
      }
    } else {
      cart.items[petIndex].quantity = newQuantity;
      cart.items[petIndex].total = newQuantity * cart.items[petIndex].price;
      cart.subTotal = cart.items
        .map((item) => item.total)
        .reduce((a, b) => a + b);
    }
    await cart.save();
    res.json(cart);
  }
);

router.patch(
  '/remove_all',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
  const { petId } = req.body;
  const user = req.user;
  let cart = await Cart.findOne({ userId: user._id });
  let pet = Pet.findById(petId);
  let newCartItems = cart.items.filter((item) => item.petId != petId);
  cart.items = newCartItems;
  await cart.save();
  res.json(cart);
});

router.delete(
  '/clear',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
  const user = req.user;
  let cart = await Cart.findOne({ userId: user._id });
  cart.items = [];
  await cart.save();
  res.json(cart);
});

module.exports = router;
