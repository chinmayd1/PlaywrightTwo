
//program 1
//                0     1     2    3
let birthYear = [2000, 2001, 2002, 2003]
// [26,25,24,23]
let ages = []

for (let i = 0; i < birthYear.length; i++) {
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2026 - birthYear[i])
    ages.push(2026 - birthYear[i])
}
console.log(ages)

// map()
// fn - call back function
birthYear = [2000, 2001, 2002, 2003]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2026 - el
})
console.log(q1)

// program 2
let numbers = [11,22,33,44,55]
// [21,32,43,54,65]
let q11 = numbers.map(function(el){
    return el + 10
})
console.log(q11)

// program 3

let marks = [96,98,89,45,66,76]
let above75 = []
// [96,98,89,76]

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i] > 75){
        //console.log(marks[i])
        above75.push(marks[i] )
    }
}
console.log(above75)
marks = [96,98,89,45,66,76]
let q22 = marks.filter(function(el,index,arr){
    return el > 75
})
console.log(q22)

let transactions = [88,22,33,44,-23,44,-45,55,-66]
let deposit =  transactions.filter(function(el,index,arr){
    return el > 0
})
console.log(deposit)
let withdrawl =  transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawl)

// program 3
let numA = [11,22,33]
let total  = 0

for(let i = 0 ; i < numA.length ; i++){
    // console.log(i)
    // consoel.log(numA[i])
    total = total + numA[i]
    //       0    +   11  ----> 11
    //       11   +   22  ----> 33
    //       33   +   33  ----> 66
}
console.log(total)


// reduce()
numA = [11,22,33]
let q23 = numA.reduce(function(acc,el,index,arr){
    return acc + el
},5)
console.log(q23)

