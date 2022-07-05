const express = require('express');
const router = express.Router();
const Cart = require('../../models/Cart');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const cart = await Cart.findById(id);

  if (!cart) {
    return res.status(404).json({ cartnotfound: 'Cart not found' });
  } else {
    res.json(cart);
  }
});

router.post('/:id', async (req, res) => {
  const { petId } = req.body;
  const quantity = Number.parseInt(req.body.quantity);
  try {
    let cart = await Cart.findById(req.params.id);
    let petDetails = await Pet.findById(cart.petId);
    if (!petDetails) {
      return res.status(500).json({
        type: 'Not found',
        msg: 'Invalid request',
      });
    }
    if (cart) {
      const idxFound = cart.items.findIndex((pet) => pet.petId.id == petId);
      if (idxFound !== -1 && quantity <= 0) {
        cart.items.splice(idxFound, 1);
        if (cart.items.length == 0) {
          cart.subTotal = 0;
        } else {
          cart.subTotal = cart.items
            .map((item) => item.total)
            .reduce((acc, ele) => acc + ele);
        }
      } else if (idxFound !== -1) {
        cart.items[idxFound].quantity =
          cart.items[idxFound].quantity + quantity;
        cart.items[idxFound].total =
          cart.items[idxFound].quantity * petDetails.price;
        cart.items[idxFound].price = petDetails.price;
        cart.subTotal = cart.items
          .map((item) => item.total)
          .reduce((acc, ele) => acc + ele);
      } else if (quantity > 0) {
        cart.items.push({
          petId: petId,
          quantity: quantity,
          price: petDetails.price,
          total: parseInt(quantity * petDetails.price),
        });
        cart.subTotal = cart.items
          .map((item) => item.total)
          .reduce((acc, ele) => acc + ele);
      } else {
        return res.status(400).json({
          type: 'Invalid',
          msg: 'Invalid request',
        });
      }
      let data = awaitcart.save();
      res.status(200).json({
        type: 'Success',
        msg: 'Cart updated',
        data: data,
      });
    } else {
      const cartData = {
        items: [
          {
            petId: petId,
            quantity: quantity,
            total: parseInt(petDetails.price * quantity),
            price: petDetails.price,
          },
        ],
        subTotal: parseInt(petDetails.price * quantity),
      };
      cart = await Cart.create(cartData);
      res.json(cart);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      type: 'invalid',
      msg: 'BROKEN',
      err: err,
    });
  }
});

module.exports = router;
