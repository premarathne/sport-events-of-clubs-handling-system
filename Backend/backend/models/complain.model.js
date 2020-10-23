const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const complain = new Schema({
  eventID: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  msg: {
    type: String,
    required: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Complain = mongoose.model('Complain', complain);

module.exports = Complain;
