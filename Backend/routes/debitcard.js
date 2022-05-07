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



router.route("/updatecard/:id").put((req,res,next)=>{
  const debitcard=({
    
    number: req.body.number,
    name : req.body.name,
    expiry : req.body.expiry,
    cvv: req.body.cvv
});

Debitcard.updateOne({_id:req.params.id},debitcard).then(result => {
  console.log(result);
  res.status(200).json({message :'updated'})

})

});
router.route('/updatecard/:id').get((req,res,next)=>{
  Debitcard.findById(req.params.id).then(debitcard=>{
    if(debitcard){
res.status(200).json(debitcard);
    }
    else{
      res.status(404).json({message :"card not found"});
    }

  });
  });


  

  router.delete("/delete/:id",(req,res,next)=>{
    Debitcard.deleteOne({_id:req.params.id}).then(result=>{
      console.log(result);
      res.status(200).json({
        message:'card deleted'
  
    });
    })
  
  });

module.exports=router;