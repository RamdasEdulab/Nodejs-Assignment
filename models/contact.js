const mongoose = require('mongoose');

var Contact = mongoose.model('contact',{
    name: {type:String,required:true},
    phone:{type:Number,required:true},

});

module.exports={Contact};