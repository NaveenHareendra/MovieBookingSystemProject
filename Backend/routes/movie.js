const router = require('express').Router();
let nowShowingMovies = require('../Models/nowShowingMovies.model');

router.route('/movieSeatsCountUpdate/:id/:seatsUpdate').post((req,res)=>{
    nowShowingMovies.findById(req.params.id)
    .then(movie=>{
        movie.seatsAvailable = parseInt(req.params.seatsUpdate);
        movie.save()
        .then(()=>res.json('Movie Updated...'))
        .catch(err=>res.status(400).json('Error '+err));
        console.log('seats no:'+parseInt(req.params.seatsUpdate));
    }).catch(err=>res.status(400).json('Error '+err));
});

router.route('/nowshowingmovies').get((req,res)=>{

    nowShowingMovies.find()
    .then(nowshowingmovies=>{
        // console.log(nowshowingmovies);
        res.json(nowshowingmovies)
    }
        )
    .catch(err=>res.status(400).json("Error: "+err));


    
});


module.exports=router;
