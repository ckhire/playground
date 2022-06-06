//  function add(n1:number, n2:number){
//      return n1 + n2;
//  }

//  var  numOne = 10;
//  var numTwo = 20;

//  const output = add(numOne, numTwo);

//  console.log(output);


// object 

const car: {type:string, model:string, year:number} ={
    type:' Toyota',
    model:'abc',
    year:2021
}
console.log(car)
console.log(car.year);

// Array

const arr : string[] =[];     // string array   
arr.push('hello');
// arr.push(10); // we are getting error because we declear string array
console.log(arr);

// readonly :  this keyword prevent to array being changed
const newArray : readonly string [] =['one', 'two'];
// newArray.push('three')    // we are getting error becuase we have written readonly keyword

console.log(newArray[1]);

// Tuple : - its array with fixed length and elements datatype

const tupl :[number , string , boolean] = [65, 'hello', true];
tupl.push(false)  // we can push value inside tuple with push method irrespective of datatype
console.log(tupl)


// Enum:  data structures of constant length that hold a set of constant values. 

enum Person {
    name='abc',
    add= 'pune',
    mobileNum = 879965545,
    city = 'pune',
    maritalStatus = 'no'

}

const personOne = {
    name : Person.name,
    add: Person.add,
    no: Person.mobileNum
}
console.log(personOne);

// union type:- it's varibale that can hold multiple types of value (it may be number, string , boolean etc)

function combine (nOne: string | number| boolean, nTwo: string|boolean){  // 'union syntax --> |'
   let result ;
   if(typeof nOne =='number' && typeof nTwo =='number'){

       result = nOne + nTwo;
   }else{
    result = nOne.toString() + nTwo.toString();
   }
    return result; 
}

console.log(combine(10,'sk'))

// Interface

// syntax:   interface interface_name{
//     key: TypeError,
//     key : type
// }

interface user {
    name:string,
    compnayName:string,
    age:number
}


const newUser: user={
name:'sandeep',
compnayName:'cemtrexlabs',
age:27
}

console.log(newUser)
console.log(newUser.name)


class Point{
    x:number;
    y:number
    constructor(x = 0,y = 10 ){
    this.x = x;
    this.y = y
    }
    add (){
        return this.x + this.y
    }
}
const pOne = new Point();
console.log(pOne);
console.log(pOne.add());

// inheritance


class Parent{
name = 'sk';    
setname(name){
this.name = name;
}
}


class child extends Parent{
    getname(){
        return this.name;
    }
}

let c1 = new child();
console.log(c1.getname());

