const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    location:{
        type: {
            type: String, 
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

const Location = mongoose.model('location', locationSchema);

module.exports = Location;