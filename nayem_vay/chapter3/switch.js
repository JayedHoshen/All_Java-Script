/* 
Condition Statement are 4 types: if, if/else, else-if and switch of JS
Here i'm using just switch statements
*/

// ******** Day Print **********
// 0- Sunday, 1- Monday, 2- Tuesday, 3- Wednesday, 4- Thursday, 5- Friday, 6- Saturday
// var date = new Date()
// var today = date.getDay()

// switch (today) {
//     case 0:
//         console.log('Today is Sunday')
//         break
//     case 1:
//         console.log('Today is Monday')
//         break
//     case 2:
//         console.log('Today is Tuesday')
//         break
//     case 3:
//         console.log('Today is Wednesday')
//         break
//     case 4:
//         console.log('Today is Thursday')
//         break
//     case 5:
//         console.log('Today is Friday')
//         break
//     case 6:
//         console.log('Today is Saturday')
//         break
//     default:
//         console.log('Not a valid Number')
// }

// ******** GPA Calculate **********
/*
 case:9 90 - 100 = A+ 
 case:8 80 - 89 = A
 case:7 70 - 79 = A-
 case:6 60 - 69 = B
 case:5 50 - 59 = C
 case:4 40 - 49 = D
 default: Fail
*/
var marks = 99.55
var great = Number.parseInt(marks / 10)
console.log(great)

switch (great) {
    case 9:
        console.log('A+')
        break
    case 8:
        console.log('A')
        break
    case 7:
        console.log('A-')
        break
    case 6:
        console.log('B')
        break
    case 5:
        console.log('C')
        break
    case 4:
        console.log('D')
        break
    default:
        console.log('Fail')
}