// // First Class Function are 6 rules
function add(a, b) {
    return a + b
}
// 1. A Function can be Stored in a Variable
var sum = add
console.log(sum)
console.log(typeof sum)
console.log(sum(5, 3))

// 2. A Function can be Stored in an Array
var arr = []
arr.push(add)
console.log(arr)
console.log(typeof arr)
console.log(arr[0](10, 20))

// 3. A Function can be Stored in an Object
var obj = {
    sum: add
}
console.log(obj)
console.log(typeof obj)
console.log(obj.sum(5, 4))

// 4. We can Create Function as Need
setTimeout(function() {
    console.log('I have created...after 1 sec')
}, 1000)

// 5. We can pass Function as an Arguments
// 6. We can return Function from Another Function