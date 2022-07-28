const asyncHandler = require('express-async-handler');
const User = require('./../models/UserModel');
const bcrypt = require('bcryptjs');
const { generateToken, isAuth } = require('../utils/GenerateToken');
const path = require('path');

exports.register = asyncHandler(async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });

  const createdUser = await user.save();
  res.send({
    _id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
    isAdmin: createdUser.isAdmin,
    token: generateToken(createdUser),
    phone: createdUser.phone,
    address: createdUser.address,
  });
});

exports.login = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
        phone: user.phone,
        address: user.address,
      });
      return;
    }
  }
  res.status(401).send({ message: 'Invalid email & password' });
});

exports.findById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404).send({ message: 'User not found' });
  }
  res.send(user);
});

exports.updated = (req, res, next) => {
  User.updateMany({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    images: req.file.path.replace(/\\/g, '/'),
  })
    .exec()
    .then((result) => {
      res.status(200).json({ message: 'User updated' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
