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
document.write(card.repeat(4))