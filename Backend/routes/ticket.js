const router= require('express').Router();
const ticket = require('../models/ticket');
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
    cardnumber:req.body.cardnumber,
    customerName:req.body.customerName
  
});


 ticket.save().then(()=>{

    res.json('details added')
  }).catch(err=>res.status(400).json('Error: '+err))
});


router.route('/getCustomerTicket/:customerId').get((req,res)=>{
  const cusId = req.params.customerId;

  ticket.find({customerId:cusId}, function(err, results){

    if(err){
      console.log('customerId check: '+req.params.customerId);
      console.log('Something went wrong')
    }

    if(!results.length){
      console.log('Results are not there sorry....');
      console.log(results);
      res.status(404);
    }else{
      console.log('customerId check: '+req.params.customerId);
      console.log('Results are there: '+results);

      res.json({status:200, ticket:results});
    }
  })
});

module.exports=router;