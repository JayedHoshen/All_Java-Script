// String Declare two types: 1) Literal-'', "" 2) Constructor-String()

// Literal
var n = 'Something'
console.log(n)

// Literal with type conversion 1st way
var n = 100
var str = n + ''
console.log(str)

// Literal with type conversion 2nd way
var n = 100
var str = n.toString()
console.log(str)

// Constructor 
var str = String('something')
console.log(str)

var n = '200'
var str = String(n)
console.log(str)

// Constructor without new and convert
var n = 1000
var str = String(n)
console.log(str)

// Constructor with new (new returns an objects)
var n = 10
var str = new String(n)
console.log(str.toString())