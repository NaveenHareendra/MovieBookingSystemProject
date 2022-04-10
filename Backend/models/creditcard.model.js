const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const creditcardSchema = new Schema({
     
    number:{type: String,require:true},
    name:{type: String,require:true},
    expiry:{type: String,require:true},
    cvv:{type: String,require:true}
});

module.exports=mongoose.model('creditcard',creditcardSchema);