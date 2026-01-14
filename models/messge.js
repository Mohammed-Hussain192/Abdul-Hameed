const mongoose = require('mongoose');

const userSchema22 = mongoose.Schema({
  name: {
    type: String,
    minlength: 3,  // Correct spelling is minlength, not minLenght
  },
  email: {
    type: String,
   
  },
 
  subject: {
    type: String,
  },
    message: {
    type: String,
  },
  date: {
    type: String,
    default: () => new Date().toISOString().split('T')[0]  // ✅ generates on document creation
  }
});

module.exports = mongoose.model("Account", userSchema22);