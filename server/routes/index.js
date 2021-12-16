var fs = require('fs');
var path = require('path')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', (req, res, next) => {
  const file = path.resolve(__dirname, '..', 'public', 'pdf', 'Obesity.pdf');
  fs.readFile(file, (err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
});

module.exports = router;
