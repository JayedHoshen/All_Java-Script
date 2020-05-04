// // Closure is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope

// // able to remember and access it's lexical
// // when that function executing outside it's lexical scope

// function test() {
//     var msg = 'I am learning lexical scope and closure'

//     function sayMsg() {
//         console.log(msg)
//     }

//     sayMsg()
// }
// test()

// // Accessing outside function that call closure
// function testOutside() {
//     var msg = 'I am Learning Lexical Scope and Closure'

//     return function() {
//         console.log(msg)
//     }
// }
// var sayMsg = testOutside()
// sayMsg()

// ********using Immediately invoked function expression(IIFE) *********

for (var i = 1; i <= 10; i++) {
    (function(n) {
        setTimeout(function() {
            console.log(n)
        }, 1000 * n)
    })(i)
}