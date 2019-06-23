const mongoose = require('mongoose');
const mailSchema = require('./models/mail');

module.exports = config => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongoURI, {useNewUrlParser: true});
    mongoose.model('mail', mailSchema);
};