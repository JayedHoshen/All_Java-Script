// &&||!

// A && B
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// A || B
// true || true = true
// true || false = true
// false || true = true
// false || false = false

var a = 10
var b = 20
var c = 30
var d = 40

// AND Operation
if (a > b && c > d) {
    console.log('A is greater than B and C is grater than D')
} else {
    console.log('At least one condition is false')
}

// OR Operation
if (a > b || c > d) {
    console.log('A is greater than B or C is greater than D')
} else {
    console.log('At least two condition is false')
}

// NOT Operation
var check = !(a > b)
console.log(check)