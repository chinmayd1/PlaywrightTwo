
// number as parameter and number as a return type

function addA(x,y){
    return x + y
}
let q1 = addA(12,3)
console.log(q1)

// string as a parameter and string as return type 
function greet(name){
    return "hello "+ name
}
let q2 = greet("chinmay")
console.log(q2)

// boolean as parameter and boolean as return type
function canDrive(ag,haveVehicle){
    if(ag >= 18 && haveVehicle){
        return true
    }
    else {
        return false
    }
}
let q3 = canDrive(18,true)
console.log(q3)

// array as parameter and array as return type 


let names = ["chinmay","sarika","ram","sham","satish"]
function addName(addName){
    console.log(addName)
    addName.push("chaitanya")
    return addName
}
let q4 = addName(names)
console.log(q4)

// map as a parameter and map as a return type 

let mapA = new Map([
    [1,"admin"],
    [2,"customer"],
    [3,"manager"]
])

function addRole(mapA){
    mapA.set(4,"supervisiosor")
    return mapA
}
let q5 = addRole(mapA)
console.log(q5)

// set as parameter and set as return type 

let setN = new Set([11,22,33])

function addE(setN){
    setN.add(88)
    return setN
}
let q6 = addE(setN)
console.log(q6)

// object as parameter and object as a return type 

let info = {
    fn:"chinmay",
    ln:"deshpande"
}

function addCity(objA){
    objA.city = "pune"
    return objA
}
let q7 = addCity(info)
console.log(q7)

let x = 10
console.log(x)

// function expressopm
let addAA = function(x,y){
    return x + y
}
let q11 = addAA(12,4) // function call
console.log(q11)

console.log(addAA) // function definition
let q25 = addAA(23,4)
console.log(q25)

let f = 100
let add  = function(x,y){
    return x + y
} 
console.log(add) // function print
let q28 = add(23,4) // function call
console.log(q28)