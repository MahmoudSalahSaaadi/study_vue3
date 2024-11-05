// Type Annotations 
// -- Indicate The Data Type Of Variables
var theName = "mahound";
var theAge = 40;
var hire = true;
var all = "Elmer Web School";
var allVars; // Any
theName = "salah";
all = "mahmoud";
all = 100;
function test(n1, n2) {
    return n1 + n2;
}
console.log(test(10, 20));
console.log(typeof add(10, 20));
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(10, "20"));
console.log(typeof add(10, "20"));
// Type Annotations with Array
var asd = "Osama";
asd = "A";
asd = 100;
asd = true;
var myFriends = ["Osama", "Ahmed", "Sayed"];
for (var i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i].repeat(3));
}
//Type Annotations With Multidimensional Arrays
var one = [1, 2, 3];
var two = ["a", "b", "c"];
var three = [1, 2, 3, "a", "b", "c"];
var four = [1, 2, 3, "a", "b", "c", [1, 2], [true, false]];
console.log(four);
//Type Annotations With Function in put & out put
var message = true;
function show(name, age, salary) {
    if (message) {
        return "name ".concat(name, ", age ").concat(age, " ");
    }
    return 44;
}
console.log(show("  ", 15));
//Function Optional and Default Parameters
function showData(name, age, country) {
    return "".concat(name, " - ").concat(age, " - ").concat(country);
}
console.log(showData(undefined, 40, "Egypt"));
function showUN(name, age, country) {
    if (name === void 0) { name = "Un"; }
    return "".concat(name, " - ").concat(age, " - ").concat(country);
}
console.log(showUN(undefined, 40, "Egypt"));
//Function Rest Parameter
function allAdd() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var result = 0;
    // for(let i = 0 ; i < num.length; i++){
    //   result += num[i]
    // }
    num.forEach(function (test) { return result += test; });
    return result;
}
console.log(allAdd(10, 20, 30, +true));
//Type Annotations With Anonymous And Arrow Function
var dsa = function (num1, num2) {
    return num1 + num2;
};
console.log(add(10, 20));
var addWithArrow = function (num1, num2) { return num1 + num2; };
console.log(addWithArrow(10, 20));
function getActions(bans) {
    console.log("Action For Button Up Is ".concat(bans.up));
    console.log("Action For Button Right Is ".concat(bans.right));
    console.log("Action For Button Down Is ".concat(bans.down));
    console.log("Action For Button Left Is ".concat(bans.left));
}
getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(20, 20)); // 0
console.log(compare(20, 15)); // 1
console.log(compare(20, 30)); // -1
var myNumber = 1;
// Data Types - Tuple
var article = [11, "Title One", true];
article = [12, "Title Two", false];
// article.push(100);
console.log(article);
var id = article[0], title = article[1], published = article[2]; // destruction 
console.log(id);
console.log(title);
console.log(published);
//- Data Types - Void And Never  {hold}
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging("Iam A Message"));
console.log("Test");
var fail = function (msg) {
    throw new Error(msg);
    // return 10;
};
function alwaysLog(name) {
    while (true) {
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
function getHardSeconds() {
    return 3;
}
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["Kid"] = 15] = "Kid";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = getHardSeconds()] = "Hard";
})(Level || (Level = {}));
var lvl = "Easy";
if (lvl === "Easy") {
    console.log("The Level Is ".concat(lvl, " And Number Of Seconds Is ").concat(Level.Hard));
}
function getAction(bens) {
    console.log("Hello ".concat(bens.one));
    console.log("Hello ".concat(bens.two));
    console.log("Hello ".concat(bens.three));
    console.log("Hello ".concat(bens.five));
}
getAction({ one: "String", two: 100, three: true, five: true });
/*
Type Annotations With Object
*/
var myObject = {
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
