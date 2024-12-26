//WebAPI
//Application Programming Interface
//هو عبارة عن واجهة برمجية بتقدم خدمات بلغة js


//------------------------------------------------------------------//
/*
  Data Types Intro
  - String
  - Number
  - Array => Object
  - Object
  - Boolean
*/

console.log("Osama Mohamed");
console.log(typeof "Osama Mohamed");//string
console.log(typeof 5000);//number
console.log(typeof 5000.99);//number
console.log(typeof [10, 15, 17]);//object
console.log(typeof { name: "Osama", age: 17, country: "Eg" });//object
console.log(typeof true);//boolean
console.log(typeof false);//boolean
console.log(typeof undefined);//undefined
console.log(typeof null);//object

//---------------------------------------------------------------------------//

let Title = "Elzero" , pargrapgh = "Elzero Web School" , date = "25/10";

// declear the card ariable
let card = `
    <div class="card">
        <h3>Hello ${Title}</h3>
        <p>${pargrapgh}</p>
        <span>${date}</span>
    </div>
`;

// Print

/*
  Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]
*/

console.log(10 + 20); //
console.log(10 + "Osama");

console.log(10 - 20);
console.log(10 - "Osama"); // NaN
console.log(typeof NaN);

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2); // Remove 1

/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/

let a = "100";
let b = 20;
let c = true;

console.log(+a + b + c);

/*
  String Methods
  - Access With Index //get the char by index
  - Access With charAt() //get the char by index
  - length  //check the length
  - trim() //remove spaces
  - toUpperCase() //to Upper Case
  - toLowerCase() //to Lower Case
  - Chain Methods //to Upper Case
*/

let theName = "  Ahmed  ";

console.log(theName);
console.log(theName[1]);
console.log(theName[5]);

console.log(theName.charAt(1));
console.log(theName.charAt(5));

console.log(theName.length);
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase());

/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0) //search the index
  - lastIndexOf(Value [Mand], Start [Opt] Length) //last index 
  - slice(Start [Mand], End [Opt] Not Include End) //cut the string
  - repeat(Times) [ES6] //repeat the string
  - split(Separator [Opt], Limit [Opt]) //split the string
*/

let aa = "Elzero Web School";

console.log(aa.indexOf("Web"));
console.log(aa.indexOf("Web", 8));
console.log(aa.indexOf("o")); // 5
console.log(aa.lastIndexOf("o")); // 15

console.log(aa.slice(2, 6));
console.log(aa.slice(-5, -3));

console.log(aa.repeat(5));

console.log(aa.split("", 6));

/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End) //
  --- Start > End Will Swap 
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)     
    --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]  // return true or false
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6] // return true or false
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6] // return true or false
*/

let aad = "Elzero Web School";

console.log(aad.length);

console.log(aad.substring(6, 2));
console.log(aad.substring(-10, 6)); // 0 - 6
console.log(aad.substring(a.length - 5, a.length - 3));

console.log(aad.substr(0, 6));
console.log(aad.substr(17));
console.log(aad.substr(-3));
console.log(aad.substr(-5, 2));

console.log(aad.includes("Web"));
console.log(aad.includes("Web", 8));

console.log(aad.startsWith("E"));
console.log(aad.startsWith("E", 2));
console.log(aad.startsWith("zero", 2));

console.log(aad.endsWith("l"));