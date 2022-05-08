const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const ticketSchema = new Schema({

    movieName:{type: String,require:true},
    price:{type: String,require:true},
    seatsNoBooked:{type: String,require:true},
    bookingDate:{type: String,require:true},
    availableFutureUpdate:{type: String,require:true},
    customerId:{type: String,require:true},
    cardnumber:{type: String,require:true},
    customerName:{type: String,require:true}
    
});

module.exports=mongoose.model('ticket',ticketSchema);

