const mongoose = require("../database/mongoose");

var Schema = mongoose.Schema;

var {User} = require('../models/user')

let session = null;
return User.createCollection().
  then(() => mongoose.startSession()).
  then(_session => {
    session = _session;
    return User.deleteOne({ name:'ramdas',email:'jdh@123',password:'gwhf677',phone: '4566778889',DOB:'45/88/988'  });
  }).
  then(() => {
    session.startTransaction();
    return User.deleteOne({ }).session(session);
  }).
  then(user => {

    assert.ok(user.$session());
    user.name = 'bar';
    
    return user.deleteOne();
  }).
  then(() => User.deleteOne({   })).
  
  then(doc => assert.ok(!doc)).
  then(() => session.commitTransaction()).
  then(() => session.endSession()).
  then(() => User.deleteOne({   })).
  then(doc => assert.ok(doc));