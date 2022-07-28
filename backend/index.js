const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fileConfig = require('./src/config/FileConfig');
const error = require('./src/utils/ErrorHandler');

require('dotenv').config();

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const authRoutes = require('./src/routes/AuthenticationRoute');
const blogRoutes = require('./src/routes/Blog');

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(
  multer({
    storage: fileConfig.fileStorage,
    fileFilter: fileConfig.fileFilter,
  }).single('image')
);

app.use('/v1/auth', authRoutes);
app.use('/v1/blog', blogRoutes);

app.use((error, request, response, next) => {
  response?.status(500).send({ message: error?.message });
});

error.errorHandler();

mongoose
  .connect(process.env.ENVIRONMENT)
  .then(() => {
    app.listen(4000, () => console.log('Connected to the MongoDB'));
  })
  .catch((err) => console.log(err));
