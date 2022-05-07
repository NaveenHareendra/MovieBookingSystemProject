const router= require('express').Router();
let Ticket=require('../models/ticket');

router.route('/').get((req,res)=>{
    Ticket.find()
    .then(ticket=>res.json(ticket))
    .catch(err=>res.status(400).json('Error: '+ err))
});


router.route('/add').post((req,res)=>{
  const ticket=new Ticket({
    
    movieName:req.body.movieName,
    price:req.body.price,
    seatsNoBooked:req.body.seatsNoBooked,
    bookingDate:req.body.bookingDate,
    availableFutureUpdate:req.body.availableFutureUpdate,
    customerId:req.body.customerId,
    cardnumber:req.body.cardnumber
  
});


 ticket.save().then(()=>{

    res.json('details added')
  }).catch(err=>res.status(400).json('Error: '+err))
});



module.exports=router;