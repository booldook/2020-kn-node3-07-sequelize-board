var express = require('express');
var router = express.Router();
var { User } = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', async (req, res, next) => {
  let result;
  try {
    result = await User.create({
      userid: 'test',
      userpw: '000000',
      username: '테스트',
      email: 'test@test.com'
    });
    res.json(result);
  }
  catch(e) {
    next(e);
  }
})

module.exports = router;
