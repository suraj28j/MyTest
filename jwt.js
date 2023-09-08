const express=require("express");
const server=express();
const bodyParser=require("body-parser");
const jwt=require("jsonwebtoken");
const skey="secretkey";



const usersData=[
    {
        id:101,
        name:"Akash",
        emailId:"akash@gmail.com",
        salary:20000
    },
    {
        id:102,
        name:"Ravi",
        emailId:"ravi@gmail.com",
        salary:21000
    },
    {
        id:103,
        name:"kishan",
        emailId:"kishan@gmail.com",
        salary:21500
    },
    {
        id:104,
        name:"Mohit",
        emailId:"mohit@gmail.com",
        salary:22000
    }
]

server.use(bodyParser.json());

server.post("/user",(req,res)=>{
    let tempData=req.body;
    let uData;
    usersData.find(x=>{
        if(x.id==tempData.id && x.emailId==tempData.emailId){
            uData=x;
        }
    })
    if(uData){
        jwt.sign(uData,skey,{expiresIn:"300s"},(error,token)=>{
            res.status(200).send({Message:"Data Match Successfully",token});
        })
    }else{
        res.status(200).send({Message:"Data not exist"});
    }
})

server.post("/uservfy",(req,res)=>{
    let getToken=req.headers["authorization"];
    let vToken=jwt.verify(getToken,skey);
    res.status(200).send({message:"Successfully Verify",vToken});
})

server.listen(3000,()=>{
    console.log("Server is running");
})