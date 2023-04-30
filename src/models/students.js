const mongoose = require('mongoose');
const validator = require('validator');

//we are creating an instance for mongoose.Schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [2, 'Should have Minimum 2 length'],
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: [true, 'emailId is already present'],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Please enter a valid emailId');
      }
    },
  },
  phone: {
    type: Number,
    length: [10, 'must have 10 digit'],
    required: true,
    unique: [true, 'number is already present'],
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    minlength: [4, 'Should have Minimum 4 length'],
    required: true,
  },
});

//now we need to define our Model that is we need to create a new collection for our database
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;
