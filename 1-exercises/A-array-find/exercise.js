/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];


function findLongNameThatStartsWithA(arr) {
  return arr.find(x => x.charAt(0) === "A" && x.length > 7);
}

var longNameThatStartsWithA = findLongNameThatStartsWithA(names); 

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
