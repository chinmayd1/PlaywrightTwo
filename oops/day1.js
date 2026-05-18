// object literals
// let chinmay = {
//     fn:"chinmay",
//     ln:"deshpande",
//     displayName:function(){
//         // this ---> amol
//         console.log(this.fn + this.ln)
//     }
// }

// let amol = {
//     fn:"amol",
//     ln:"rao",
//     displayName:function(){
//         // this ---> amol
//         console.log(this.fn + this.ln)
//     }
// }

// console.log(amol)
// console.log(amol.fn)
// console.log(amol.ln)
// amol.displayName()

// console.log(chinmay)
// console.log(chinmay.fn)
// console.log(chinmay.ln)
// chinmay.displayName()

// class is user defined data type

class Person {
    fn = undefined
    ln = undefined
    displayName(){
        console.log(this.fn + this.ln)
    }
}
let ashu = new Person()
console.log(ashu)
ashu.fn = "ashu"
ashu.ln = "dani"
ashu.displayName()
console.log(ashu)

let chaitanya = new Person()
console.log(chaitanya)
chaitanya.fn = "chaitanya"
chaitanya.ln = 'deshpande'
console.log(chaitanya)

// constructor

class Person2 {
    constructor(firstName,lastName){
        this.fn = firstName
        this.ln  = lastName
    }
    displayName(){
        console.log(this.fn + this.ln)
    }
}
let rahul = new Person2("rahul","singh")
console.log(rahul)
let sarika = new Person2("sarika","pansare")
console.log(sarika)
sarika.displayName()
rahul.displayName()