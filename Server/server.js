const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// const db = require('./config/db')
const route = require('./routes/route')
const multer = require('multer')
const upload = multer()
const port = 4000;
const jwt = require('jsonwebtoken');
// app.use(bodyParser.json());

app.use(express.urlencoded({extended: true}));
app.use(upload.none())
app.use(cors());
app.use(express.json())

app.post('/api/',(req,res)=>{
    const user ={
        id:1,
        username:"rahul",
        email:"rahul@gmail.com"

    }
    jwt.sign({user:user},"Private_key",(err,token)=>{
        res.send({
            token:token
        })
    })
    // res.send({req})
    // console.log("The server is been created")
})
app.use('/api',route)



app.listen(port,()=>{
    console.log(`The server is  running at ${port}`);
})
