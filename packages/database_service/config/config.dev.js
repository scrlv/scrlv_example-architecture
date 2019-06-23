const {PORT, MONGO_PASSWORD} = process.env;

module.exports = {
    port: PORT || 4000,
    mongoURI: `mongodb+srv://microservice_db:${MONGO_PASSWORD}@scrlvcluster0-0tlrk.mongodb.net/test?retryWrites=true&w=majority`
};