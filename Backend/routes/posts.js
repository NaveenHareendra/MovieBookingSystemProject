const express=require('express');
const posts = require('../modules/posts')
const Posts=require('../modules/posts')



const router=express.Router();

//save movie
//save post
router.post('/post/save',(req,res)=>{
    let newPost=new Posts(req.body);
    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Posts saved successful"
        })
    })
})
//get specific post
router.get("/post/:id",(req,res)=>{
    let postId = req.params.id;

    Posts.findById(postId,(err,post)=>{
        if (err) {
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

//get method
router.get('/posts',(req,res)=>{
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        })
    })
})

//update method
router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(req.params.id,{
        $set:req.body
    }
    ,(err,post)=>{
     if(err){
         return res.status(400).json({
             error:err
         })
     }
     return res.status(200).json({
         success:true,
         existingPosts:posts
     })
 
    })
 })

 //delete method
 router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove (
        req.params.id
    ).exec((err,deletedposts)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:'deleted',
            
        })

    })
})
module.exports=router;