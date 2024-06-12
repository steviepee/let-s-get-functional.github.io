// #!/usr/bin/env node

'use strict';

const { result } = require('lodash');
var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

/**`maleCount`
 - **Objective**: Find the number of male customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `filter`
  */

var maleCount = function(array) {
  //use filter on the array
  let sto = [];
    sto.push(array.filter(function(value) {
      if (value.gender === 'male') {
        sto.push(value);
      }
      }))
      return sto.length - 1;
    }


var femaleCount = function(array) {
  //use reduce to find the number of qualifying customers
  //have a variable stand as the result of reduce resolving
 let count = array.reduce(function (accum, current) {
  //if the gender of the customer is female
  if (current.gender === 'female') {
    //add one to the accumulator count
    accum += 1;
  }//at the end of the loop, return the accumulated number
  return accum;
 }, 0);//return the stand in variable
 return count;
}

var oldestCustomer = (array) => {
  // *fund the oldest customer's name.. no requirements
  //use reduce to iterate over the array. give the result a variable
  let fogie = array.reduce((oldest, other) => {
    //if other is older than the oldest, change oldest to that name, otherwise it remains the same
    return other.age > oldest.age ? oldest = other : oldest = oldest;
    //at the end of the loop, return the oldest customer's info
    return oldest;
  })//return the oldest object's name
  return fogie.name; 
}

var youngestCustomer = (array) => {
  //set a variable to the result of casting reduce on the array with callback fctn
  let youngster = array.reduce((youngest, other) => {
    //if other is younger than the youngest, change youngest to that name, otherwise it remains the same
    return other.age < youngest.age ? youngest = other : youngest = youngest;
    //at the end of the loop, return the youngest customer's info
    return oldest;
  })//return the youngest object's name
  return youngster.name; 
}
//average balance of all customers
var averageBalance = array => {
  //use reduce to find the total balance of all customers
  let total = array.reduce((tally=0, current) => {
    //remove the dollar sign from the string of the balance. Give it a variable
    let money = current.balance.substring(1, current.balance.length);
    //remove all commas from the string. Make that a variable as well
    let dough = money.replace(/,/g, '');
    //turn the remaining string into a number
    let cash = Number(dough);
// add the current objcet's balance to the tally until the end of the loop
    return tally += cash;
    //return the final tally
    return tally;
  }, 0);
  //return the total balance divided by the number of customers
  return total / array.length;
}
//how many customers names begin with a certain letter
var firstLetterCount = (array, letter) => {
//use reduce to iterate over the array to check for the letter
let number = array.reduce((tally, current) => {
  //if the current object's name starts with the specified letter(case insensetive) add one to the tally, if not, leave the tally alone
  return current.name[0].toUpperCase() === letter.toUpperCase() ? tally += 1 : tally;
  // at the end of the loop, return the number of hits
  return tally;
}, 0)//return the beginning variable
return number;
}
//find how many of an object's friends names start with given letter (array, customer, letter)
//case insensetive
var friendFirstLetterCount = (array, customer, letter) => {
  //iterate over the array
  for (let i = 0; i < array.length; i++) {
    //if the object's name property is the same as the argument name
    if (array[i].name === customer) {
      //make a variable to denote this object's friends array
      let buds = array[i].friends;
      //use reduce to iterate over the friends array and find the names that start with the given letter.
      //give the result a variable
      let number = buds.reduce((tally, current) => {
      //if the current index starts with the given number, add one to the tally, if not, leave the tally alone
      return current.name[0].toUpperCase() === letter.toUpperCase() ? tally += 1 : tally;
      //when the loop ends, return the number of hits
      return tally;
      }, 0)
      //return the reduce variable
      return number;
    }
  }
}
//
var friendsCount = (Array, Name) => {
  //create a storage array
  let sto = [];
//iterate over the array
for (let i = 0; i < Array.length; i++) {
  //create a variable for the current object's friends array
  let buds = Array[i].friends;
  //iterate through friends array
  for (let a = 0; a < buds.length; a++) {
    //if a name here matches the argument
    if (buds[a].name === Name) {
      //push the object into the storage array
      sto.push(Array[i].name);
    }
  }
  }//return the storage array
  return sto
  }

var topThreeTags = function(array) {
//create storage array
let sto = [];
//create holding object
let check = {};
  //create output array
let output = [];
//iterate through the array
for (let i = 0; i < array.length; i++) {
  //iterate over the tags array of each object
  for (let a = 0; a < array[i].tags.length; a++) {
    //place all values into the storage array
    sto.push(array[i].tags[a]);
  }
}//now that we have all the arrays together, iterate through the storage array
for (let i = 0; i < sto.length; i++) {
  //for each value, check if it's been placed as a key of the holding object
check.hasOwnProperty(sto[i]) ? check[sto[i]] = check[sto[i]] + 1 : check[sto[i]] = 1;

}//make sto into a new empty array
sto = [];
//now that check holds the key value pairs, re-form the pairs into nested arrays
let newSto =(Object.entries(check).sort());
//sort the nests highest to lowest
//take the first three values and push them into the output array
output.push(newSto[0][0]);
output.push(newSto[1][0]);
output.push(newSto[2][0]);
//return output array
return output;
}

var genderCount = function(array) {
  //iterate over the array
  for (i = 0; i < array.length; i++) {
    //for each object, log its gender value..
    //have the gender value be the key and the amount of times it appears in the array be the value
  }
} 

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
