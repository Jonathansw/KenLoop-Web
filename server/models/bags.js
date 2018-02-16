const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BagSchema = new Schema({
  name: String,
  description: String,
  type: String,
});

const Bag = mongoose.model('Bag', BagSchema);
module.exports = Bag;
