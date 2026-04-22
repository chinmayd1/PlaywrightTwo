
let fn = "hello"

// length property
let q1 = fn.length
console.log(q1)

let firstN = "chinmay"
let q2 = firstN.toUpperCase()
console.log(q2)

firstN = "CHINMAY"
let q3 = firstN.toLowerCase()
console.log(q3)

let city = "pune"

// 0    1    2    3
// p    u    n    e

let q4 = city.indexOf("p")
let q5 = city.indexOf("P")
console.log(q4)
console.log(q5)

let city3 = "chandrapura"
console.log(city3.indexOf("a",4))
console.log(city3.lastIndexOf("a"))


let city4 = "ninad"
let q6 = city4.includes("n")
console.log(q6)

let q7 = city4.includes("nin")
console.log(q7)


// program 2
// 0  1 2  3  4
// h  e l  l  o

let q8 = "hello"
console.log(q8.charAt(2))

// 0  1   2  3  4
// h  e   l  l  o
//-5 -4  -3 -2 -1
let q9 = "hello"
console.log(q9.at(-1))

// startsWith()
let city5 = "nagpur"
let q10 = city5.startsWith("n")
let q11 = city5.startsWith("nag")
console.log(q10)
console.log(q11)


// endsWith()
let city6 = "jaipur"
let q12 = city6.endsWith("pur")
let q13 = city6.endsWith("r")
console.log(q12)
console.log(q13)

// trim()
let city7 = " goa "
console.log(city7.length)
let q14 = city7.trim()
console.log(q14.length)
console.log(q14)

// trimStart()

city7 = " goa"
console.log(city7.length)
let q15 = city7.trimStart()
console.log(q15.length)

// trimEnd()
city7 = " goa "
let q16 = city7.trimEnd()
console.log(q16.length)

// replace()

let info = "i am learning js and js is easy to learn"
let q17 = info.replace("js","python")
console.log(q17)

// replaceAll()
let q18 = info.replaceAll('js',"python")
console.log(q18)

// slice()

// repeat()