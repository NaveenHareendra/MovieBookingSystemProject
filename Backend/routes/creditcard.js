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



router.route("/updatecard/:id").put((req,res,next)=>{
  const creditcard=({
    
    number: req.body.number,
    name : req.body.name,
    expiry : req.body.expiry,
    cvv: req.body.cvv
});

Creditcard.updateOne({_id:req.params.id},creditcard).then(result => {
  console.log(result);
  res.status(200).json({message :'updated'})

})

});
router.route('/updatecard/:id').get((req,res,next)=>{
  Creditcard.findById(req.params.id).then(creditcard=>{
    if(creditcard){
res.status(200).json(creditcard);
    }
    else{
      res.status(404).json({message :"card not found"});
    }

  });
  });


  

  router.delete("/delete/:id",(req,res,next)=>{
    Creditcard.deleteOne({_id:req.params.id}).then(result=>{
      console.log(result);
      res.status(200).json({
        message:'card deleted'
  
    });
    })
  
  });




module.exports=router;