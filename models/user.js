const mongoose = require('mongoose');

var User = mongoose.model('user',{
    name: {type:String,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,unique:true,required:true},
    phone:{type: Number, refPath: 'contact'},
    DOB:{type:String,required:true}

});

module.exports={User};