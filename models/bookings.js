const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Booking', bookingSchema)