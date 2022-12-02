const mongoose = require('mongoose');

mongoose.connection.on('error', err => {
  console.log('Connection error', err);
  process.exit(1);
});

mongoose.connection.once('open', () => {
  console.log('Connected to Mongo DB to', mongoose.connection.name);
});

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

module.exports = mongoose.connection;