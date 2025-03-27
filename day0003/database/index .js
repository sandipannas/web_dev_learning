const express=require("express");
const mongoose=require("mongoose");
const app=express();

mongoose.connect("mongodb+srv://sandisingha:adrijasandipan@cluster007.ngqyg.mongodb.net/trialwww");

const user=mongoose.model('user', { name : String , email : String , password : String });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/sign",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;

    try{const newuser=new user({
        name:name,
        email:username,
        password:password
    })

    newuser.save().then(()=>
    res.json({
        msg:"chut paglu"
    }));}
    catch(err){
        res.status(400).json({
            msg:"tui gand mara"
        })
    }

})


app.listen(3000,()=>{
    console.log("app is running");
})


