//  function add(n1:number, n2:number){
//      return n1 + n2;
//  }
//  var  numOne = 10;
//  var numTwo = 20;
//  const output = add(numOne, numTwo);
//  console.log(output);
// object 
var car = {
    type: ' Toyota',
    model: 'abc',
    year: 2021
};
console.log(car);
console.log(car.year);
// Array
var arr = []; // string array   
arr.push('hello');
// arr.push(10); // we are getting error because we declear string array
console.log(arr);
// readonly :  this keyword prevent to array being changed
var newArray = ['one', 'two'];
// newArray.push('three')    // we are getting error becuase we have written readonly keyword
console.log(newArray[1]);
// Tuple : - its array with fixed length and elements datatype
var tupl = [65, 'hello', true];
tupl.push(false); // we can push value inside tuple with push method irrespective of datatype
console.log(tupl);
// Enum:  data structures of constant length that hold a set of constant values. 
var Person;
(function (Person) {
    Person["name"] = "abc";
    Person["add"] = "pune";
    Person[Person["mobileNum"] = 879965545] = "mobileNum";
    Person["city"] = "pune";
    Person["maritalStatus"] = "no";
})(Person || (Person = {}));
var personOne = {
    name: Person.name,
    add: Person.add,
    no: Person.mobileNum
};
console.log(personOne);
