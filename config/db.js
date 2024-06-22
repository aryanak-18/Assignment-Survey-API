const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect('mongodb+srv://aryan:aryan@cluster0.ht3ktrn.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB');
    }).on('error', (error) => {
        console.log('MongoDB connection error:', error);
    });
};

module.exports = dbConnect;
