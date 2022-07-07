const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
  {
    petId: {
      type: Schema.Types.ObjectId,
      ref: 'Pet',
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity can not be less than 1.'],
      default: 1,
    },
    price: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CartSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    items: [ItemSchema],
    subTotal: {
      default: 0,
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Cart = mongoose.model('Cart', CartSchema);
