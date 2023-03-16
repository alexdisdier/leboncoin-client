const mongoose = require('mongoose');

const Offer = mongoose.model('Offer', {
  title: {
    type: String,
    minLength: 1,
    maxLength: 25,
    required: true,
  },
  description: {
    type: String,
    minLength: 0,
    maxLength: 500,
    default: '',
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    default: 0,
    required: true,
  },
  pictures: {
    type: Array,
    of: String,
    default: [],
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Offer;
