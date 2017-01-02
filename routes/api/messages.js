var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'}
  ])
})

module.exports = router
