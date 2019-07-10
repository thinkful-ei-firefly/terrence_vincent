'use strict';

/*1. Object initializers and methods
Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to 300 
and water which should be set to 210.
Use console.log to print the flour and water properties.
Add an empty method to the loaf object called hydration.
Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
Call the hydration method and use console.log to print the result.*/

let loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return (this.water/this.flour)*100;
  }
};

console.log(loaf);
console.log(loaf.hydration());

/*Iterating over an object's properties
Create an object with five properties: foo, bar, fum, quux, and spam. 
Give each property a unique value of your choosing.
Loop over the object using for ... in
Use console.log to show each property name and its associated value. */

const obj={
  foo:2,
  bar:3,
  fum:4,
  quux:5,
  spam:6,
}

for (const key in obj){
  const value=obj[key];
  console.log(value);
}


/*3. Arrays in objects
Create an object with a property called meals which is an array of strings:
 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
Use console.log to show the name of a hobbit's fourth meal of the day.
Don't forget that humans and hobbits count from 1, but computers count from 0.*/

const hobbitMeal = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(hobbitMeal.meals[3]);

/*Arrays of objects
Create 3 - 5 objects, each with a name and a jobTitle.Use people you know, or characters from fiction, 
or your own inventions.
Store these objects in an array.
Iterate over the array and use console.log to show each person's job title and name.

const arrayOfObjects=[
  {name: 'Bob', jobTitle: 'Cook'},
  {name: 'Abe', jobTitle: 'Dishwasher'},
  {name: 'Cat', jobTitle: 'Hostess'},
];

for (const key of arrayOfObjects){
  console.log(`${key.name} is a ${key.jobTitle}`);

  
}

5. Properties that aren't there
Expand on the previous example by adding a boss property to everyone except the owner of the company.
Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.".
 For example: Junior Engineer Bob reports to Fred..
What gets printed out for the owner?
Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody."
 - for example, Founder John doesn't report to anybody.*/

const arrayOfObjects=[
  {name: 'Bob', jobTitle: 'Cook', boss: 'Joe'},
  {name: 'Abe', jobTitle: 'Dishwasher', boss: 'Joe'},
  {name: 'Cat', jobTitle: 'Hostess', boss: 'Joe'},
  {name: 'Joe', jobTitle: 'Owner', boss: null}
];
  
for (const key of arrayOfObjects){
  if(key.boss !== null){
    console.log(`${key.jobTitle} ${key.name} reports to ${key.boss}.`);
  }

  if(key.boss === null){
    console.log(`${key.jobTitle} ${key.name} doesn't report to anybody.`);
  }


    
  
    
}

