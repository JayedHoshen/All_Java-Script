// for loop using

// ******** 100 Print Hello World **********
// for (var i = 0; i < 100; i++) {
//     console.log((i + 1) + ' Hello World')
// }

// // ******** 1 to 100 Even Number Print **********
// for (var i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// // ******** 1 to 100 Odd Number Print **********
// for (var i = 1; i <= 100; i++) {
//     if (i % 2 == 1) {
//         console.log(i)
//     }
// }

// // ******** 1 to 100 Number Print with summation **********
// var sum = 0
// for (var i = 1; i <= 100; i++) {
//     console.log(sum + ' + ' + i + ' = ' + (sum + i))
//     sum += i
// }
// console.log('Result = ' + sum)

// // ******** 1 to 100 Odd Number Print with summation **********
// var sum = 0
// for (var i = 1; i <= 100; i++) {
//     if (i % 2 == 1) {
//         console.log(sum + ' + ' + i + ' = ' + (sum + i))
//         sum += i
//     }
// }
// console.log('Result = ' + sum)

// ******** 1 to 100 Even Number Print with summation **********
var sum = 0
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(sum + ' + ' + i + ' = ' + (sum + i))
        sum += i
    }
}
console.log('Result = ' + sum)