/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";

let result = "";

let statementStart = statement.substring(0, 4);
let statementEnd = statement.substring(8, 26);

result = statementStart + statementEnd;

console.log(result);
/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
