// // break statement using while loop
// while (true) {
//     var rand = Math.floor(Math.random() * 10 + 1)
//     if (rand == 9) {
//         console.log('Winner Winner Chicken Dinner!')
//         break
//     } else {
//         console.log('You have got ' + rand)
//     }
// }

// break statement using for loop
for (var i = 1; i < 10; i++) {
    if (i % 5 == 0) {
        break
    } else {
        console.log(i)
    }
}