// program 1 incorrect way
// class Student {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// class Teacher {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     salary = 1000
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// program 1
// parent has constructor and child does not have construcor

// parent
class Student {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
// child
class Teacher extends Student{
    salary = 1000
    displaySalary(){
        console.log(this.salary)
    }
}
let amolT = new Teacher("amol","rao")
console.log(amolT.firstName)
console.log(amolT.lastName)
console.log(amolT.salary)
amolT.displayName()
amolT.displaySalary()


// program 2
// single inheritance - one parent and one child both having constructor

class Student2 {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class Teacher2 extends Student2{
    constructor(fn,ln,salary){
        super(fn,ln)
        this.salary = salary
    }
    displaySalary(){
        console.log(this.salary)
    }
}

let amolT2 = new Teacher2("amolt2","rao2",10000)

console.log(amolT2.firstName)
console.log(amolT2.lastName)
console.log(amolT2.salary)
amolT2.displayName()
amolT2.displaySalary()


// program 3
// multi-level 


class GrandFather{
    constuctor(fn,ln){
        this.gname = fn 
        this.glname = ln
    }
    displayGName(){
        console.log(this.gname + this.glname)
    }
}
class Father extends GrandFather {
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname = ffn
    }
    displayFName(){
        console.log(this.fname + this.glname)
    }
}

class Son extends Father {
    constructor(fn,ln,ffn,ssn){
        super(fn,ln,ffn)
        this.sname = ssn
    }
    displaySName(){
        console.log(this.sname + this.glname)
    }

}
let chinmay = new Son("manohar","deshpande","shirish","chinmay")


console.log(chinmay.fname)
console.log(chinmay.sname)
console.log(chinmay.glname)
console.log(chinmay.gname)

chinmay.displayGName()
chinmay.displayFName()
chinmay.displaySName()

















