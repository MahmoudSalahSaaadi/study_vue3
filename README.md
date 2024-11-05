We'll figure this out later
## oop

`constructor function`
``` javascript
constructor(name, email) {
 this.name = name;
 this.email = email;
}
```
`  Getters & Setters`

``` javascript
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
```

  `Class Inheritance`

  ``` javascript
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
```

