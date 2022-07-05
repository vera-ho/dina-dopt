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

router.post('/:id', async (req, res) => {});

module.exports = router;
