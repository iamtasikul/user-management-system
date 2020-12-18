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
