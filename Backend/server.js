const express = require('express');
const cors =require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app =express();
const port =process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =process.env.ATLAS_URI;//The location where the database is
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);
const connection=mongoose.connection;
connection.once('open', ()=>{//Once the connection is open it's gonna open the below log
    console.log("MongoDB database connection established successfully");
}) 

//uvindu routes

// const creditcardRouter=require('./routes/creditcard');
// const debitcardRouter=require('./routes/debitcard');

// app.use('/creditcard',creditcardRouter);
// app.use('/debitcard',debitcardRouter);



app.listen(port, ()=>{

    console.log(`Server is running on port:${port}`);

})