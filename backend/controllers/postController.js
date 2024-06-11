const Post = require('../models/post');
const Comment = require('../models/comment');

// Get all posts
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a post
exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get comments for a post
exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a comment for a post
exports.createComment = async (req, res) => {
    const { content } = req.body;
    const newComment = new Comment({
        postId: req.params.postId,
        content
    });

    try {
        await newComment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
