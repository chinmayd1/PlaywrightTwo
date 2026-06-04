// //program 1
// let a = 10
// console.log(a)
// a = 100
// console.log(a)

// const j = 100
// console.log(j)
// //j = 199

// //program 3
// var d = 10
// console.log(d)
// d = 123
// console.log(d)



// program 2
// let and const are blocked scope

{
    let a = 10
    console.log(a)
}

// program 2

let b = 100
{
    let b = 200
    console.log(b) // 200
}
console.log(b) //100

// program 3

let c = 100
{
    let c = 1000
    c = 23
    console.log(c)//23
}
c = 90
console.log(c)// 90

// program 4
let f = 100
{
    f = 9000
    console.log(f)//9000
}
console.log(f)// 9000


let g = 100
console.log(g) // 100
{
    let g = 400
    console.log(g) // 400
    g = 900
    console.log(g)// 900
}
g = 44
console.log(g) //44


// program 5

// const  q1 = 10
// console.log(q1)

// {
//     const q2 = 1000
//     console.log(q2)
// }
// console.log(q2)

// program 6

const h2 = 100
{
    const h2 = 1000
    console.log(h2) // 1000
}
console.log(h2) // 100


// program 7

// const j1 = 1000
// {
//     j1  =99
//     console.log(j1) //
// }
// console.log(j1)

// var are function scoped 
// var j = 100

// function addition(){
//     console.log(j) // 100
// }
// console.log(j)// 100
// addition()
// console.log(j) // 100


// var j = 100

// function addition(){
//     var j = 200
//     console.log(j) // 200
// }
// console.log(j) // 100
// addition()
// console.log(j) // 100

var j = 100
function addition(){
    j = 200
    console.log(j) //200
}
console.log(j) // 100
addition()
console.log(j) // 200

