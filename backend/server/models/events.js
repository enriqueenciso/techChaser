var mongoose = require('mongoose');

var Todo = mongoose.model('Events', {
    eventName: {
        type: String,
        required: true,
        minlength: 1,
        //trim remove withespaces in the begginning and in the end
        trim: true
    },
    statusEvent:{
      type: String,
      required: true,
      minlength: 1,
      //trim remove withespaces in the begginning and in the end
      trim: true
    },
    date: {
      type: Date,
      required: true,
    },
    region: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    description: {
      type: String,
      required: true,
      minlength: 5,
      trim: true
    }
});

module.exports = {Todo}
