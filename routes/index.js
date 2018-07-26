var express = require('express');
var router = express.Router();
var app = express();
var  APPY = require('../models/apps');

/* GET home page. */
router.get('/', function(req, res, next) {
    
    res.render('index', {title: "Summer Bash 2018!"});
    
});


router.get('/thanks', function(req, res, next) {
    
    res.render('done', {title: "Application Received!"});
    
});

/* GET apply page. */
router.get('/apply', function(req, res, next) {
    
    APPY.countDocuments({}, function(err, num) {
        
        if (err) throw next (err);
        var freeSpots = (10-num);
    
    res.render('application', {title: "Apply to Enter Summer Bash!", mNum:num, free:freeSpots});
    
    });
    
});

router.post("/submitapp", function(req, res, next) {
    
    function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

var x = makeid();
    
    var myAPP = new APPY ({
    
    username: x,
    teamName: req.body.teamname,
    playerOne: req.body.p1name,
    playerTwo: req.body.p2name,
    p1Console: req.body.p1platform,
    p2Console: req.body.p2platform,
    canStream: req.body.canstream,
    email: req.body.email,
        
        
    });
    
    myAPP.save();
    console.log(myAPP)
    
    res.redirect("/thanks");
    
});



module.exports = router;
