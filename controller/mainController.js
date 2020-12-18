const axios = require('axios');
const UserDB = require('../model/model');

//Create and Save New User
exports.create = (req, res) => {
  //validate Request
  if (!req.body) {
    res.status(400).send({ message: 'Content Can Not Be Empty' });
    return;
  }

  //Create New User
  const user = new UserDB({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  //Save User In Database
  user
    .save(user)
    .then((data) => {
      //res.send(data);
      res.redirect('/add-user');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some Error Occured While Creating a Create Operaton',
      });
    });
};

//Read/Retrieve All/Single User
exports.find = (req, res) => {
  if (req.query.id) {
    //Retrieve Single User
    const id = req.query.id;
    UserDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Not Found User id ${id}`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error in Retrieving user id ${id}`,
        });
      });
  } else {
    //Retrieve All Users
    UserDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some Error Occured While Fetch Data From DB',
        });
      });
  }
};

//Update User By id
exports.update = (req, res) => {
  //validate Request
  if (!req.body) {
    res.status(400).send({ message: 'Data to Update Can Not Be Empty' });
    return;
  }

  const id = req.params.id;
  UserDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with id ${id} , Maybe User Not Found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error Update User Information',
      });
    });

  //
};

//Delete User By id
exports.delete = (req, res) => {
  const id = req.params.id;
  UserDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Delete user with id ${id} , Maybe User Id is Wrong`,
        });
      } else {
        res.send({ message: 'User Deleted Sucessfully' });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could Not delete User with Id ${id}`,
      });
    });
};

const indexController = (req, res) => {
  // Make a get request to /api/users
  const PORT = process.env.PORT || 3000;
  axios
    .get(`http://localhost:${PORT}/api/users`)
    .then(function (response) {
      res.render('index', { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

const addUserController = (req, res) => {
  res.render('add_user');
};

const updateUserController = (req, res) => {
  res.render('update_user');
};

exports.indexController = indexController;
exports.addUserController = addUserController;
exports.updateUserController = indexController;
