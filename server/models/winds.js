const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WindSchema = new Schema({
  name: String,
  description: String,
  type: String,
});

const Wind = mongoose.model('Wind', WindSchema);
module.exports = Wind;
