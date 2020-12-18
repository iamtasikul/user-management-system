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
      res.send(data);
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
  UserDB.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some Error Occured While Fetch Data From DB',
      });
    });
};

const indexController = (req, res) => {
  res.render('index');
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
