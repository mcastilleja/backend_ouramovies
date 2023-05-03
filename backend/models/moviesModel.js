const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Title is required']
    },
    original_title : {
        type : String,
        required : [true, 'Original title is required']
    },
    overview : {
        type : String,
        required : [true, 'Overview is required']
    },
    release_date : {
        type : String,
        required : true
    },
    original_language : {
        type : String,
        required : true
    },
    genre_ids : {
        type : [Number],
        required : [true, 'Genre id is required']
    },
    poster_path : {
        type : String,
        required : true
    },
    backdrop_path : {
        type : String,
        required : true
    },
    adult : {
        type : Boolean,
        required : true
    },
    vote_count : {
        type : Number,
        required : true
    },
    vote_average : {
        type : Decimal128,
        required : false
    },
    popularity : {
        type : Number,
        required : true
    },
    video : {
        type : Boolean,
        required : true
    }
},{
    timestamps : true
})

module.exports = mongoose.model('Movie', movieSchema)
