const express = require('express');
const router = express.Router();
const { getPosts, createPost, getComments, createComment } = require('../controllers/postController');

// Routes for posts
router.route('/')
    .get(getPosts)
    .post(createPost);

// Routes for comments
router.route('/:postId/comments')
    .get(getComments)
    .post(createComment);

module.exports = router;
