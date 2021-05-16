const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    itemname: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
        
    },
});


module.exports = mongoose.model('FoodItems', PostSchema);