let idd;
function debouncepD(){
clearTimeout(idd);
idd=setTimeout(populateDiv,1000);
}
async function populateDiv(){
    const element=document.getElementById("finalResult");
    let aa=document.getElementById("first_no").value;
    let bb=document.getElementById("second_no").value;

    const obb=await fetch(`http://localhost:3000/add?a=${aa}&b=${bb}`);
    const addd=await obb.json();      
    
    element.innerHTML=addd["sum" ];
}

async function cal(txt){
    const element=document.getElementById("interest");
    let p=document.getElementById("principal").value;
    let r=document.getElementById("rate").value;
    let t=document.getElementById("time").value;

    const call= await fetch(`http://localhost:3000/si?p=${p}&r=${r}&t=${t}`);
    const obb=await call.json();
    
    if(txt=="si"){
        element.innerHTML=`the simple interst is ${obb["simple interest"]}`;
    }
    else if(txt=="to"){
        element.innerHTML=`the total amount is ${obb["total amount"]}`;
    }
}
