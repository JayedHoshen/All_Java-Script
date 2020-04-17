// What is Pure function

// *It Return the same result if given the same arguments
// * It does not cause any observable side effects

// pure function
function sqr(n) {
    return n * n
}
console.log(sqr(3))
console.log(sqr(3))
console.log(sqr(3))
console.log(sqr(3))

// not pure function it's side effect
var n = 10

function change() {
    n = 100
}
change()
console.log(n)

// second
var point = {
    x: 45,
    y: 30
}

function printPoint(point) {
    point.x = 100
    point.y = 200

    console.log(point)
}

printPoint(point)

console.log(point)