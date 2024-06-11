// const mongoose = require('mongoose');

// const CommentSchema = new mongoose.Schema({
//     postId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Post',
//         required: true
//     },
//     content: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = mongoose.model('Comment', CommentSchema);


const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    content: {
        type: String, // Since Quill generates HTML, we'll store it as a string
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment', CommentSchema);
