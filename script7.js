// conditional statement 

// one input and multiple outcomes 

// music 
// numT > 0 && numT <= 5   ----> 10 % discount
// numT > 5 && numT <= 10  ----> 20 % discount 
// numT > 10               ----> 30 % discount

let numT = 17
// if(condition){
//     //statements
// }

if(numT > 0 && numT <= 5){
    console.log("10 % discount")
}
if(numT > 5 && numT <= 10){
    console.log("20 % discount")
}
if(numT > 10){
    console.log("30 % discount")
}

// program 2

let numT2 = -17

if(numT2 > 0 && numT2 <= 5){
    console.log("10 % discount")
}
else if(numT2 > 5 && numT2 <= 10){
    console.log("20 % discount")
}
else if(numT2 > 10){
    console.log("30 % discount")
}
else {
    console.log("incorrect input")
}

// program 3

let marks =  50

// if(marks > 90){
//     console.log('grade A')
// }
// if(marks >= 75){
//     console.log("grade B")
// }
// if(marks >= 65){
//     console.log('grade C')
// }

if(marks > 90){
    console.log('grade A')
}
else if(marks >= 75){
    console.log("grade B")
}
else if(marks >= 65){
    console.log('grade C')
}
else {
    console.log("please try again ..")
}

// program 4

let q1 = 8
let q2 = 40

if(q1 > q2){
    console.log("q1 is greater")
}
else {
    console.log("q2 is greater")
}

// tenary operator
// condition ? statement1:statement2
q1 > q2 ? console.log("q1 is greater"):console.log('q2 is greater')

// program 5

let age = 18 
let q3 = age >= 18 ? "can drive":"cannot drive"
console.log(q3)

// program 6

let x1 = 10
let x2 = 5
let x3 = 3


if(x1 > x2 && x1 > x3){
    console.log("x1 is greater")
}
else if(x2 > x1 && x2 > x3){
    console.log("x2 is greater")
}
else {
    console.log("x3 is greater")
}

