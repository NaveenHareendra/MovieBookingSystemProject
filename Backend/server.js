const express = require('express');
const cors =require('cors');
const mongoose = require('mongoose');
const bodyParser=require('body-parser')


const app =express();

require('dotenv').config();

const postRoutes=require('./routes/posts')
app.use(bodyParser.json())


const port =process.env.PORT || 5000;



app.use(cors());
app.use(postRoutes)
app.use(express.json());

// const uri =process.env.ATLAS_URI;//The location where the database is
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
// );
// const connection=mongoose.connection;
// connection.once('open', ()=>{//Once the connection is open it's gonna open the below log
//     console.log("MongoDB database connection established successfully");
// }) 

// const PORT=8000;
const DB_URl='mongodb+srv://Dilshan:20Dilshan*@cluster0.4q4dt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(DB_URl)
.then(()=>{
    console.log('DB connected')
})
.catch((err)=>console.log('connection err',err))

app.listen(port, ()=>{

    console.log(`Server is running on port:${port}`);

})