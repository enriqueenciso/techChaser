var mongoose = require('mongoose');

var Event = mongoose.model('Events', {
    name: {
      type: String,
      required: true,
      minlength: 1,
      //trim remove withespaces in the begginning and in the end
      trim: true
    },
    status:{
      type: String,
      required: true,
      minlength: 1,
      //trim remove withespaces in the begginning and in the end
      trim: true
    },
    /*
    date: {
      type: Date,
      required: true,
    },*/
    region: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    description: {
      type: String,
      required: true,
      minlength: 4,
      trim: true
    }
});

module.exports = {Event}
