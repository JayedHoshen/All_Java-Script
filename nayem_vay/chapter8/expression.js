var addition = function(a, b) { // anonymous function
    return a + b
}
console.log(addition(10, 40))

var another = addition

// console.log(another)
console.log(another(7, 8))