const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: { type: String, required: true },
    author: { type: String, required: true }, // Add the author field
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('message', messageSchema);