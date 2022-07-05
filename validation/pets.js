const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePetInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.petType = validText(data.petType) ? data.petType : '';
  data.description = validText(data.description) ? data.description : '';

  if (!Validator.isLength(data.name, { min: 1, max: 50 })) {
    errors.text = 'Pet name is too long!';
  }

  if (!Validator.isLength(data.petType, { min: 3, max: 50 })) {
    errors.text = 'PetType is too long!';
  }

  if (!Validator.isLength(data.description, { min: 5, max: 300 })) {
    errors.text = 'Description is too long!';
  }

  if (Validator.isEmpty(data.name)) {
    errors.text = 'Name field is required';
  }

  if (Validator.isEmpty(data.petType)) {
    errors.text = 'PetType field is required';
  }

  if (Validator.isEmpty(data.description)) {
    errors.text = 'Description field is required';
  }

  if (Validator.isEmpty(data.price)) {
    errors.text = 'Price field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};