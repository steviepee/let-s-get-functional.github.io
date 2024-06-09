// #!/usr/bin/env node

'use strict';

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

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

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
