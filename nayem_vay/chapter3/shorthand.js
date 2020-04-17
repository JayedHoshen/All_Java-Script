// Short hand type condition use AND OR

var name = 'Mj'
var fullName = ''

if (name.length == 0) {
    fullName = 'HM Jayed'
} else {
    fullName = name
}
console.log(fullName)

// short-hand OR
var name = ''
var fullName = name || 'HM Jayed'
console.log(fullName)

// short-hand AND
var isOk = true

if (isOk) {
    console.log('Everything is Ok')
}

isOk && console.log('Everything is Ok') //short