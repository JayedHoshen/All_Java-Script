// function extend(Parent, Child) {
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child
// }

// function Shape(color) {
//     this.color = color
// }

// Shape.prototype.common = function() {
//     console.log('I am common Method')
// }

// function Square(width, color) {
//     Shape.call(this, color)
//     this.width = width
// }
// extend(Shape, Square)

// Square.prototype.common = function() {
//     console.log('I am calling from square and i have overridden')
// }

// Square.prototype.draw = function() {
//     console.log('Drawing')
// }

// // var shape = new Shape()
// var sqr = new Square(45, 'green')

// // shape-> shape -> Object
// // sqr-> Square-> Object

// // sqr-> Square-> Shape-> Object

// function Circle(radius, color) {
//     Shape.call(this, color)
//     this.radius = radius
// }
// extend(Shape, Circle)

// Circle.prototype.common = function() {
//     // Shape.prototype.common.call(this)
//     console.log('I am calling from circle and i have overridden')
// }
// var c = new Circle(25, 'red')

// var s = new Shape('purple')

// var shapes = [s, c, sqr]

// for (var i of shapes) {
//     i.common()
// }

function mixin(target, ...sources) {
    Object.assign(target, ...sources)
}

var canWalk = {
    walk: function() {
        console.log('Walking...')
    }
}

var canEat = {
    eat: function() {
        console.log('Eating...')
    }
}

var canSwim = {
    swim: function() {
        console.log('Swimming....')
    }
}

// var person = Object.assign({}, canWalk, canEat)
// person.name = 'HM Jayed'

function Person(name) {
    this.name = name
}

// Object.assign(Person.prototype, canWalk, canEat)
mixin(Person.prototype, canWalk, canEat)

var person = new Person('HM Jayed')
console.log(person)

function GoldFish(name) {
    this.name = name
}
mixin(GoldFish.prototype, canEat, canSwim)

var fish = new GoldFish('bla bla bla...')
console.log(fish)