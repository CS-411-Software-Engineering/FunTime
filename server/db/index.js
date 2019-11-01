const mongoose = require('mongoose');
const DB = require('./config');
mongoose.connect(`mongodb+srv://${DB.USER}:${DB.PASSWORD}@connect4-xkfvh.mongodb.net/test?retryWrites=true&w=majority`, {useUnifiedTopology: true, useNewUrlParser: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB Connected!')
});

const userSchema = new mongoose.Schema({
  email: String,
  pref: Array,
  location: String,
  Age: Number,
})