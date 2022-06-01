# TypeScript:
  it is **type superset** of javscript 
  - ***type:*** while declearing variable we defined data type which we are assigning to that variable
- ***superset:*** All features of javascript we will get in typescript with some new features

in javascript 
```js
var a =10;
```
in typescript
```js
var a:number = 10;
```
> Note: basic of javascript should know before starting typescript.

difference between Typescript and javascript

***typeScript:***
- error get highlighted at compiled time.
- can't run TS code directly on browser.
-  need to specify type variable, function, parameter and object property.
- support classes, inheritance, interface
-it's object oriented

***JavaScript***

- error get highlighted at run time.
- can run code on browser.
- no anotation required.
- its a scripting language 
- it's a object base language

## Why we need typeSCript
- easy code management
- support ES6
- IDE Support 

### To run ts file write **tsc 'fileName'** in terminal
>note: after every change you need to write above command to run ts file to avoid this use **tsc "fileName" -- watch**

## Types in typescript
1. Number
2. string
3. boolean
4. object : we write key and type pair in object
```js
const car: {type:string, model:string, year:number} ={
    type:' Toyota',
    model:'abc',
    year:2021
}
console.log(car)
console.log(car.year);
```
5. array : 
```js
const arr : string[] =[];     // string array   
arr.push('hello');
// arr.push(10); // we are getting error because we declear string array
console.log(arr);

// readonly :  this keyword prevent to array being changed
const newArray : readonly string [] =['one', 'two'];
// newArray.push('three')    // we are getting error becuase we have written readonly keyword

console.log(newArray[1]);
```

6. Tuple:  its array with fixed length and elements datatype

```js
const tupl :[number , string , boolean] = [65, 'hello', true];
tupl.push(false)  // we can push value inside tuple with push method irrespective of datatype
console.log(tupl)

```

7. Enum:  data structures of constant length that hold a set of constant values.

```js
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
```