const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PercussionSchema = new Schema({
  name: String,
  size: String,
  description: String,
  type: String,
});

const Percussion = mongoose.model('Percussion', PercussionSchema);
module.exports = Percussion;
