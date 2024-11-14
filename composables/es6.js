
//Var & Let & Const
// var=> Hoisting & function scope & Re Declaration
// let=>  not Hosting & block scope & not Re Declaration
// const=>not Hosting & block scope & not Re Declaration & not override
function testVar () {
    var x = 10;

    if(true) {
      x = 11;
    }
  
    function test() { 
      var x = 12;  // block scope
    }
  
    // for (var x = 0; x < 10; x++) {
    //   var x = 5;
    //   console.log(x);
    // }
  
    console.log(x);
  }
  testVar();
// Arrow Functions
// Arrow=> short code & resolve this issues 
const add = (num1, num2) => num1 + num2
console.log(add(10, 20));

let people = [
  { name: 'Ahmed', age: 27 },
  { name: 'Abbas', age: 22 },
  { name: 'Aly', age: 29 },
  { name: 'Ahmed', age: 28 },
  { name: 'Kareem', age: 35 }
];
// function expression version
let ageSums = people
  .filter(function(person) {
    return person.age > 25 && person.age < 30;
  })
  .filter(function(person) {
    return person.name === 'Ahmed';
  })
  .map(function(person) {
    return person.age;
  })
  .reduce(function(prev, curr) {
    return (prev || 0) + curr;
  });
console.log(ageSums);
// arrow function version
let ageSum = people
  .filter(person => person.age > 25 && person.age < 30)
  .filter(person =>  person.name === 'Aly')
  .map(person =>  person.age)
  .reduce((prev, curr) =>  (prev || 0) + curr);

console.log(ageSum);


// modules
// modules => export & import =>
    // import {getUserName, address }from '../utilis/moduls';
    // import user,{getUserName, address }from '../utilis/moduls'; defulet 
    // import * as all from '../utilis/moduls'; defulet return all
    // import {getUserName, address }from '../utilis/moduls';
    // console.log(getUserName(), address);


// classes
// classes syntax sugar
// classes => extends & super => constructor &  setters & getters & static 
// import Person from '../utilis/classes';
// const person = new Person();
// console.log(person.getJob());

//Spread Operator=> ...array
let arr = [1, 2, 3];
let copiedArr = [...arr];
copiedArr.push(4);
console.log(arr, copiedArr);
//Rest Parameter => ...array => 


function logArguments(type, base, ...args) {
    console.log(args);
    for (let arg of args) {
      console.log(arg);
    }
  }
  
  logArguments('numbers', 'base 10', 1, 2, 3, 4, 5);

// promises => pending => resolve => reject


let delay = duration => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, duration);
  
    setTimeout(()=> {
      reject('Error');
    }, 200);
  });
delay(300)
  .then((a)=> console.log(a))
  .catch((error)=> console.log(error));


//Maps

let map = new Map();

map.set('key1', 'val1');
map.set('key2', 'val2');
map.set('key3', 'val3');
console.log(map);
console.log(map.get('key3'),'get');
console.log(map.has('key1'),'has'); //searh out put true or false
console.log(map.clear('key3'),'clear'); // remove all
console.log(map.delete('key3'),'delete'); // delete one
console.log(map.size,'size'); // return number

map.forEach(item => console.log(item));


let objKey = {};
let funcKey = () => {};
map.set(objKey, 'the value of object key');
map.set(funcKey, 'the value of function key');

map.forEach(item => {
  console.log(item);
});



let months = new Map();
months.set(1, 'Jan');
months.set(2, 'Feb');
months.set(3, 'Mar');
months.set(4, 'Apr');
months.set(5, 'May');
months.set(6, 'Jun');
months.set(7, 'Jul');
months.set(8, 'Aug');
months.set(9, 'Sep');
months.set(10, 'Oct');
months.set(11, 'Nov');
months.set(12, 'Dec');
let whatIsTheCurrentMonth = (month = (new Date()).getMonth() + 1 ) => {
  return months.get(month);
};

console.log(whatIsTheCurrentMonth());


//generators

function* myGenerator() { //function generator
    let first = yield 1;
    let second = yield 2;
    let third = yield 3;
  
    console.log(first, second, third);
  }
  
  let gen = myGenerator();
  console.log(gen.next(1));
  console.log(gen.next(2));
  console.log(gen.next(3));
  
  for(let x of gen) {
    console.log(x);
  }


 //string methods
 let str = 'this is the example of strings, not about math.';
 console.log(str.includes('strings'),'includes'); //return true or false 
 console.log(str.startsWith('t'),'startsWith'); //return true or false 
 console.log(str.endsWith('m'),'endsWith'); //return true or false 
 console.log(str.repeat(3),'repeat'); //return true or false 
 
 //Template literals=> use back-ticks `` 
 let name = "Medhat";
 let title = "Sr Frontend Engineer";
 console.log( `My name is ${name}, my title is ${title}`); // use string interpolation
 

//Destructuring Array
// Array
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let [a,b,c] = array;
console.log(a,b,c);

// Object
let obj = { foo: 111, bar: 222, foobar: 333 };
let {foo,bar} = obj;
console.log(foo,bar);

// swap values
let x = 1;
let y = 2;
[x, y] = [y,x];
console.log(x, y);

// skip values
let [e, , , , , , , f] = arr;
console.log(e, f);

// function params
function printMyInfo({name, age}) {
  return `My name is ${name} and my age is ${age}`;
}

let info = { name: 'Medhat', age: 28 };
console.log(printMyInfo(info));
// array new method
// Array.from
let aaa = new Map();
aaa.set('foo', 1);
aaa.set('bar', 2);

console.log(Array.from(aaa),'from');

// Array.of
let asd = Array.of(1, 2, 3, 4);
console.log(asd,'of');

// copyWithin()
let arrayy = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrayy.copyWithin(4, 0);
console.log(arrayy,'copyWithin');

// fill()
arrayy.fill('foo', 5);
console.log(arrayy,'fill');

// find() and findIndex()
console.log(arrayy.findIndex(x => x == 5),'fined & findIndex');

// entries() and keys() and values()
let strArr = ['a', 'b', 'c'];
let iterator = strArr.entries();

console.log(iterator.next())

let arra = [1, 2, 3, 4, 5];
let result = arra.fill(3, 3).copyWithin(3, 1);
console.log(...result);

//Object literal & Object methods
//Object literal

let names = 'Medhat';
let titles = 'Frontend Developer';
let hobby = 'Photography';

let infoe = {
  name,
  title,
  hobby
};

console.log(info);


//Object methods
// === assign
let obj1 = {
  name: 'Mahmoud'
}

let obj3 = {
  title: 'frontend developer'
}

let obj2 = Object.assign({},obj1,obj3);
console.log(obj1, obj2,'assign');

// === values / keys
let tasks = {
  0: 'clean home',
  1: 'buy groceries',
  2: 'go party'
}
console.log(Object.values(tasks),'values / keys');

// === sealed / freeze
const myObj = {
    name: 'John',
    age: 30
  }
  // Object.seal(myObj);
  // console.log(Object.isSealed(myObj));
  Object.freeze(myObj);
  console.log(Object.isFrozen(myObj));