const express = require('express');
const router = express.Router();
const Pet = require('../../models/Pet');
const passport = require('passport');
const validatePetInput = require('../../validation/pets');

router.get('/', async (req, res) => {
  const pets = await Pet.find();
  res.json(pets);
});

// router.post('/', async (req, res) => {
//   const { name, petType, description, price } = req.body;
//   const newPet = await Pet.create({
//     name,
//     petType,
//     description,
//     price,
//   });
//   res.json(newPet);
// });

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePetInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // const pet = Pet.findById(req.params.petId)

    const newPet = new Pet({
      name: req.body.name,
      petType: req.body.petType,
      description: req.body.description,
      price: req.body.price,
      image_url: req.body.image_url,
    });

    newPet.save().then((pet) => res.json(pet));

    // 62c460a1dd59da02b2395a27
  }
);

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const pet = await Pet.findById(id);
  res.json(pet);
});

module.exports = router;
