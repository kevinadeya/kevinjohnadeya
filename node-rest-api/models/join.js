var mongoose = require('mongoose');

var JoinCrossing = mongoose.model('JoinCrossing', {
  name: {
    type: String,
<<<<<<< HEAD
    //required: true,
=======
>>>>>>> d07136d80b50545359fa2f8bba10a259e1fb7db6
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
<<<<<<< HEAD
    //required: true,
=======
>>>>>>> d07136d80b50545359fa2f8bba10a259e1fb7db6
    minlength: 1,
    trim: true
  },
  birth: {
    type: String,
<<<<<<< HEAD
    //required: true,
=======
>>>>>>> d07136d80b50545359fa2f8bba10a259e1fb7db6
    minlength: 1,
    trim: true
  },
  city: {
    type: String,
<<<<<<< HEAD
    //required: true,
=======
>>>>>>> d07136d80b50545359fa2f8bba10a259e1fb7db6
    minlength: 1,
    trim: true
  },
  type: {
    type: String,
<<<<<<< HEAD
    //required: true,
=======
>>>>>>> d07136d80b50545359fa2f8bba10a259e1fb7db6
    minlength: 1,
    trim: true
  },
  newsletter: {
      type: Boolean,
      default: false
  }
});

module.exports = {JoinCrossing};