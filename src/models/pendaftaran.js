const mongoose = require('mongoose');

const pendaftaranSchema = mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    queueId:{
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    npwp: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    anotherAddres: {
        type: String,
    },
    queueNumber: {
        type: String,
        required: true
    },
    contactNumber:  {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('nomor', pendaftaranSchema)