// jshint esversion:6
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const monsterDeckSchema = new Schema({
    index :{
        type: Number,
        required : true
    },
    room: {
        type: String,
        require: true
    }
});

module.exports = monsterDeckSchema;