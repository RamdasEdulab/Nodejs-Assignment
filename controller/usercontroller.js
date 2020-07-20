const express = require("express");
const router = require("express").Router();
var { User } = require("../models/user");
var view_data = [];


router.post("/adduser", function (req, res) {
  var users = User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    DOB: req.body.DOB,
  });
  users.save(function (err, result) {
    if (err) {
      console.error(err);
      return res.status(400).json({
        message: "bad request",
      });
    } else {
      res.json({
        status: 200,
        data: result,
      });
    }
  });
});



router.get("/:number", function (req, res) {
  view_data.length=0;
  prime_number(req.params.number);

  res.json({
    data: view_data,
  });

})

function prime_number(number){
for (var counter = 0; counter <= number; counter++) {

  var notPrime = false;
  for (var i = 2; i <= number; i++) {
      if (counter%i===0 && i!==counter) {
        
          notPrime = true;
          
      }
  }
  if (notPrime === false) {
    view_data.push(counter)
  }
}
}

module.exports = router;
