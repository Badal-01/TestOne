// 'use strict';

// const Person = function(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.fullName = function(){
//         return `Full Name is ${firstName} ${lastName}`
//     }
// }

// // const PersonOne = new Person("Abhi","Singh");
// // const PersonTwo = new Person("Abhi","Roy");
// // function one(){
// //     console.log("Hiii");
// // }
// // console.log(one)

// const arr = [1,2,3,4,5,6,7];
// console.log(arr.__proto__);
// console.log(Array.prototype);
// console.log(arr.__proto__ === Array.prototype);

class Person{
    constructor(firstName,dob){
        this.firstName = firstName;
        this.dob = dob;
    }
    calAge(){
        return 2023-this.dob;
    }
}

const person1 = new Person("Test",1996);
console.log(person1);
const age = person1.calAge();
console.log(age);
const person2 = new Person("TestTwo",1998);
console.log(person2.__proto__);
console.log(Person());

console.log("Learning Js");
console.log("git");
console.log("abhi Git");




