const { validationResult } = require('express-validator');
const BlogModel = require('../models/BlogModel');
const constants = require('../constants/ResponseConstants');
const path = require('path');
const fs = require('fs');

exports.createBlog = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error('Invalid Value');
    err.statusCode = 400;
    err.data = errors.array();
    throw err;
  }

  if (!req.file) {
    const err = new Error('No Image');
    err.statusCode = 422;
    err.data = errors.array();
    throw err;
  }

  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const body = req.body.body;
  const image = req.file.path.replace(/\\/g, '/');

  const posting = new BlogModel({
    title: title,
    subtitle: subtitle,
    body: body,
    image: image,
    author: {
      uuid: 1,
      name: 'Mulyono Putra',
    },
  });

  posting
    .save()
    .then((data) => {
      const result = {
        messages: constants.CREATED,
        data: data,
      };
      res.status(201).json(result);
    })
    .catch((err) => console.log(err));
};

exports.findAll = (req, res, next) => {
  BlogModel.find()
    .then((data) => {
      const result = {
        messages: constants.RETRIEVED_DATA_SUCCESS,
        data: data,
      };
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};

exports.findById = (req, res, next) => {
  const id = req.params.id;
  BlogModel.findById(id)
    .then((data) => {
      if (!data) {
        const err = new Error(constants.ID_NOT_FOUND);
        err.statusCode = 404;
        throw err;
      }
      res.status(200).json({
        messages: constants.RETRIEVED_DATA_SUCCESS,
        data: data,
      });
    })
    .catch((err) => console.log(err));
};

exports.update = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error('Invalid Value');
    err.statusCode = 400;
    err.data = errors.array();
    throw err;
  }

  if (!req.file) {
    const err = new Error('No Image');
    err.statusCode = 422;
    err.data = errors.array();
    throw err;
  }

  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const body = req.body.body;
  const image = req.file.path.replace(/\\/g, '/');

  const id = req.params.id;

  BlogModel.findById(id)
    .then((data) => {
      if (!data) {
        const err = new Error('Data Not Found!');
        err.statusCode = 404;
        throw err;
      }
      data.title = title;
      data.subtitle = subtitle;
      data.body = body;
      data.image = image;
      return data.save();
    })
    .then((response) => {
      res.status(200).json({
        messages: 'Updated!',
        data: response,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.delete = (req, res, next) => {
  const id = req.params.id;

  BlogModel.findById(id)
    .then((data) => {
      if (!data) {
        const err = new Error('Data Not Found!');
        err.statusCode = 404;
        throw err;
      }

      removeImage(data.image);
      return BlogModel.findByIdAndRemove(id);
    })
    .then((response) => {
      res.status(200).json({
        messages: constants.DELETED,
        data: response,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

const removeImage = (filePath) => {
  filePath = path.join(__dirname, '../../', filePath);
  fs.unlink(filePath, (err) => console.log(err));
};

exports.findAllWithPaging = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || 5;
  let totalItems;

  BlogModel.find()
    .countDocuments()
    .then(count => {
      totalItems = count;
      return BlogModel.find()
        .skip((parseInt(currentPage) - 1) * parseInt(perPage))
        .limit(parseInt(perPage));
    })
    .then((data) => {
      const result = {
        messages: constants.RETRIEVED_DATA_SUCCESS,
        data: data,
        total_items: totalItems,
        current_page: parseInt(currentPage),
        per_page: parseInt(perPage),
      };
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};
