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

    let pet = Pet.findById(petId);
    // const petIndex = cart.items.findIndex((item) => item.petId === pet.id);
    // if (petIndex !== -1) {
    //   cart.items[petIndex].quantity =
    //     cart.items[petIndex].quantity + req.body.quantity;
    //   cart.items[petIndex].total = cart.items[petIndex].quantity * pet.price;
    //   cart.items[petIndex].price = pet.price;
    //   cart.subTotal = cart.items
    //     .map((item) => item.total)
    //     .reduce((a, b) => a + b);
    // } else {
      let petDetails = {
        petId: petId,
        quantity: Number.parseInt(req.body.quantity),
        // price: pet.price,
        // total: parseInt(pet.price) * parseInt(req.body.quantity),
      };
      cart.items.push(petDetails);
      await cart.save();
      res.json(cart);
    }
  // }
);

router.delete('/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { petId } = req.body;
    const user = req.user;
    let cart = await Cart.findOne({ userId: user._id });

    // let pet = Pet.findById(petId);
    let cartItems = cart.items.filter((item) => item.petId != petId);
    cart.items = cartItems

    await cart.save();
    res.json(cart);
});

module.exports = router;
