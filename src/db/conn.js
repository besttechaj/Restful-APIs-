const mongoose = require('mongoose');
const validator = require('validator');

//creating a new database
//here the localhost is 127.0.0.1
mongoose
  .connect('mongodb://127.0.0.1:27017/students-api')
  .then(() => {
    console.log(
      `connection is successfully established with mongodb and new database has been created`
    );
  })
  .catch((err) => {
    console.log('Error Occur during Connection to database ');
    console.log(err);
  });
