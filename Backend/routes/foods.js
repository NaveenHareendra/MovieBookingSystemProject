const router = require("express").Router();
const Food=require('../models/foodModel')

//retriew
router.route("/getallfoods").get((req,res)=>{
    Food.find().then((foods)=>{
        res.json(foods)
    }).catch((err)=>{
        console.log(err)
    })
})
//insert
router.post("/addfood",async(req,res)=>{
    const food=req.body.food

    try{
        const newfood=new Food({ 
            name:food.name,
            image:food.image,
            varient:['small','medium','large'],
            description:food.description,
            category:food.category,
            prices:[food.prices]
        })
        await newfood.save()
        res.send('new food added successfully')
    }catch(error){
        return res.status(400).json({message:error});
    }
    
});

//get one food details 
router.post("/getfoodbyid",async(req,res)=>{
    const foodid=req.body.foodid

    try {
        const food=await Food.findOne({_id:foodid})
        res.send(food)
    } catch (error) {
        return res.status(400).json({message:error});
    }
})

//updating food

router.post("/editfood",async(req,res)=>{
    const editedfood = req.body.editedfood
 
    try{
        const food=await Food.findOne({_id:editedfood._id})

        food.name=editedfood.name,
        food.description=editedfood.description,
        food.image=editedfood.image,
        food.category=editedfood.category,
        food.prices=[editedfood.prices]

        await food.save()

        res.send('food details edited successfully')
    }catch(error){
         return res.status(400).json({message:error});
    }
})


//deleting

// router.route("/deletefood").delete(async(req,res)=>{
//     let foodId=req.params.foodid

//     await Food.findByIdAndDelete(foodId)
//     .then(()=>{
//          res.status(200).send({status:"food deleted"});

//     }).catch((errr)=>{
//         console.log(err.message);
//         res.status(500).send(({status:"error in delelting food",error:err.message}))
//     })
// })

router.post("/deletefood",async(req,res)=>{
    const foodid=req.body.foodid

    try{
        await Food.findOneAndDelete({_id:foodid})
        res.send('food deleted successfully')

    }catch(error){
        return res.status(400).json({message:error});
    }
})




module.exports=router; 