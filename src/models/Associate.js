const mongoose = require('mongoose');

const associateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: v => regWord.test(v),
            message: props => `${props.value} is not a valid email address`
        }
    },
    userName: {
        type: String,
        required: true,
        validate: {
            validator: v => regWord.test(v),
            message: props => `${props.value} is not a valid User Name`
        }
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    birthday: {
        type: Date,
    },
    address: {
        street: String,
        city: String,
    },
});

module.exports = mongoose.model('Associate', associateSchema);