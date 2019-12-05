const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/check', function(req, res, next) {
  res.send()
});

router.get('/:email', (req, res, next) => {
  console.log(req.body);
  console.log(req.params);
  res.send()
})

module.exports = router;