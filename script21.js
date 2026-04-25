
let a = 10
console.log(a)

//             0  1  2  3  4
let numbers = [11,22,33,44,55]
console.log(numbers)
console.log(numbers[0])

// program 2
numbers[0] = 111
console.log(numbers)

// program 3
//              0          1        2      3
let names = ["chinmay","shirish","komal","raj"]
console.log(names)


let info = ["chinmay","deshpande",23,45, true]
console.log(info)


// methods and properties 
//              0        1       2
let fruits = ["apple","mango","banana"]
let q1 = fruits.length
console.log(q1)
//length -3 
// lastIndex --> fruits.length -1
console.log(fruits[0])
console.log(fruits[fruits.length-1])

// program 4
// methods 

// Gym
// action - excercise
// return - health

// push()

let vegetables = ["potato","brinjal","cabbage"]
let a1 = vegetables.push("carrot")
console.log(vegetables)
console.log(a1)

// unshift()
let a2 = vegetables.unshift("ladyfinger")
console.log(a2)
console.log(vegetables)

// pop()

let vegTwo = [ 'ladyfinger', 'potato', 'brinjal', 'cabbage', 'carrot' ]
let a3 = vegTwo.pop()
console.log(vegTwo)
console.log(a3)

// shift()
let a4 = vegTwo.shift()
console.log(a4)
console.log(vegTwo)

// push() , unshift(), pop(), shift()


// includes()
//             0        1         2          3        4
let cities = ["pune","mumbai","banglore","kolkata","chennai"]
let a5 = cities.includes("Pune")
console.log(a5)

// indexOf()
//              0        1         2          3        4        5     6      7
let cities2 = ["pune","mumbai","banglore","kolkata","chennai","pune","goa","pune"]

let a6 = cities2.indexOf("pune")
let a7 = cities2.indexOf("pune",2)
let a8 = cities2.lastIndexOf("pune")
let a9 = cities2.indexOf("Pune")

console.log(a6)
console.log(a7)
console.log(a8)
console.log(a9)

// at()
//           0       1         2
cities2 = ["pune","mumbai","bangalore"]
//           -3        -2         -1
console.log(cities2.at(-1))
console.log(cities2.at(1))

// concat()

let n = [11,22,33]
let m = [44,55,66]
console.log(n.concat(m))

// join()

let info2 = ["chinmaydeshpande","gmail.com","new"]

let a10 = info2.join(" ")
console.log(a10)

// slice()
//              0   1   2   3   4   5  6
let numbersB = [111,222,333,444,555,666,777]
//             -7  -6 -5    -4  -3  -2  -1

// numbers.slice(startIndex)
// numbers.slice(startIndex, endIndex(not included))

console.log(numbersB.slice(2))
console.log(numbersB.slice(-4))
console.log(numbersB.slice(1,5))
console.log(numbersB.slice(-7,-1))
console.log(numbersB.slice(-7,5))
console.log(numbersB.slice(1,-2))
console.log(numbersB.slice(-1,-3))

// reverse()

let countries = ["india","srilanka","cuba","iran"]
console.log(countries.reverse())

// sort()
console.log(countries.sort())

//------------------------------------------------------------
// splice()

// fill()

//----------------------------------------->

// map()
// filter()
// reduce()
// forEach()
// find()
// findIndex()
// some()
// every()