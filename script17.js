// slice       0        1     2         3         4
let names = ["sarika","ram","satish","chinmay","sarthak"]
//             -5      -4      -3         -2        -1
//names.slice(startIndex,endIndex(notincluded))
let arrOne = names.slice(1)
console.log(arrOne)
console.log(names.slice(1,4))
console.log(names.slice(-3))
console.log(names.slice(-5,4))
console.log(names.slice(1,-1))
console.log(names.slice(-1,-5))


// program 2
//              0        1        2       3        4
let fruits = ["apple","mango","grapes","banana","papaya"]
// fruits.pop()
// fruits.shift()
//console.log(fruits)
//fruits.splice(startIndex,numberOfElement)
// fruits.splice(2,2)
// console.log(fruits)
fruits.splice(1,1)
//console.log(fruits)
fruits.splice(1,1,"chikoo")
console.log(fruits)

// program 3

let info = ["chinmaydeshpande","gmail.com"]
// let q11  =info.join("@")
// console.log(q11)
let q11  =info.join("-")
console.log(q11)

//program 4
let vegetables = ["brinjal","tomato","ladyfinger","cabbage"]
let q12 = vegetables.reverse()
console.log(q12)

vegetables = ["brinjal","tomato","ladyfinger","cabbage"]
vegetables.sort()
console.log(vegetables)

// concat()
let a = [11,22,33]
let b = [44,55,66]
console.log(a.concat(b))

// sat 10 .00 am array revision