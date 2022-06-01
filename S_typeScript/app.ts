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