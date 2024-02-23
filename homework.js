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

  // 2 code wars problems

/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that! */

const removeEveryOther = (arr) => {
    return arr.filter((_, i) => i % 2 === 0)
  }
  
  /* write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
  
  the string should start with a 1.
  
  a string with size 6 should return :'101010'.
  
  with size 4 should return : '1010'.
  
  with size 12 should return : '101010101010'.
  
  The size will always be positive and will only use whole numbers. */
  
  const stringy = (size) => {
    let string = ''
    for (let i = 0; i < size; i++){
      if (i % 2 === 0){
        string += '1'
      } else {
        string += '0'
      }
    }
    return string
  }
