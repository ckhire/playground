//  function add(n1:number, n2:number){
//      return n1 + n2;
//  }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// union type:- it's varibale that can hold multiple types of value (it may be number, string , boolean etc)
function combine(nOne, nTwo) {
    var result;
    if (typeof nOne == 'number' && typeof nTwo == 'number') {
        result = nOne + nTwo;
    }
    else {
        result = nOne.toString() + nTwo.toString();
    }
    return result;
}
console.log(combine(10, 'sk'));
var newUser = {
    name: 'sandeep',
    compnayName: 'cemtrexlabs',
    age: 27
};
console.log(newUser);
console.log(newUser.name);
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 10; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function () {
        return this.x + this.y;
    };
    return Point;
}());
var pOne = new Point();
console.log(pOne);
console.log(pOne.add());
// inheritance
var Parent = /** @class */ (function () {
    function Parent() {
        this.name = 'sk';
    }
    Parent.prototype.setname = function (name) {
        this.name = name;
    };
    return Parent;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    child.prototype.getname = function () {
        return this.name;
    };
    return child;
}(Parent));
var c1 = new child();
console.log(c1.getname());
