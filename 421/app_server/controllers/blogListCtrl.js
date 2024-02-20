// controllers/blogListCtrl.js
var Blog = require('../models/blogs'); // Ensure the path is correct

// Function to handle the index route using promises
const index = (req, res) => {
    Blog.find({})
        .then(blogs => {
            res.render('blogList', { blogs});
        })
        .catch(err => {
            console.error('Error fetching blogs:', err);
            res.status(500).send('Error fetching blogs');
        });
};

module.exports = {
    index
};