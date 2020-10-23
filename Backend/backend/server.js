const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ATLAS_UR=mongodb://127.0.0.1:27017/chamara

//const uri = process.env.ATLAS_URI;
const uri = "mongodb://127.0.0.1:27017/sport";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const eventRouter = require('./routes/newEvent');
const usersRouter = require('./routes/users');

app.use('/newevent', eventRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
