var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var APP = new Schema({
    
    username: String,
    teamName: String,
    playerOne: String,
    playerTwo: String,
    p1Console: String,
    p2Console: String,
    canStream: String,
    email: String,
    
});

APP.plugin(passportLocalMongoose);

module.exports = mongoose.model('apps', APP);