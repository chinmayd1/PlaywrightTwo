

let x = 10
console.log(x)

let add = function (x, y) {
    return x + y
}

// add(12,3)//function call
// console.log(add)

// function addition(fn, x, y) {

//     //     let fn  = function(x,y){
//     //     return x + y
//     // }
//     // let x = 20
//     //let  y = 12

//     let q1  = fn(x, y)
//     console.log(q1)
//     return q1

// }
// let q2 = addition(add, 20, 12)
// console.log(q2)

let sub = function (x, y) {
    return x - y
}
// console.log(sub) // function definition
// let q4 = sub(12,6) // function call
// console.log(q4)

// function subtraction(fn, x, y) {
//     // let fn = function (x, y) {
//     //     return x - y
//     // }
//     // let x  = 12
//     // let y = 4
//     let q6 = fn(x,y)
//     console.log(q6)
//     return q6
// }
// let q7 = subtraction(sub, 12, 4)
// console.log(q7)


// function as a return type
function AB() {
    return function () {
        console.log("hello")
    }
}

let q1 = AB()
console.log(q1)

q1() // call

// let q1 = function () {
//     console.log("hello")
// }