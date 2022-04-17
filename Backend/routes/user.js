const router=require('express').Router();
const jwt=require('jsonwebtoken');
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
                contactNo:results.contactNo

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

router.route('/add').post((req, res)=>{

    const name=req.body.name;
    const email=req.body.email;
    const contactNo=req.body.contactNo;
    const password=req.body.password; 


    const newUser=new user({
        name,
        email,
        contactNo,
        password
    });

    newUser.save()
    .then(()=>res.json('User Added!'))
    .catch(err=>res.status(400).json('Error '+err));

});


module.exports=router;