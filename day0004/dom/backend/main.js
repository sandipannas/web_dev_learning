const express = require("express");
const app=express();
const cors=require("cors");

app.use(cors());

app.use(express.json());

app.get("/add",(req,res)=>{
    let a=req.query.a;
    let b=req.query.b;
    res.json({
        "sum" : parseInt(a)+parseInt(b)
    })
})
app.get("/si",(req,res)=>{
    let p=req.query.p;
    let r=req.query.r;
    let t=req.query.t;
    res.json({
        "simple interest" : (parseInt(p)*parseInt(r)*parseInt(t))/100,
        "total amount" : ((parseInt(p)*parseInt(r)*parseInt(t))/100)+parseInt(p)
    })
})
app.listen(3000);