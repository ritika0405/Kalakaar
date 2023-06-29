const mongoose = require("mongoose")
const mongoURI = "mongodb+srv://ritika_0405:Rits%401112@cluster0.6wm14dx.mongodb.net/Kalakaar?retryWrites=true&w=majority"

const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
}
module.exports = connectToMongo
