const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GuitarSchema = new Schema({
  name: String,
  description: String,
  type: String,
  different: Boolean,
});

const Guitar = mongoose.model('Guitar', GuitarSchema);
module.exports = Guitar;
