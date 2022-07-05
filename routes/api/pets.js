const express = require('express');
const router = express.Router();
const Pet = require('../../models/Pet');

router.get('/', async (req, res) => {
  const pets = await Pet.find();
  res.json(pets);
});

router.post('/', async (req, res) => {
  const { name, petType, description, price } = req.body;
  const newPet = await Pet.create({
    name,
    petType,
    description,
    price,
  });
  res.json(newPet);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const pet = await Pet.findById(id);
  res.json(pet);
});

module.exports = router;
