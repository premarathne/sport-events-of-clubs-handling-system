const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const single = new Schema({
  eventID: {
    type: String,
    required: true,
    minlength: 3
  },
  player: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Single = mongoose.model('Single', single);

module.exports = Single;
