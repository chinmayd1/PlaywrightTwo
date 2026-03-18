let a = 10
console.log(a)
a = 1000
console.log(a)

const h = 1000
console.log(h)
//h = 1000

// program 2

let q = 8
let r = 4

console.log(q+r)
console.log(q-r)
console.log(q*r)
console.log(q/r)
console.log(q%r)

let j = 6
let k = 3

console.log(j+k)
console.log(j-k)
console.log(j*k)
console.log(j/k)
console.log(j%k)


function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,3)
Calculator(10,5)

// function without parameter and without return type 

function addA(){
    console.log(9+9)
}
addA()
addA()
addA()

// function with parameter and without return type 
function addB(x,y){
    console.log(x+y)
}
addB(12,4)
addB(12,2)
addB(6,2)

// function with parameter and with return type
// 100 given , 100 shown ??

function addC(x,y){
    return x + y
}
let q1 = addC(12,3)
console.log(q1)
console.log(q1 + q1)
console.log(q1 / 5)
console.log(q1 * 0.10)

