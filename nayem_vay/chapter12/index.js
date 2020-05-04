 // =================== Object Literal ================
 // var rect = {
 //     width: 100,
 //     height: 50,

 //     draw: function() {
 //         console.log('I am a rectangle')
 //         this.printProperties()
 //         console.log(this)
 //     },
 //     printProperties: function() {
 //         console.log('My width is ' + this.width)
 //         console.log('My height is ' + this.height)
 //     }
 // }

 // rect.draw()

 // // rect.height = 100

 // // rect.draw()

 // function myFunc() {
 //     console.log(this)
 // }

 // new myFunc()

 // var another = {
 //     width: 47,
 //     height: 56,
 //     print: rect.printProperties
 // }
 // console.log(another.print)
 // another.print()


 //  // ============ Create a Class Factory pattern =============
 //  var createRect = function(width, height) {
 //      return {
 //          width: width,
 //          height: height,

 //          draw: function() {
 //              console.log('I am a rectangle')
 //              this.printProperties()
 //              console.log(this)
 //          },
 //          printProperties: function() {
 //              console.log('My width is ' + this.width)
 //              console.log('My height is ' + this.height)
 //          }
 //      }
 //  }

 //  var rect1 = createRect(10, 8)
 //  rect1.draw()

 //  var rect2 = createRect(100, 80)
 //  rect2.draw()

 //  // ============ Create a Class Constructor pattern =============
 //  var Rectangle = function(width, height) {
 //      this.width = width
 //      this.height = height

 //      this.draw = function() {
 //          console.log('I am a rectangle')
 //          this.printProperties()
 //          console.log(this)
 //      }
 //      this.printProperties = function() {
 //          console.log('My width is ' + this.width)
 //          console.log('My height is ' + this.height)
 //      }
 //  }

 //  //  var rect1 = new Rectangle(10, 8)
 //  //  rect1.draw()

 //  // creating own new keyword

 //  function myNew(constructor) {
 //      var obj = {}
 //      Object.setPrototypeOf(obj, constructor.prototype)
 //      var argsArray = Array.prototype.slice.apply(arguments)
 //      constructor.apply(obj, argsArray.slice(1))

 //      return obj
 //  }

 //  var rect4 = myNew(Rectangle, 45, 30)
 //  rect4.draw()

 //  var str = new String('str')
 //  console.log('My String is ' + str)

 //  function test() {
 //      console.log('Something')
 //  }

 //  console.log(test.name, test.length)

 //  var Rect = new Function('width', 'height', `this.width = width
 //       this.height = height

 //       this.draw = function() {
 //           console.log('I am a rectangle')
 //           this.printProperties()
 //           console.log(this)
 //       }
 //       this.printProperties = function() {
 //           console.log('My width is ' + this.width)
 //           console.log('My height is ' + this.height)
 //       }`)

 //  var rect5 = new Rect(4, 5)
 //  console.log(rect5)

 //  function myFunc(c, d) {
 //      console.log(this)
 //      console.log(this.a + this.b + c + d)
 //  }

 //  // Call, Apply , Bind

 //  myFunc.call({ a: 40, b: 25 }, 10, 5)
 //  myFunc.apply({ a: 400, b: 250 }, [10, 5])

 //  myFunc.apply({})
 //  myFunc()

 //  var testBind = myFunc.bind({ a: 7, b: 3 })
 //  testBind(5, 7)

 //  // Pass by value vs pass by Reference
 //  // Call by value vs call by Reference
 //  var n = 10

 //  function change(n) {
 //      n = n + 100
 //      console.log(n)
 //  }

 //  change(n)
 //  console.log(n)

 //  var obj = {
 //      a: 10,
 //      b: 20
 //  }

 //  function changeMe(obj) {
 //      obj.a = obj.a + 100
 //      obj.b = obj.b + 100
 //      console.log(obj)
 //  }

 //  changeMe(obj)
 //  console.log(obj)

 //  // ============ Abstraction Implementation =============
 //  var Rectangle = function(width, height) {

 //      var position = {
 //          x: 56,
 //          y: -100
 //      }

 //      this.width = width
 //      this.height = height

 //      var printProperties = function() {
 //          console.log('My width is ' + this.width)
 //          console.log('My height is ' + this.height)
 //      }.bind(this)

 //      //  this.getPosition = function() {
 //      //      return position
 //      //  }

 //      this.draw = function() {
 //          console.log('I am a rectangle')
 //          printProperties()
 //          console.log('Position: X= ' + position.x + ' Y=' + position.y)
 //      }

 //      Object.defineProperty(this, 'position', {
 //          get: function() {
 //              return position
 //          },
 //          set: function(value) {
 //              position = value
 //          }
 //      })
 //  }

 //  var rect6 = new Rectangle(45, 30)
 //  rect6.draw()
 //  rect6.position = {
 //      x: 456,
 //      y: -123
 //  }
 //  console.log(rect6.position)