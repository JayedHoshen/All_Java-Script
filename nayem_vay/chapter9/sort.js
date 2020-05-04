// // ******** Start of sorting function **********
//var persons = [{
//         name: 'A',
//         age: 24
//     },
//     {
//         name: 'B',
//         age: 19
//     },
//     {
//         name: 'C',
//         age: 26
//     },
//     {
//         name: 'D',
//         age: 21
//     }
// ]

// var arr = [4, 8, 1, 6, 7, 9, -8, 0, -2, 4, 3, 5, 6, 8, 2, 1, 7, -4]

// // arr.sort()
// // console.log(arr)

// // persons.sort()
// // console.log(persons)

// arr.sort(function(a, b) {
//     if (a > b) {
//         return 1 // ascending
//             // return -1 // descending
//     } else if (a < b) {
//         return -1 // ascending
//             // return 1 // descending
//     } else {
//         return 0;
//     }
// })
// console.log(arr)

// persons.sort(function(a, b) {
//     if (a.age > b.age) {
//         return 1 // ascending
//             // return -1 // descending
//     } else if (a.age < b.age) {
//         return -1 // ascending
//             // return 1 // descending
//     } else {
//         return 0
//     }
// })

// console.log(persons)

// // ******** End of sorting function **********


// // ******** Every function **********
// var arr = [4, 8, 1, 6, 7, 9, 4, 3, 5, 6, 8, 2, 1, 7]

// var res1 = arr.every(function(value) {
//     return value % 2 == 0 // every value is even? true / false
// })
// console.log(res1)

// var res2 = arr.every(function(value) {
//     return value >= 0 // every value is positive? true/false
// })
// console.log(res2)

// // ******** Some function **********
// var arr = [4, 8, 1, -2, 6, 7, 9, 4, 3, 5, 6, 8, 2, 1, 7]

// var res1 = arr.some(function(value) {
//     return value % 2 == 1
// })
// console.log(res1)

// var res2 = arr.some(function(value) {
//     return value < 0
// })
// console.log(res2)