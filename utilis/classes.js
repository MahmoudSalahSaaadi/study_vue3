class Human { // class Human
    constructor() { 
      console.log('Human Constructor');
  
      this.name = '';
      this.job = '';
      this.languages = 'Arabic, English';
    }
  
    getAge() { 
      return 28;
    }                      
  }
  export default class Person extends Human{ // class Person extends Human
    constructor(){ 
      super();
      console.log('Person Constructor');
  
      this.name = 'John Doe';
      this.job = 'Sofware Engineer';
    }
  
    getJob() {
      return this.job;
    }
  
    get getName() { //method getter => replace method to property
      return this.name;
    }
  
    set setName(personName) { //method setter => p.setName(personName)
      this.name = personName;
    }
  
    static getHeight() {
      return 173;
    }
  
    static getWeight() {
      return 83;
    }
  }