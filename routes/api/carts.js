const express = require('express');
const router = express.Router();
const Cart = require('../../models/Cart');
const Pet = require('../../models/Pet');
const passport = require('passport');

router.get('/', async (req, res) => {
  const carts = await Cart.find();
  res.json(carts);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const cart = await Cart.findById(id);

  if (!cart) {
    return res.status(404).json({ cartnotfound: 'Cart not found' });
  } else {
    res.json(cart);
  }
});

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

// router.post('/user/user_id', async (req, res) => {
//   const { petId } = req.body;
//   const quantity = Number.parseInt(req.body.quantity);
//   try {
//     let cart = await Cart.findById(req.params.id);
//     let petDetails = await Pet.findById(cart.petId);
//     if (!petDetails) {
//       return res.status(500).json({
//         type: 'Not found',
//         msg: 'Invalid request',
//       });
//     }
//     if (cart) {
//       const idxFound = cart.items.findIndex((pet) => pet.petId.id == petId);
//       if (idxFound !== -1 && quantity <= 0) {
//         cart.items.splice(idxFound, 1);
//         if (cart.items.length == 0) {
//           cart.subTotal = 0;
//         } else {
//           cart.subTotal = cart.items
//             .map((item) => item.total)
//             .reduce((acc, ele) => acc + ele);
//         }
//       } else if (idxFound !== -1) {
//         cart.items[idxFound].quantity =
//           cart.items[idxFound].quantity + quantity;
//         cart.items[idxFound].total =
//           cart.items[idxFound].quantity * petDetails.price;
//         cart.items[idxFound].price = petDetails.price;
//         cart.subTotal = cart.items
//           .map((item) => item.total)
//           .reduce((acc, ele) => acc + ele);
//       } else if (quantity > 0) {
//         cart.items.push({
//           petId: petId,
//           quantity: quantity,
//           price: petDetails.price,
//           total: parseInt(quantity * petDetails.price),
//         });
//         cart.subTotal = cart.items
//           .map((item) => item.total)
//           .reduce((acc, ele) => acc + ele);
//       } else {
//         return res.status(400).json({
//           type: 'Invalid',
//           msg: 'Invalid request',
//         });
//       }
//       let data = await cart.save();
//       res.status(200).json({
//         type: 'Success',
//         msg: 'Cart updated',
//         data: data,
//       });
//     } else {
//       const cartData = {
//         items: [
//           {
//             petId: petId,
//             quantity: quantity,
//             total: parseInt(petDetails.price * quantity),
//             price: petDetails.price,
//           },
//         ],
//         subTotal: parseInt(petDetails.price * quantity),
//       };
//       cart = await Cart.create(cartData);
//       res.json(cart);
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({
//       type: 'invalid',
//       msg: 'BROKEN',
//       err: err,
//     });
//   }
// });

module.exports = router;
