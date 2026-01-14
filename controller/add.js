const mongoose = require('mongoose')
const messgaeModel = require('../models/messge')



async function push(name, email, password, phone, req, res) {
  console.log(name, email, password, )
  
   try {
    const newMessage = new messgaeModel({
      name: name,
      email: email,
      subject: password,
      message: phone
    });
    await newMessage.save();
    req.flash("error", " Message Sent Successfully.");
    res.redirect('/contact');
  } catch (error) {
    req.flash("error", " Something Went Wrong. Please Try Again Later.");
    res.redirect('/contact');
  } 

}
module.exports = push;