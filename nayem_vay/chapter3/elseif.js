/* 
Condition Statement are 4 types: if, if/else, else-if and switch of JS
Here i'm using just else-if statements
*/

// ******** Highest Number in two Numbers **********

var a = 20
var b = 20

if (a > b) {
    console.log('A is greater than B')
} else if (a < b) {
    console.log('B is greater than A')
} else {
    console.log('They Both are Same')
}


// ******** Even or Odd Number Calculated **********

var n = 0

if (n == 0) {
    console.log(n + ' is Zero')
} else if (n % 2 == 0) {
    console.log(n + ' is Even Number')
} else {
    console.log(n + ' is Odd Number')
}