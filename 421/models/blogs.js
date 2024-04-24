
const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        required: true
    },
    blogText: {
        type: String,
        required: true
    },
    blogAuthor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }},
    { timestamps: true });

// Create a model from the schema
const Blog = mongoose.model('Blog', blogSchema);

// Export the model
module.exports = Blog;