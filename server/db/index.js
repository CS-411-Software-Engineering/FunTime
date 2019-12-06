const mongoose = require('mongoose');
const DB = require('./config');
mongoose.connect(`mongodb+srv://${DB.USER}:${DB.PASSWORD}@connect4-xkfvh.mongodb.net/funTime?retryWrites=true&w=majority`, {useUnifiedTopology: true, useNewUrlParser: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB Connected!')
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  pref: Array,
  location: String
})

const User = mongoose.model('User', userSchema);


const findUserByEmail = (email) => {
  return new Promise((res, rej) => {
    User.findOne({ email }, (err, result) => {
      if(err) {
        console.log("error finding user by email:", err);
        rej(err);
      } else {
        res(result);
      }
    })
  })
}

const createUser = (user) => {
  return new Promise((res, rej)=> {
    User.create({name: user.name, email: user.email, pref: [], location: user.location})
    .then((createdUser)=> {
      res(createdUser)
    })
    .catch(err => {
      console.log("Error creating user:", err);
      rej(err)
    })
  })
}

const updateUserPref = (email = "", pref = []) => {
  return new Promise((res, rej) => {
    User.findOneAndUpdate({ email }, { pref }, (err, result) => {
      if(err) {
        console.log("Updating User Pref Error:", err);
        rej(err);
      } else {
        res(result);
      }
    })
  })
}

module.exports = { findUserByEmail, createUser, updateUserPref };