const express = require('express');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false, required: true },
  phone: { type: String, default: false, required: false },
  address: { type: String, default: false, required: false },
  images: { type: String, default: false },
});

const User = mongoose.model('User', userSchema);

module.exports = User;