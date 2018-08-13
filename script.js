"use strict";
//string
var myName = "John";
//myName = 28;
//number
var age = 28;
age = 22.8;
//boolean
var a = true;
//a = 1;
//assign types
var pinCode;
pinCode = 234;
pinCode = '234';
//array
var hobbies = ["reading", "writing"];
hobbies = [100];
//tuples
var address = [89, 'kharadi', 90];
//address = ["kharadi",90];
//enum
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["green"] = 1] = "green";
    Color[Color["red"] = 2] = "red";
})(Color || (Color = {}));
var myColor = Color.blue;
console.log("my colour index" + myColor);
//any
var myLastname = "kat";
myLastname = 100;
myLastname = {};
//functions
function returnMyName(a, b) {
    return myName;
}
console.log(returnMyName(2, 4));
//void
function sayHello() {
    console.log("hello");
}
//argument types
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(3, 4));
//function types
var myFunc; //function defined as signature (va1:number, val2:number) => number
myFunc = sayHello;
myFunc();
myFunc = multiply;
myFunc(2, 4);
//object types
var obj = {
    name: "mayuri",
    address: 12345
};
var obj2 = {
    val1: 23,
    val2: [12, 56, 67],
    val3: function (param) {
        return this.val2;
    }
};
var obj3 = {
    val1: 90,
    val2: [12, 56, 67],
    val3: function (param) {
        return this.val2;
    }
};
//union types
var addr;
addr = 233;
addr = "kharadi";
//never return type
function neverFunc() {
    throw new Error("this is an error!");
}
//nullable types
var nullValue = 12;
//nullValue = null;
var nullvalue1;
nullvalue1 = 12;
nullvalue1 = null;
var company = {
    name: "google",
    address: function (value) {
        return this.name = value;
    }
};
var employee = {
    name: "John",
    hobbies: ["sports", "surfing"],
    company: company
};
console.log(company.address("kharadi"));
console.log(employee);
//Rest and spread
var numbers = [2, 5, 8, 3, 6];
console.log(Math.max(12, -3, 4, 99));
console.log(Math.max.apply(Math, numbers));
function myarray() {
    var argsss = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argsss[_i] = arguments[_i];
    }
    return argsss;
}
console.log(myarray(1, 2));
//destructuring
var myHobbies = ["cooking", "sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
//destructuring objects
var userdata = { username: "Mayuri", pincode: 123456 };
var myname = userdata.username, myPin = userdata.pincode;
console.log(myname, myPin);
//template literals
var username = "mayuri";
var greeting = "Hi everyone \ngood morning \nI'm " + username;
console.log(greeting);
