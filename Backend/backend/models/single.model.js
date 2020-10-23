const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const single = new Schema({
  eventID: {
    type: String,
    required: true,
    minlength: 3
  },
  player: {
    type: Object, 
    blackbox: true ,
    required: true,
  },
}, {
  timestamps: true,
});

const Single = mongoose.model('Single', single);

module.exports = Single;
