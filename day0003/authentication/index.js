const express =require("express")
const app=express();
const jwt=require("jsonwebtoken");
const jwtPassword="iuahfogih9749";
app.use(express.json())

const all_Users=[
    {
        user:"pan.singhssa",
        password:"d84jhrg44",
        name:"sandsdfipan sdfingha"
    },
    {
        user:"sandipans.sddgha",
        password:"dsfrg44",
        name:"sandipaasn sinda"
    },
    {
        user:"sandipan.singa",
        password:"dhfgrg44",
        name:"sandipan ngha"
    }
]

function userExist(username,password){
    for(let i=0;i<all_Users.length;i++){
        if(all_Users[i]["user"]==username && all_Users[i]["password"]==password){return true;}
    }
    return false;
}



app.get("/user",(req,res)=>{
    const token = req.headers.authorization
    try{
    const decode = jwt.verify(token,jwtPassword);
    const username=decode.ussername;
    const arr=[];
    for(let i=0;i<all_Users.length;i++){
        if(all_Users[i].user==username){ continue; }
        arr.push(all_Users[i]);
    }
    res.json({
        arr
    })
    }catch(err){
        res.status(403).send("who r u")
    }

})

app.post("/sign",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    if(!userExist(username,password)){
        return res.status(403).send("user doesnt exsit");
    }
    const token=jwt.sign({username,password},jwtPassword);
    return res.json({
        token
    });
});

app.listen(3000,()=>{
    console.log("code is running ");
});