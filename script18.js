// [array , str , object]

let firstName = 'chinmay'
console.log(typeof firstName)

let lastName = "deshpande"
console.log(typeof lastName)

let middleName = `shirish`
console.log(typeof middleName)

// program 2
// does string stores the value by index ?
let city3 = "pune"
console.log(city3)
// 0    1    2   3
// p    u    n   e
console.log(city3[0])
city3[0] = "c"
console.log(city3)

// program 4
// string 
let fn = "chinmay"
let ln = "deshpande"
// my firstname is "chinmay" and my lastname is deshpande
console.log("my firstName is "+fn+ "and my lastname is "+ln)
// string interpolation
console.log(`my firstName is ${fn} and my lastName is ${ln}`)
// string interpolation solves expression but output is always string
console.log(`${2+2}`) // 4 , '4'

// program 5

// number + number  ---->  number
// numbers + string ---->  string
// string  + number ---->  string 
// string  + string ---->  string

let a = 10
let b = 20
let c = "hello"
console.log(a + c+ b)

console.log(a+b+c)
// number + number + string
     //  30 + "hello"
        // "30hell0"

console.log(c+b+a)
// string + number + number
    //"hello" + 20 + 10
        //"hello20"+10
         // "hello2010"


// program 5
let city4 = "nagpur"

// 0    1    2   3    4   5
// n    a    g   p    u    r

console.log(city4.length)
// index always start from 0

console.log(city4.length - 1) // 5
//city4.length - 1 is always last index

// program 6
let city5 = "mumbai"
console.log(city5.length)
console.log(city5[0])
console.log(city5[5])






