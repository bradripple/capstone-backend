const mongoose = require('mongoose');
const { Schema } = mongoose;

const imageSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    subject: {
        type: Array,
        required: true
    }
});

const Image = mongoose.model('Image', imageSchema);


module.exports = Image;