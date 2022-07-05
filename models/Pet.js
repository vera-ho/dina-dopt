const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    petType: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Pet = mongoose.model('Pet', PetSchema);
