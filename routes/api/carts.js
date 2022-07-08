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
    const { pet } = req.body;
    // console.log(pet);
    const user = req.user;
    let cart = await Cart.findOne({ userId: user._id });
    let petAttributes = await Pet.findById(pet._id);
    const petIndex = cart.items.findIndex((item) => item.petId == pet._id);
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
        name: petAttributes.name,
        image_url: petAttributes.image_url,
        petId: pet._id,
        quantity: pet.quantity,
        price: petAttributes.price,
        total: petAttributes.price * pet.quantity,
      };
      cart.items.push(petDetails);
      await cart.save();
      res.json(cart);
    }
  }
);

router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { petId } = req.body;
    const user = req.user;
    let cart = await Cart.findOne({ userId: user._id });
    const petIndex = cart.items.findIndex((item) => item.petId == petId);
    let newQuantity = cart.items[petIndex].quantity - 1;
    if (newQuantity < 0) {
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

module.exports = router;
