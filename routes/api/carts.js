const express = require('express');
const router = express.Router();
const Cart = require('../../models/Cart');
const Pet = require('../../models/Pet');
const passport = require('passport');

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const user = req.user.id;
    const cart = await Cart.find({ userId: user.id });
    res.json(cart[0]);
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

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { petId } = req.body;
    const user = req.user.id;
    const cart = await Cart.find({ userId: user.id });
    let pet = Pet.findById(petId);
    const petIndex = cart.items.findIndex((item) => item.petId === pet.id);
    if (petIndex === -1) {
      cart.items[petIndex].quantity =
        cart.items[petIndex].quantity + req.body.quantity;
      cart.items[petIndex].total = cart.items[petIndex].quantity * pet.price;
      cart.items[petIndex].price = pet.price;
      cart.subTotal = cart.items
        .map((item) => item.total)
        .reduce((a, b) => a + b);
    } else {
      let petDetails = {
        petId: petId,
        quantity: Number.parseInt(req.body.quantity),
        price: pet.price,
        total: parseInt(pet.price) * parseInt(req.body.quantity),
      };
      cart[0].items.push(petDetails);
      res.json(cart[0]);
    }
  }
);

router.delete('/', async (req, res) => {
  const { id } = req.params;
  const cart = await Cart.find({ userId: user.id });
  let pet = Pet.findById(req.body.petId);
  cart.items.filter((item) => item.petId !== pet.id);
  res.json(cart);
});

module.exports = router;
