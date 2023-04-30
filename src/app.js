const express = require('express');
const app = express();

const studentRouter = require('./routers/students');

//to require the mongoose(creation of database) db file
require('./db/conn');

//if we are try to run this code on local system then port 3000 will be used else while hosting our website somewhere process.env.PORT will give a random port number.
const port = process.env.PORT || 3000;

//express.json() is a method inbuilt in express to recognize the incoming request objects as a json object.this method is called as a middleware in your application using the code:  app.use(express.json()).
//You don't need express.json() and express.urlencoded() for GET Requests or DELETE Requests. we only need express.json() for POST Request and PUT Request.
//adding a middleware
app.use(express.json());

app.use(studentRouter);

//listen on the port
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('server is running successfully at port no', port);
  }
});

//BELOW CODE IS JUST FOR REFERENCE

/////////////////////////////////////////////////////////////////

//routing example
/*
const express = require('express');
const app = express();
const PORT = 3000;
 
// Multiple routing
const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();
 
router1.get('/user', function (req, res, next) {
    console.log("User Router Working");
    res.end();
});
 
router2.get('/admin', function (req, res, next) {
    console.log("Admin Router Working");
    res.end();
});
 
router2.get('/student', function (req, res, next) {
    console.log("Student Router Working");
    res.end();
});
 
app.use(router1);
app.use(router2);
app.use(router3);
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
*/
/////////////////////////////////////////////////////////////////

//create a new students api with the help of .then().catch()
/*
  app.post('/students', (req, res) => {
  
    console.log(req.body);
    const user = new Student(req.body);
    //.save ()-->will return me a promise hence dealing the promise with .then().catch() method
    user
      .save()
      .then(() => {
        res.status(201).send(user);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });
  */

//MANAGING THE APIs USING REACT ROUTER

// //S-1)create a new router
// const router = new express.Router();

// //s-2)we need to define the router :  we have many method in app like app.get(),app.put(),app.post(),app.delete() similarly for routing we can use router.get(),router.post()....

// router.get('/p1', (req, res) => {
//   res.send('<h1>Hello Coders !!!1</h1>');
// });

// //s-3)WE need to register our router so that express can understand
// app.use(router);
