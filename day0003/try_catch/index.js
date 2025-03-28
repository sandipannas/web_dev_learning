const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const zod=require("zod");
const jwtpassord="1234567890"

const emailSchema=zod.string().email();
const passwordSchema=zod.string().min(8);

mongoose.connect("");

const user=mongoose.model('user',{ name:String , username:String , password:String});

app.use(express.json());

function inputValidation(req,res,next){
    const username=req.body.username;
    const password=req.body.password;
try{ 
    console.log("i am working");
    
    emailSchema.parse(username);
    passwordSchema.parse(password);

   next();

}catch(err){
    res.json({
        "msg" : "enter valid email and password "
    })
    }
}

async function login(req,res,next){
    const username=req.body.username;
    const name=req.body.name;
    const password=req.body.password;
    
    try{
        const exsistUser= await user.findOne({ username:username });
        if(exsistUser){
            if(exsistUser.password==password){

            const token=jwt.sign({username},jwtpassord)
            res.json({
                 "token":token
            })
            next();
        }else{
            res.json({
                msg:"wrong password"
            })
        }}
        else{
            res.json({
                "msg":"user doesnt exsist register first"
            })
        }
    }
    catch(err){
        res.json({
            "msg":"problem creating token"
        })
    }
}

async function register(req,res,next){

    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;
    const exsistUser = await user.findOne({username:username});
    
    if(exsistUser){
        res.json({
            "msg":"user already exsist try logging in"
        })
    }
    else{
        const newUser=new user({
            name,
            username,
            password
        })

        newUser.save();

        next();
    }
}

app.get("/sign",inputValidation,login,(req,res)=>{
    console.log("user signed in");
})

app.post("/register",inputValidation,register,(req,res)=>{
     res.json({
        msg:"user created"
     })
})

app.use((req,res,next)=>{
    const token=req.headers.authorization;
    try{
    const username=jwt.verify(token,jwtpassord);
       next();
    }
    catch(err){
        res.json({
            msg:"who r u"
         })
    }
})

app.get("/wow",(req,res)=>{
    res.json({
        msg:"all ok"
     })
})

app.listen(3000,()=>{
    console.log("app is running");
})