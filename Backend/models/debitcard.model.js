const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const debitcardSchema = new Schema({

    number:{type: String,require:true},
    name:{type: String,require:true},
    expiry:{type: String,require:true},
    cvv:{type: String,require:true}
});

module.exports=mongoose.model('debitcard',debitcardSchema);