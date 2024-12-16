class Car {
	constructor(name, color, model, owner) {
		this.name = name;
		this.color = color;
		this.model = model;
		this.owner = owner;
	}

	turnLeft() {
		console.log(`${this.name} Is Turn Left`);
	}
}

const PMW = new Car("PMW", "RED", 2010, "dddd");
const dayw = new Car("dayw", "RED", 2010);
const hondi = new Car("hondi", "RED", 2010);

hondi.turnLeft()


class Car2 {
    constructor(color,name ,size) {
        this.color = color
        this.name = name
        this.size = size
    }
    stop() {
        console.log("Stop");
    }
}
const car1 = new car("blow", "PMW", 500)
const car12 = new car("red", "PMW", 200)
const car3 = new car("green", "PMW", 1000)
car1.stop()
console.log(Car2);


/*
  Class
  Inheritance
*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  showEmail() {
    return `Your Email Is ${this.email}`;
  }
  writeMsg() {
    return `Message From Parent Class`;
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  adminMsg() {
    return `You Are Admin`;
  }
  writeMsg() {
    return `Message From Child Class`;
  }
}

let admin1 = new Admin("Osama", "o@nn.sa");
/*
  JavaScript Accessors
  Getters & Setters
*/

class User {
	constructor(name, email) {
	  this.name = name;
	  this.email = email;
	}
	sayHello() {
	  return `Hello ${this.name}`;
	}
	get showInfo() {
	  return `Name: ${this.name}, Email" ${this.email}`;
	}
	changeName(newName) {
	  this.name = newName;
	}
	set changeEmail(newEmail) {
	  this.email = newEmail;
	}
  }
  
  let user1 = new User("Osama", "o@nn.sa");
  
  console.log(user1.name);
  console.log(user1.email);
  console.log(user1.showInfo);
  
  user1.changeName("Mahmoud");
  console.log(user1.name);
  console.log(user1.showInfo);
  
  user1.changeEmail = "oooo@gmail.com";
  console.log(user1.name);
  console.log(user1.email);
  console.log(user1.showInfo);
  /*
  Object Meta Data
  writable
  enumerable
  configurable
  ============
  Object.defineProperty(obj, prop, descriptor)
*/
 
  Object.defineProperty(myObject, "c", {
	writable: false,
	enumerable: false,
	configurable: true,
	value: 3,
  });
  
  Object.defineProperty(myObject, "c", {
	writable: true,
  });
  
  // console.log(delete myObject.c); // Will Not Delete Because configurable is False
  myObject.c = 500; // Will Not Change Because writable is False
  
  console.log(myObject);
  
  console.log("#".repeat(10));
  
  for (let prop in myObject) {
	console.log(prop, myObject[prop]);
  }
  
  console.log("#".repeat(10));
  
  console.log(Object.getOwnPropertyNames(myObject));