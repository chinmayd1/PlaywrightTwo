
// map() --> array
let numbers = [1,2,3,4,5,6,7,8,9,10]
let q1 = numbers.map(function(el,index,arr){
    return el * 2
})
console.log(q1)

// filter() -- array
let evenOdd = [33,44,66,74,55,66,77]
let q3 = evenOdd.filter(function(el,index,arr){
    return el % 2 == 0
})
console.log(q3)

// reduce => return single value
let nums = [11,22,33]
let q4 = nums.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q4)

// program 4

let cities = ["pune","mumbai","banglore"]
for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
    console.log("welcome "+cities[i])
}

cities.forEach(function(el,index,arr){
    console.log("welcome "+el)
})

//               0  1  2  3  4  5
let numbersB = [66,88,89,55,66,77]
// [88,89,77]
let q44 = numbersB.filter(function(el,index,arr){
    return el >= 75
})
console.log(q44)

let q55 = numbersB.find(function(el,index,arr){
    return el >= 75
})
console.log(q55)

let q66 = numbersB.findIndex(function(el,index,arr){
    return el >= 75
})
console.log(q66)

let newEs = [11,44,55,66,33,44,5]
let q77 = newEs.every(function(el,index,arr){
    return el > 10
})
console.log(q77)


newEs = [11,44,55,66,33,44,5]
let q88  = newEs.some(function(el,index,arr){
    return el > 600
})
console.log(q88)

// map(el,index,arr) --> arr
// filter(el,index,arr) --> arr
// reduce(acc,el,index,arr) --> acc vl
// forEach(el,index,arr) - void
// find(el,index,arr) - single value
// findIndex(el,index,arr) - number
// some(el,index,arr) - boolean
// every(el,index,arr) - boolean