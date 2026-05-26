

class Mother {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayMName(){
        console.log(this.firstName + this.lastName)
    }
}

class Son extends Mother {
    constructor(fn,ln,sn){
        super(fn,ln)
        this.sname = sn
    }
    displaySname(){
        console.log(this.sname + this.lastName)
    }
}

class Daughter extends Mother {
    constructor(fn,ln,dn){
        super(fn,ln)
        this.dname = dn
    }
    displayDname(){
        console.log(this.dname + this.lastName)
    }
}
let chinmay = new Son("kanchan","deshpande","chinmay")
let gauri = new Daughter("kanchan","deshpande","gauri")

console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.sname)
chinmay.displaySname()
chinmay.displayMName()

console.log(gauri.firstName)
console.log(gauri.lastName)
console.log(gauri.dname)
gauri.displayDname()
gauri.displayMName()

// polymorphism 
// many - form

// overloading 
// overriding 
// duck typing
