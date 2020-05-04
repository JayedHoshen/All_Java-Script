// Execution Context

function a() {
    b()
    console.log('I am Function A')
}

function b() {
    d()
    console.log('I am Function B')
}

function c() {
    console.log('I am Function C')
}

function d() {
    c()
    console.log('I am Function D')
}

var x = 100
a()
console.log('I am Global')

// Execution of C Function Context
// Execution of D Function Context
// Execution of B Function Context
// Execution of A Function Context
// Execution of global Context

// Creation phase
// Executional phase