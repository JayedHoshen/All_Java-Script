// function greet(msg) {
//     function greeting(name) {
//         return msg + ', ' + name + '!'
//     }
//     return greeting
// }

// var gm = greet('Good Morning')
// var gn = greet('Good Night')
// var hello = greet('Hello')

// // console.log(typeof gm)
// console.log(gm('HM Jayed'))
// console.log(gn('HM Jayed'))
// console.log(hello('MJ'))

function base(b) {
    return function(n) {
        var result = 1
        for (var i = 0; i < b; i++) {
            result *= n
        }
        return result
    }
}
var base10 = base(10)
console.log(base10(2))

var base5 = base(5)
console.log(base5(2))
console.log(base5(3))
console.log(base5(5))