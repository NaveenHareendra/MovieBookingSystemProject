const router = require('express').Router();
let nowShowingMovies = require('../Models/nowShowingMovies.model');


router.route('/nowshowingmovies').get((req,res)=>{

    nowShowingMovies.find()
    .then(nowshowingmovies=>res.json(nowshowingmovies))
    .catch(err=>res.status(400).json("Error: "+err));
    
});


module.exports=router;
