//callBack function

/*function main(str,callBack){
    console.log("Hi"+str);
    callBack
}
function callMe(){
    console.log("Hi i am callback Function");
}
main ("jhon",callMe)



//setTimeout
function hello(){
    console.log("Hello World");
}
function printName(name){
    console.log(name);
}
setTimeout(hello,2000);
printName("lilly");




//promise



let  value =true;
let promise =new promise((resolve,reject)=>{
    if(value){
        resolve ("promise resolve")
    }else{
        reject("promise reject")
    }
})*/





//Promise



/*let value =true
let promise = new promise((resolve,reject)=>{
    if (value){
        resolve("promise resolve");
    }else{
        reject("promise reject")
    }
});
console.log(promise);

//Return promise


let prom = new promise ((resolve,reject)=>{
    resolve ("promise solved");
    //reject("promise reject");
})
console.log(prom);
prom
.then ((result)=>{
    console.log("hii");
})
.catch ((error)=>{
    console.log(error);
});*/


//async function

/*async function task(){
    console.log("customer");
    await console.log("order");
    console.log("cooking");
    console.log("Ready");
}
console.log("welcome");
task();
console.log("wash");
console.log("clean");*/


//async-await

/*let promise = new Promise((resolve, reject) => {
    setTimeout()=> {
    resolve("promise resolve");
}, 3000;
 })

async function prom() {
    let res = await promise;
    console.log(res);
    console.log("hello");
}

prom();*/

//try-catch

/*async function func() {
    try {
        res.render("Home");
    } catch (err) {
        throw err;
    }
}



async function hello() {
    try {

    } catch (err) {
        throw err;
    }
}*/



//async function syntax

/*async function ajay() {
    try {
        //logic  / code
    } catch (err) {
        throw err
        console.log(err);
    }
}*/



//Call Back HILL




/*FoodAPI(function (foodData) {
    roomAPI(function (roomData) {
        serviceApi(function(serviceData){
            securityApi(function(securityData){

            })
        })
    })

})


FoodAPI().then(function(foodData){
    return foodData
}).then(function(roomData){
    return roomData
}).then(function(serviceData){
    return serviceData;
})*/





// Array distruing

// let user =["Yahoo",25,"Delhi"];
// let [name,age,city]=user
// console.log(name);

// object distruing

// let user = {
//     name: "yahoo",
//     age:25,
//     city:"Delhi",
// }
// let{name,age,city}=user;
// console.log(name);
// console.log(age);
// console.log(city);

// spread operator

// let arry =[1,2,3];
// let arry2=[2,3,4,...arry];
// console.log(arry2);













