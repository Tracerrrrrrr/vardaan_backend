const express=require("express")
const app=express()
const cors=require("cors")
 const dotenv = require('dotenv');
  dotenv.config();
const port=8080

app.use(
    cors({
      origin: ["http://localhost:3000","https://tracerrrrrrr.github.io"],
      credentials: true,
    })
  );
 
  const mongoose=require('mongoose')
  app.use(express.json())
  app.use('/public', express.static('public'));
  app.use(express.urlencoded({
    extended:true,
  }))
  const Db='mongodb+srv://Shivam:0XybYaY4YsmjvMaL@cluster0.oysfx.mongodb.net/test';
  mongoose.connect(Db).then(()=>{
    console.log("Connected to database successfully")
  }).catch(err=>{
    console.log(err)
  })
  const product=require('./Routes/ProductList')
  app.use('/product',product)
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
