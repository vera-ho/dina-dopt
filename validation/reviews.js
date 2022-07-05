const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReviewInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : '';
  data.title = validText(data.title) ? data.title : '';

  if (!Validator.isLength(data.title, { min: 0, max: 50 })) {
    errors.text = 'Review title is too long!';
  }

  if (!Validator.isLength(data.text, { min: 5, max: 300 })) {
    errors.text = 'Review body must be between 5 and 300 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};