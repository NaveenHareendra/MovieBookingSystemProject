const router= require('express').Router();
let Debitcard=require('../models/debitcard.model');

router.route('/').get((req,res)=>{
    Debitcard.find()
    .then(debitcards=>res.json(debitcards))
    .catch(err=>res.status(400).json('Error: '+ err))
});


router.route('/add').post((req,res)=>{
  const debitcard=new Debitcard({
    number: req.body.number,
    name : req.body.name,
    expiry : req.body.expiry,
    cvv: req.body.cvv
});


 debitcard.save().then(()=>{

    res.json('details added')
  }).catch(err=>res.status(400).json('Error: '+err))
});

module.exports=router;