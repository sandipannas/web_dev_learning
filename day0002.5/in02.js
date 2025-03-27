// function oncall(){
//     setTimeout(function(){
//         console.log("i am the first settimeout console.log ");
//     },1000)

//     setTimeout(function(){
//         console.log("i am the second settimeout conslose ");
//     },2000)
// }

// oncall();


// function mysettout(duration){
//     let p=new Promise(function(resolve){
//         //after 1 second call resolve
//         setTimeout(resolve,duration);
//     });
//     return p;
// }

// mysettout(1000).then(function(){
//     console.log("i am the first log after 1 sec");
// });
// mysettout(5000).then(function(){
//     console.log("i am the second log after 5 sec");
// });
// console.log("if i got printed first then using promises still hold the async property");


// function myOwnSetTimeout(callback,duration){
//     setTimeout(callback,duration);
// }

// myOwnSetTimeout(function() {
//     console.log("after settimeout");
// },1000);


// function myOwnSetTimeout(){
//     let p=new Promise(function(resolve){
        
//             resolve("hi i am form inside ");
//     });
//     return p;
// }


// async function main(){
//     let p= await myOwnSetTimeout();
//     console.log(p); 
// }

// main();
function homemade_async(fn,duration){
    const p=new Promise(function(resolve){
        setTimeout(function (){
            resolve("task completed");
        },duration);
    })
    return p;
}


function a(){
    console.log("i am task a");
}

function b(){
    console.log("i am task b");
}

function c(){
    console.log("i am task c");
}
async function main()
{
    let p=await homemade_async(2*1000);
    console.log(p);
    p=await homemade_async(3*1000);
    console.log()

}
main()