const router=require('express').Router();
const jwt=require('jsonwebtoken');
const { send } = require('process');
let user=require('../Models/user.model');

router.route('/Login/:email/:password').get((req,res)=>{
    const emailCheck=req.params.email;
    const passwordCheck=req.params.password; 

    user.findOne({email:emailCheck, password:passwordCheck}, function(err, results){

        if(err){
            console.log('Error!');
            res.send(404);
        }
        
        if (!results) {

            console.log('email is not there');
            console.log(results);
            res.send(404);
        }else{
            console.log("It's checked and working well: "+emailCheck);
            console.log("It's checked and working well: "+passwordCheck);

            const token = jwt.sign({
                id:results._id,
                email:results.email,
                name:results.name,
                contactNo:results.contactNo,
                password:results.password
                
            }, 'secret123');

            // console.log(emailCheck);
            // console.log(req.params.password);
            res.json({status:200, user:token});

        }
    });

    // if(checkEmail===''){

    // }else{
    //     res.sendStatus(200);
    //     console.log(checkEmail);
    // }


})

router.route('/update/:id').post((req, res)=>{
    user.findById(req.params.id)
    .then(User=>{
        User.name=req.body.name;
        User.email=req.body.email;
        User.contactNo=req.body.contactNo;

        User.save()
        .then(()=>res.json('User Updated...'))
        .catch(err=>res.status(400).json('Error '+err));
    }).catch(err=>res.status(400).json('Error '+err));



})

router.route('/deleteAccount/:id').delete((req, res)=>{

    user.findByIdAndDelete(req.params.id)
    .then(()=>res.status(200).json('User Account Deleted'))
    .catch(err=>res.status(400).json('Error: '+err));
})

router.route('/updateNewPassword/:id/:newPassword').post((req, res)=>{
    user.findById(req.params.id)
    .then(User=>{
        User.password = req.params.newPassword;

        User.save()
        .then(()=>res.status(200).json('New Password has been update...'))
        .catch(err=>res.status(400).json('Error: '+err));
    })
    .catch(err=>res.status(400).json("Error:"+err));
});

router.route('/add').post((req, res)=>{

    const name=req.body.name;
    const email=req.body.email;
    const contactNo=req.body.contactNo;
    const password=req.body.password; 

    user.findOne({email:new RegExp(`^${email}$`, 'i')}, function(err, results){
        if(err){
            console.log('Error');
            res.send(404);
        }

        if(!results){
            console.log('Results are not there....');
            const newUser=new user({
                name,
                email,
                contactNo,
                password
            });
        
            newUser.save()
            .then(()=>res.status(200).json('User Added!'))
            .catch(err=>res.status(400).json('Error '+err));         
        }else{
            console.log('User is already there');
            console.log(results);
            res.json({status:201, bool:false});
        }
    })
});


module.exports=router;