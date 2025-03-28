const express =require('express')
const app=express();
const port=3001

function calsutatesum(n){
    let ans=0;
    for(let i=0;i<n;i++)
    {
        ans=ans+i;
    }
    return ans;
}

app.get("/",(req,res)=>{
    console.log("getting in /");
    const n=req.query.n;
    const ans=calsutatesum(n)
    res.send(ans.toString());
})

app.listen(port,()=>{
    console.log(`the code is runing on port ${port}`)
})

