
// loops


// methods - keys()

let info1 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34
}
let q1 = Object.keys(info1)
console.log(q1)

// program 2

let info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34
}
let q2 = Object.values(info2)
console.log(q2)

// program 3

let info3 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    city:"pune"
}

let q3 = Object.entries(info3)
console.log(q3)

// program 4
let obj1 = {a:1}
let obj2 = {b:2}
let obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

// let a = 10
// console.log(a)
// a = 1000
// console.log(a)

// const f = 10
// f = 100

const info4 = {
    a:1,
    b:3
}
info4.a = 3
info4.c = 5
//delete info4.a
// info4 = {
//     c:4
// }
console.log(info4)

// Object.freeze()
// Locks the object (cannot update / add / delete object)

// let info5 = {
//     fn:"raj",
//     ln:"dani"
// }
// Object.freeze(info5)
// info5.fn = "raj j"
// info5.age = 44
// delete info5.fn
// console.log(info5)
// Object.seal()
let car = {
    type:"car"
}
Object.seal(car)
car.model = "A4"
delete car.type
car.type ="car r"
console.log(car)

// program 6
let car2 = {
    type:"car",
    model:"Q4"
}
let q22 = Object.hasOwn(car2,"Type")
console.log(q22)
