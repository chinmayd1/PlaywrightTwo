
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
// 0  1   2   3   4   5  6   7   8   9
// c  h   a   n   d   r  a   p   u   r
//-10 -9 -8  -7  -6  -5 -4  -3  -2  -1

let str2 = "chandrapur"
// str2.slice(startIndex)
// str2.slice(startIndex,endIndex(not included))
let e1  = str2.slice(2)
console.log(e1)
console.log(str2.slice(-3))
console.log(str2.slice(2,8))
console.log(str2.slice(-9,-1))
console.log(str2.slice(-9,8))
console.log(str2.slice(1,-1))
console.log(str2.slice(-1,-5))

// program 2
// repeat()
let str3 = "hi"
console.log(str3.repeat(3)) // "hihihi"

// program 3
//chinmay---07111993
let username= "chinmay"
let dob = "07111993"
console.log(`${username}${"-".repeat(3)}${dob}`)

// padStart()
let numberA = "5" //##5,
let numberB = "123" // 123
let numberC  = "89" // #89
console.log(numberA.padStart(3,"#"))
console.log(numberB.padStart(3,"#"))
console.log(numberC.padStart(3,"#"))

// padEnd()
let numberD = "5" 
let numberE = "123" 
let numberF  = "89" 
numberD.padEnd(3,"#")
numberE.padEnd(3,"#")
numberF.padEnd(3,"#")

//contact()
let str5 = "hello"
let str6 = "bye"
console.log(str5.concat(str6))
console.log(str5.concat(" ").concat(str6))

let info2 = ["chinmay","deshpande",7709192441]
let w2 = info2.join('@')
console.log(w2)
let w3 = w2.split('@') // ["chinmay","deshpande",7709192441]
console.log(w3)

// Array - 5pm 
