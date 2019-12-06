const express = require('express');
const router = express.Router();
const db = require('../db/index');
/* GET home page. */
router.get('/check', function(req, res, next) {
  res.send()
});

router.post('/verify', (req, res, next) => {
  const user = req.body
  console.log("user: ", user);
  db.findUserByEmail(user.email).then((exist)=> {
    console.log("exist:", exist);
    if(!exist) {
      db.createUser({ name: user.firstName + " " + user.lastName, email: user.email, pref: [], location: "Boston" })
      .then(userCreated => {
        res.send({first: true});
      })
    } else {
      res.send({first: false});
    }
  })

});

router.get('/preference/:email', (req,res,next) => {
  const { email } = req.params;
  console.log(email);
  db.findUserByEmail(email).then((result)=> {
    res.send({ pref: result.pref })
  })
})

router.put('/update', (req, res, next) => {
  const { pref, email } = req.body;
  console.log("pref, email:", pref, email);
  db.updateUserPref(email, pref).then((result) => {
    console.log("result after update pref: ", result)
    res.send();
  })
})

module.exports = router;