const router= require('express').Router();
let Creditcard=require('../models/creditcard.model');

router.route('/').get((req,res)=>{
    Creditcard.find()
    .then(creditcards=>res.json(creditcards))
    .catch(err=>res.status(400).json('Error: '+ err))
});


router.route('/add').post((req,res)=>{
  const creditcard=new Creditcard({
    number: req.body.number,
    name : req.body.name,
    expiry : req.body.expiry,
    cvv: req.body.cvv
});


 creditcard.save().then(()=>{

    res.json('details added')
  }).catch(err=>res.status(400).json('Error: '+err))
});

module.exports=router;