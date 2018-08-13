//string
let myName:string= "John";
//myName = 28;

//number
let age:number = 28;
age = 22.8;

//boolean
let a = true;
//a = 1;

//assign types
let pinCode;
pinCode = 234;
pinCode = '234';

//array
let hobbies:any[]= ["reading","writing"];
hobbies = [100];

//tuples
let address:[number,string,number] = [89,'kharadi',90];
//address = ["kharadi",90];

//enum
enum Color{
    blue,
    green,
    red
}
let myColor: Color = Color.blue;
console.log("my colour index" +myColor);

//any
let myLastname:any= "kat";
myLastname = 100;
myLastname = {};

//functions
function returnMyName(a:number,b:number):string{
    return myName;
}
console.log(returnMyName(2,4));

//void
function sayHello():void{
    console.log("hello");
}

//argument types
function multiply(val1:number, val2:number):number{
return val1 * val2
}

console.log(multiply(3,4));

//function types
let myFunc; //function defined as signature (va1:number, val2:number) => number
myFunc = sayHello;
myFunc();
myFunc = multiply;
myFunc(2,4);

//object types
let obj = {
    name: "mayuri",
    address: 12345
};


let obj2: {val1:number, val2:number[], val3:(param:number)=>number[]}={
    val1: 23,
    val2: [12,56,67],
    val3: function (param):number[]{
           return this.val2;
    }
}

//type keyword
type objType = {val1:number, val2:number[], val3:(param:number)=>number[]};

let obj3:objType={
    val1: 90,
    val2: [12,56,67],
    val3: function (param):number[]{
           return this.val2;
    }
}
//union types
let addr: number|string;
addr = 233;
addr = "kharadi"

//never return type
function neverFunc(){
    throw new Error("this is an error!");
}

//nullable types
let nullValue = 12;
nullValue = null;
let nullvalue1;
nullvalue1 = 12;
nullvalue1 = null;

let company:any = {
    name: "google",
    address: function(value:string){
        return this.name = value
    }
};
let employee = {
    name: "John",
    hobbies: ["sports","surfing"],
    company: company
}

console.log(company.address("kharadi"));
console.log(employee);

//Rest and spread
const numbers = [2,5,8,3,6];
console.log(Math.max(12,-3,4,99));
console.log(Math.max(...numbers));

function myarray(...argsss:number[]){
return argsss
}
console.log(myarray(1,2));

//destructuring
const myHobbies = ["cooking","sports"];
const [hobby1,hobby2] = myHobbies;
console.log(hobby1,hobby2);

//destructuring objects
const userdata = {username:"Mayuri",pincode:123456};
const {username:myname,pincode:myPin} = userdata;
console.log(myname,myPin);

//template literals
const username = "mayuri";
const greeting = `Hi everyone good morning I'm ${username}`
console.log(greeting);






