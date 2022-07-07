const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Review = require('../../models/Review');
const Pet = require('../../models/Pet');
const validateReviewInput = require('../../validation/reviews');

router.get('/', (req, res) => {
    Review.find()
        .sort({ date: -1 })
        .then(reviews => res.json(reviews))
        .catch(err => res.status(404).json({ noreviewsfound: 'No reviews found' }));
});

router.get('/user/:user_id', (req, res) => {
    Review.find({user: req.params.user_id})
        .then(reviews => res.json(reviews))
        .catch(err =>
            res.status(404).json({ noreviewsfound: 'No reviews found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Review.findById(req.params.id)
        .then(review => res.json(review))
        .catch(err =>
            res.status(404).json({ noReviewfound: 'No review found with that ID' })
        );
});

router.get('/pet/:pet_id', (req, res) => {
  Review.find({pet: req.params.pet_id})
      .then(reviews => res.json(reviews))
      .catch(err =>
          res.status(404).json({ noreviewsfound: 'No reviews found for that pet' }
      )
  );
});

router.post('/pet/:pet_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateReviewInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }

      // const pet = Pet.findById(req.params.petId)

        const newReview = new Review({
          title: req.body.title,
          text: req.body.text,
          user: req.user.id,
          pet: req.params.pet_id
        });
    
        newReview.save().then(review => res.json(review));

      
      // 62c460a1dd59da02b2395a27
   
    }
);


module.exports = router;