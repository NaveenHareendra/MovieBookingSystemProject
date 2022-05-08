const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const comingSoonMoviesSchema = new Schema({
    movieName:{type:String, require:true},
    releaseDate:{type:String, require:true}
});

const comingSoonMovies = mongoose.model('comingsoonmovies', comingSoonMoviesSchema);

module.exports = comingSoonMovies;


