var arr = [7, 4, 8, 6, 9, 1, 2, 70, 3]

// var resultValue = arr.find(function(value) {
//     return value == 9
// })
// console.log(resultValue)

// var resultIndex = arr.findIndex(function(value) {
//     return value == 9
// })
// console.log(resultIndex)

function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            // return arr[i]
            return i
        }
    }
}

var result = myFind(arr, function(value) {
    return value == 9
})

console.log(result)