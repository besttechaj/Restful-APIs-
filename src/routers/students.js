const express = require('express');

//to require the collection
const Student = require('../models/students');

//MANAGING THE APIs USING REACT ROUTER
//S-1)create a new router
const router = new express.Router();

//s-2)we need to define the router :  we have many method in router like router.get(),router.put(),router.post(),router.delete() similarly for routing we can use router.get(),router.post()....

router.get('/ajay', (req, res) => {
  res.send(`hello aliens !!!!!!`);
});

///s-3)WE need to register our router so that express can understand
//use this inside another file you want to perform operation
// router.use(router);

//create a new students api with the help of Async await

router.post('/students', async (req, res) => {
  console.log(req.body);
  //passing req.body --> this is the change in the body  we want
  const user = await new Student(req.body);
  //.save ()-->will return me a promise hence dealing the promise with Async await method ... to catch error in async await use try and catch
  const createUser = await user.save();

  res.status(201).send(createUser);
});

//to read the data of the registered students using GET method

router.get('/students', async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (error) {
    res.send(error);
  }
});

//to get the individual student data using ID with the help of GET Request

router.get('/students/:id', async (req, res) => {
  try {
    //here the req.params.id -> id given by the client
    const _id = req.params.id;
    //passing the requested id to the query and if there is any match with the client's given id then it will return the data with respect to matched _id in the dtabase
    const oneStudentData = await Student.findById({ _id: _id });
    if (!oneStudentData) {
      res.status(404).send();
    } else {
      res.status(200).send(oneStudentData);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

//to update the data of a specific User using PATCH Request
router.patch('/students/:id', async (req, res) => {
  try {
    const id = req.params.id;
    //here we are passing a id to get that matched id's user data if there is match else return error using PATCH Request
    //passing req.body --> this is the change in the body  we want.
    //option:{new:true}-> display me the updated value in console not the older one.
    const updateUser = await Student.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    console.log(req.params.id);
    res.send(updateUser);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

//to DELETE the data of a specific User using DELETE Request
router.delete('/students/:id', async (req, res) => {
  try {
    const id = req.params.id;
    //here we are passing a id to get that matched id's user data if there is match else return error using PATCH Request
    //passing req.body --> this is the change in the body  we want.
    //option:{new:true}-> display me the updated value in console not the older one.
    const deleteUser = await Student.findByIdAndDelete(
      { _id: id },
      {
        new: true,
      }
    );
    if (!req.params.id) {
      return res.status(400).send();
    } else {
      console.log(req.params.id);
      res.send(deleteUser);
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

module.exports = router;
