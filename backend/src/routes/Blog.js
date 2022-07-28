const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const blogController = require('../controllers/BlogController');

router.post(
  '/post',
  [
    body('title')
      .isLength({ min: 5 })
      .withMessage('Title must be at least 5 characters long'),
    body('subtitle')
      .isLength({ min: 5 })
      .withMessage('Subtitle must be at least 5 characters long'),
    body('body')
      .isLength({ min: 5 })
      .withMessage('Body must be at least 5 characters long'),
  ],
  blogController.createBlog
);

router.get('/post', blogController.findAll);
router.get('/posts', blogController.findAllWithPaging);
router.get('/post/:id', blogController.findById);
router.put(
  '/post/:id',
  [
    body('title')
      .isLength({ min: 5 })
      .withMessage('Title must be at least 5 characters long'),
    body('subtitle')
      .isLength({ min: 5 })
      .withMessage('Subtitle must be at least 5 characters long'),
    body('body')
      .isLength({ min: 5 })
      .withMessage('Body must be at least 5 characters long'),
  ],
  blogController.update
);

router.delete('/post/:id', blogController.delete);

module.exports = router;
