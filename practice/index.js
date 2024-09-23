const express = require('express');
const app = express();
const useModel = require("./usermodel");
const usermodel = require('./usermodel');

app.get('/',(req,res)=>{
    res.send("hello");
})
app.get('/create', async (req,res)=>{
    let createUser= await useModel.create({
        name:"akshar",
        email:"akshar@goggle",
        username:"akshar"
    })
    res.send(createUser);
})
app.get('/upadated', async (req,res)=>{
    let upadteduser= await useModel.findOneAndUpdate({username:"akshar"},{name:"aniket"},{new:true})
    res.send(upadteduser);
})
app.get('/read',async (req ,res)=>{
    let users=await usermodel.find({name:"akshar"});
    res.send(users)
})
app.get('/delete',async (req ,res)=>{
    let users=await usermodel.findOneAndDelete({name:"akshar"});
    res.send(users)
})
app.listen(3000);