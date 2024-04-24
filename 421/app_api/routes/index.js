const express = require('express');
const router = express.Router();
const ctrlBlogs = require('../controllers/ctrlBlog');
const { verifyToken } = require('../middleware/authJwt');
const authController = require('../controllers/authController');
const Message = require('../../models/message');

router.get('/blog', ctrlBlogs.getAllBlogs);

router.get('/blog/:id', ctrlBlogs.getBlogById);

router.post('/blog', verifyToken, ctrlBlogs.createBlog); // Secured

router.put('/blog/:id', verifyToken, ctrlBlogs.updateBlog); // Secured

router.delete('/blog/:id', verifyToken, ctrlBlogs.deleteBlog); // Secured

router.post('/register', authController.register);
router.post('/login', authController.login);


// Get messages
router.get('/messages', async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Post a new message
router.post('/messages', async (req, res) => {
    const message = new Message({
        text: req.body.text,
        author: req.body.author // Ensure this is included in your client-side request
    });
    try {
        const newMessage = await message.save();
        res.status(201).json(newMessage);
        req.app.get('io').emit('message', newMessage);  // Emit the message to all clients
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;