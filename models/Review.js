const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  pet: {
    type: Schema.Types.ObjectId,
    ref: 'pets'
  },
  title: {
    type: String,
    required: false,
    default: "",
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Review = mongoose.model('review', ReviewSchema);

// user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
// pet: { type: Schema.Types.ObjectId, ref: 'Pet', required: true },
// rating: { type: Number, min: 1, max: 5, required: true },
// content: { type: String, required: true },
// });

// module.exports = Review = mongoose.model('Review', ReviewSchema);