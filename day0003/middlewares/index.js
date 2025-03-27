const express = require("express");
const app = express();
let totalLog=0;

let rateLimit={};
setInterval(()=>{
    rateLimit={};
},3000);
app.use(express.json());

app.use((req,res,next)=>{
    const userId=req.body.userId;
    if(rateLimit[userId]){
        rateLimit[userId]=rateLimit[userId]+1;
        if(rateLimit[userId]>4){
            res.json({
                msg:"no entry"
            })
        }else{
            next();
        }
    }else{
        rateLimit[userId]=1;
        next();
    }
})

app.get("/ride1",(req,res,next)=>{
    res.json({
        msg:"code is running"
    })
})


app.listen(3000,()=>{
    console.log(" app is running succesfully ");
})