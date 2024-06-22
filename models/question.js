const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    topic: {
        type: String,
        required: true,
        enum: ['Education', 'Health', 'Technology'],
    },
    question: {
        type: String,
        required: true,
    },
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
