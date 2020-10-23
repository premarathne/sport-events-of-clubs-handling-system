const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactUs = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
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

const ContactUs = mongoose.model('ContactUs', contactUs);

module.exports = ContactUs;
