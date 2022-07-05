const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    pets: [
      {
        petId: Number,
        name: String,
        quantity: { type: Number, default: 1 },
        price: { type: Number, default: 0 },
      },
    ],
    totalPrice: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = Cart = mongoose.model('Cart', CartSchema);
