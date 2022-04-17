const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nowShowingMovieSchema = new Schema({
    movieName:{type:String, require:true},
    Availability:{type:Boolean, require:true},
    seatsAvailable:{type:Number, require:true}
});

const nowShowingMovies = mongoose.model('nowShowingMovies', nowShowingMovieSchema);

module.exports = nowShowingMovies;


