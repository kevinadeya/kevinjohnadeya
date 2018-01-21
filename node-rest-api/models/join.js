var mongoose = require('mongoose');

var JoinCrossing = mongoose.model('JoinCrossing', {
  name: {
    type: String,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    minlength: 1,
    trim: true
  },
  birth: {
    type: String,
    minlength: 1,
    trim: true
  },
  city: {
    type: String,
    minlength: 1,
    trim: true
  },
  type: {
    type: String,
    minlength: 1,
    trim: true
  },
  newsletter: {
      type: Boolean,
      default: false
  }
});

module.exports = {JoinCrossing};