const mongoose = require('mongoose');
const mailSchema = new mongoose.Schema({
    subject: String,
    receiver: String,
    content: String,
});

module.exports = mailSchema;