const mongoose = require('mongoose');

const User = mongoose.model('User', {
  email: {
    // so when we populate, we don't pass the email, only account
    type: String,
    minLength: 1,
    maxLength: 50,
    trim: true,
    required: true,
  },
  token: {
    type: String,
    maxLength: 17,
    required: true,
  },
  salt: {
    type: String,
    maxLength: 17,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  account: {
    username: {
      type: String,
      minLength: 1,
      maxLength: 50,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      default: '0600000000',
    },
  },
});

module.exports = User;
