

// push() , pop(),shift(), unshift(),includes(),indexOf(),at()

let names = ["sarika","poorva","ram","sham"]
let q1 = names.pop()
let q2 = names.shift()
let q3 = names.push("ramesh")
let q4 = names.unshift('ninad')
console.log(q1)
console.log(q2)
console.log(q3)
console.log(q4)

names = ["sarika","poorva","ram","sham"]
let q22 = names.includes("Sarika")
let q23 = names.includes("sarika")
console.log(q22)
console.log(q23)
//          0        1       2       3
names = ["sarika","poorva","ram","sham"]

let q11 = names.indexOf("sarika")
let q12 = names.indexOf("Poorva")
console.log(q11)
console.log(q12)

let q13 = names.at(2)
console.log(q13)


// program 1 , program 2 , program 3 , program 4

//                 0    1   2   3
let birthYear = [2000,2001,2002,2003]
let ages = [] // [26,25,24,23]
// [26,25,24,23]

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2026 - birthYear[i])
    let a = 2026 - birthYear[i] // 25
    ages.push(a)
}
console.log(ages)


// program 2
let marks = [88,92,44,55,77,95,97]
let above90  =[] // [92,95,97]
// [92,95,97]
// [1,5,6]

for(let i = 0 ; i < marks.length ; i++){
    console.log(i)
    console.log(marks[i])
    if(marks[i] > 90){
        above90.push(marks[i])
    }
}
console.log(above90)





// map(), filter() , reduce() , forEach(),find(), findIdex(),some(),every()
