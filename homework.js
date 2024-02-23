console.log("test")


//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
for (const food in person3) {
    console.log(`${food}: ${person3[food]}`)
}

//referenced codeium on how to for loop through an object. 

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    printPersonInfo = () => {
        console.log(`${this.name} is ${this.age} years old`);
    }
    addAge = (years) => {
        this.age += years;
    }
}


// Use an arrow to create the printInfo method
printPersonInfo = () => {
    console.log(`${this.name} is ${this.age} years old`);
}


// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
addAge = (years) => {
    this.age += years;
}


const personA = new Person("Jay", 111);
const personB = new Person("JDuce", 333);

personA.printPersonInfo();
personB.printPersonInfo();

personA.addAge(3);
personB.addAge(3);

personA.printPersonInfo();
personB.printPersonInfo();
console.log(personA.age);

/* Created an instance of the Person class with 2 parameters
 Call both methods
 Call the addAge method on personB
Called my addAge method on personA
Print both persons information
Print the persons age
*/




// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

const  eargastData = async function() {
    try {
      const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`There was an error: ${error}`);
    }
  }
  
  eargastData();
