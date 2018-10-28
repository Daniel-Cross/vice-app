const mongoose = require('mongoose');

const { Schema } = mongoose;
const viceSchema = new Schema({
  name: String,
  amount: Number,
});

module.exports = mongoose.model('Vice', viceSchema);