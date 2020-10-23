const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newEvent = new Schema({

  userID: { type:String, required: true },
  eventName: { type:String, required: true },
  sport: { type:String, required: true },
  organizer: { type:String, required: true },
  time: { type:String, required: true },
  date: { type:String, required: true },
  discription: { type:String, required: true },
  rules: { type:String, required: true },
  price: { type:String, required: true },
  img: { type:String, required: true },
  type: { type:String},
}, {
  timestamps: true,
});

const MedicinOrder = mongoose.model('MedicinOrder', newEvent);

module.exports = MedicinOrder;
