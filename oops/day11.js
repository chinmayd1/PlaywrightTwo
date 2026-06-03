
// function declaration 
function addition(x, y) {
    return x + y
}
let q1 = addition(12, 3)
console.log(q1)

// function expression 
let additionB = function (x, y) {
    return x + y
}
let q2 = additionB(12, 3)
console.log(q2)


// arrow function

// let additionC = (x,y)=>{
//     return x + y
// } 
// let q2 = additionB(12,3)
// console.log(q2)

// if only 1 statement

// let additionC = (x,y)=> x + y
// let q2 = additionB(12,3)
// console.log(q2)

// // only if 1 parameter
// let additionC =  x => x + x
// let q2 = additionB(12)
// console.log(q2)


// this keyword


// function declaration 

// function subtraction(x,y){
//     return x + y
// }
// let q1 = subtraction(21,3)
// console.log(q1)

// let subtractionB = function(x,y){
//     return x + y
// }
// let q2 = subtractionB(12,3)
// console.log(q2)

// let subtractionB = (x,y)=>{
//     return x + y
// }
// let q2 = subtractionB(12,3)
// console.log(q2)

// let subtractionB = (x,y)=>x + y
// let q2 = subtractionB(12,3)
// console.log(q2)


// let subtractionC = x =>x + x
// let q2 = subtractionB(12)
// console.log(q2)
// Hosting and this 


// lexical scope
// function additionL() {
//     let a = 10
//     let b = 5
//     console.log(a + b)//15
//     function additionM() {
//         let c = 5
//         let d = 5
//         console.log(a + b + c + d)
//         function additionN() {
//             let g = 6
//             let h = 6
//             console.log(a + b + c + d + g + h)
//         }
//         additionN()
//     }
//     additionM()
// }
// additionL()


// closures 

// function additionJ(){
//     let r = 10
//     let q = 5
//     console.log(r + q) // 10 + 5
//     return r + q
//     console.log("hello")

// }
// let q11 = additionJ()
// console.log(q11)

function additionH(){
    let s = 10
    let t = 5
    return function(){
        console.log(s+t)
    }
}

let qw = additionH()

// let qw = function(){
//         console.log(s+t)
//     }

qw()















