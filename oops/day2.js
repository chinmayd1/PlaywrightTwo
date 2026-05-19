// let amol = {
//     fn:"amol",
//     ln:"rao",
//     displayName:function(){
//         console.log(this.fn +  this.ln)
//     }

// }
// let chinmay = {
//     fn:"chinmay",
//     ln:"deshpande",
//     displayName:function(){
//         console.log(this.fn +  this.ln)
//     }

// }
// console.log(amol)
// console.log(chinmay)

// amol.displayName()
// chinmay.displayName()

// program 2

class Person {

    constructor(){
        console.log("called default called")
    }
    fn = undefined
    ln = undefined
    displayName(){
        console.log(this.fn + this.ln)
    }
}

let amol2 = new Person()
let chinmay2 = new Person()
console.log(amol2)
console.log(chinmay2)
amol2.fn = "amol2"
amol2.ln = "rao2"
console.log(amol2)
amol2.displayName()

// program 3

class Person2 {
    constructor(firstName,lastName){
        this.fn = firstName 
        this.ln = lastName
    }
    displayName(){
        console.log(this.fn + this.ln)
    }
}

let amol3 = new Person2("amol3","rao3")
let amol4 = new Person2("amol4","rao4")
console.log(amol3)
console.log(amol4)
amol3.displayName()
amol4.displayName()

// program 4 
// setting the values using setter and getter method

class Person3 {
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }

    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }
}

let amol5  = new Person3()
console.log(amol5)
amol5.setFirstName("amol5")
amol5.setLastName("rao5")
console.log(amol5)
console.log(amol5.getFirstName())
console.log(amol5.getLastName())

// program 6

let ninad = {
    fn:"chinmay",
    ln:"deshpande"
}

console.log(ninad)

ninad.fn = "ninad"
ninad['fn'] = "dani"
ninad.city = "pune"
console.log(ninad)








