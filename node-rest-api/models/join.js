var mongoose = require('mongoose');

var JoinCrossing = mongoose.model('JoinCrossing', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  birth: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  city: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  type: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  newsletter: {
      type: boolean,
      default: false
  }
});

module.exports = {JoinCrossing};