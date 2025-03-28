function sum(a,b,fntocall){
    fntocall(a+b);
}
function active(data){
    console.log("the result is "+data);
}
function passive(data){
    console.log(data+" is the result");
}

let arr=[{
    firstName:"sandipan",
    gender:"male"
},
{
    firstName:"pratyayan",
    gender:"female"
},
{
    firstName:"asitava",
    gender:"shemale"
}
]

class animal{
    constructor (data){
        this.data=data;
    }
    static abnormal(){
        console.log(" hi i am static function or method ");
    }
    normal(){  
        console.log(" hi i am a normal function ");
    }
}
let animal_obb=new animal("hehehe");
animal.abnormal();
animal_obb.normal();

animal.abnormal();
