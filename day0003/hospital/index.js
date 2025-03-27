const express=require("express")
const zod=require("zod")

const app=express();


const schema = zod.object({
    "email":zod.string(),
    "password":zod.string(),
    "country":zod.literal("IN").or(zod.literal("US"))
}) 

app.use(express.json());

function userMiddleware(req,res,next){
    if(req.headers.username!="sandipan" || req.headers.password!="pass"){
        res.status(403).json({
            "msg":"incorrect username or password"
        });
        console.log(req.headers.username+" "+req.headers.password)
    }else{ next(); }
};

function kidneyMiddleware(req,res,next){
    if(req.query.kidneyId!=1 && req.query.kidneyId!=2){
        res.status(403).json({
            "msg":"incorrect inputs"
        });
    }else{ next(); }
}

app.get("/",userMiddleware,kidneyMiddleware,(req,res)=>{
    res.send("all good mate dont stress it");
})
 
app.post("/health-checkup",(req,res)=>{
    const kidneys = req.body.kidneys;
    const response=schema.safeParse(kidneys);
    //const kidneyLength=kidneys.length;

    res.send({
        response 
    })
})

// global catches
 app.use((err,req,res,next)=>{
    res.json({
        "msg":"hello dear user there seems to be a problem on our side we will fix it soon " 
     }); 
})


app.listen(3000);