const mongoose=require('mongoose');

const Schema =mongoose.Schema;

const userSchema= new Schema({
    name:{type:String, require:true},
    email:{type:String, require:true},
    contactNo:{type:Number, require:true},
    password:{type:String, require:true}
});

const user=mongoose.model('user', userSchema);

module.exports=user;


