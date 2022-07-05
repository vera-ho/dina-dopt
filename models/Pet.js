const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema();

module.exports = Pet = mongoose.model('Pet', PetSchema);