// Type Annotations 
// -- Indicate The Data Type Of Variables

let theName: string = "mahound";
let theAge: number = 40;
let hire: boolean = true;
let all: any = "Elmer Web School";
let allVars; // Any

theName = "salah";  
all = "mahmoud";
all = 100;

function test(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(test(10, 20));
console.log(typeof add(10, 20));

function add(n1: number , n2: any ) {
  return n1 + n2;
}

console.log(add(10, "20"));
console.log(typeof add(10, "20"));


// Type Annotations with Array

let asd: string | number | boolean = "Osama";

asd = "A";
asd = 100;
asd = true;

let myFriends: string[] = ["Osama", "Ahmed", "Sayed"];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i].repeat(3));
}

//Type Annotations With Multidimensional Arrays
const one: number[] = [1,2,3]
const two: string[] = ["a","b","c"]
const three: (string | number)[] = [1,2,3,"a","b","c"]
const four: (string | number | number[] |string[] | boolean[])[] = [1,2,3,"a","b","c",[1,2], [true, false]]
console.log(four);



//Type Annotations With Function in put & out put

const message: boolean = true

function show (name: string, age: number , salary?: number) : number | string {
  if(message){
return `name ${name}, age ${age} `
  }
return 44
}
console.log(show("mahmoud", 15))


//Function Optional and Default Parameters

function showData(name?: string, age?: number, country?: string) {
  return `${name} - ${age} - ${country}`;
}

console.log(showData(undefined, 40, "Egypt"));

function showUN(name = "Un", age, country) {
  return `${name} - ${age} - ${country}`;
}

console.log(showUN(undefined, 40, "Egypt"));


//Function Rest Parameter

function allAdd (...num: number[]){
  let result = 0;

  // for(let i = 0 ; i < num.length; i++){
  //   result += num[i]

  // }
   num.forEach((test) => result += test)

  return result
}
console.log(allAdd(10,20,30, +true));

//Type Annotations With Anonymous And Arrow Function
const dsa = function(num1: number, num2: number) : number {
  return num1 + num2;
}

console.log(add(10, 20));

const addWithArrow = (num1: number, num2: number) : number => num1 + num2;

console.log(addWithArrow(10, 20));



//Type Alias Advanced
type Buttons = {
  up: string,
  right: string,
  down: string,
  left: string
}

type Last = Buttons & {
  x: boolean
}

function getActions(bans: Last)  {
  console.log(`Action For Button Up Is ${bans.up}`);
  console.log(`Action For Button Right Is ${bans.right}`);
  console.log(`Action For Button Down Is ${bans.down}`);
  console.log(`Action For Button Left Is ${bans.left}`);
}

getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });

//Data Types - Literal Types
type zzz = 0 | 1 | -1;

function compare(num1: number, num2: number) : zzz {
  if (num1 === num2) {
    return 0;
  } else if (num1 > num2) {
    return 1;
  } else {
    return -1;
  }
}

console.log(compare(20, 20)); // 0
console.log(compare(20, 15)); // 1
console.log(compare(20, 30)); // -1

let myNumber: zzz = 1;

// Data Types - Tuple

let article: readonly [number, string, boolean] = [11, "Title One", true];
article = [12, "Title Two", false];
// article.push(100);
console.log(article);

const [id, title, published] = article; // destruction 
console.log(id);
console.log(title);
console.log(published);

//- Data Types - Void And Never  {hold}

function logging(msg: string) : void {
  console.log(msg);
  return;
}

console.log(logging("Iam A Message"));
console.log("Test");

const fail = (msg: string) => {
  throw new Error(msg);
  // return 10;
}

function alwaysLog(name: string) : never {
  while(true) {
    console.log(name);
  }
}

// alwaysLog("Osama");
// console.log("Test");


/*
  Data Types
  - Enums => Enumerations
  --- Enum Can Refer To Other Enum
  --- Enum Can Refer To Same Enum
  --- Enum Can Have Calculations
  --- Enum Can Have Functions
*/

function getHardSeconds() : number {
  return 3;
}

enum Kids {
  Five = 25,
  Seven = 20,
  Ten = 15
}

enum Level {
  Kid = Kids.Ten,
  Easy = 9,
  Medium = Easy - 3,
  Hard = getHardSeconds()
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
}
//  Data Types
  // Union And Intersection Types

  type A = {
    one: string,
    two: number,
    three: boolean
  }
  
  type B = A & {
    four: number
  }
  
  type C = {
    five: boolean //Intersection 
  }
  
  type mix = A & C;
  
  function getAction(bens: mix) {
    console.log(`Hello ${bens.one}`);
    console.log(`Hello ${bens.two}`);
    console.log(`Hello ${bens.three}`);
    console.log(`Hello ${bens.five}`);
  }
  
  getAction({ one: "String", two: 100, three: true, five: true });

  /*
  Type Annotations With Object
*/

let myObject: {
  readonly username: string,
  id: number,
  hire?: boolean,
  
  skills: {
    one: string,
    two: string
  }
} = {
  username: "Elzero",
  id: 100,
  hire: true,
  skills: {
    one: "HTML",
    two: "CSS"
  }
};

// myObject.username = "Osama";
myObject.id = 101;
myObject.hire = false;

console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);

// Interface Declaration
interface User {
  getDouble(arg0: number): any;
  sayWelcome(): any;
  sayHello(): any;
  id?: number,
  readonly username: string,
  country: string
}

let user: User = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
  getDouble: function (arg0: number) {
    throw new Error("Function not implemented.");
  },
  sayWelcome: function () {
    throw new Error("Function not implemented.");
  },
  sayHello: function () {
    throw new Error("Function not implemented.");
  }
}

user.country = "Syria";

console.log(user);

function getData(data: User) {
  console.log(`Id Is ${data.id}`);
  console.log(`Username Is ${data.username}`);
  console.log(`Country Is ${data.country}`);
}

getData({
  id: 200, username: "Osama", country: "KSA",
  getDouble: function (arg0: number) {
    throw new Error("Function not implemented.");
  },
  sayWelcome: function () {
    throw new Error("Function not implemented.");
  },
  sayHello: function () {
    throw new Error("Function not implemented.");
  }
});

// Interface Method And Parameters
interface Users {
  id: number;
  username: string;
  country: string;
  sayHello() : string;
  sayWelcome: () => string;
  getDouble(num: number) : number;
}

let users: Users = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
sayHello(): string {
  return `Hello ${this.username}`;
},
sayWelcome: () => {
  return `Welcome ${user.username}`;
},
  getDouble(n) {
    return n * 2;
  }
}

console.log(user.id);
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(100));       