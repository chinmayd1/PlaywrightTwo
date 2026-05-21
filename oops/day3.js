
// setting the values using set and get keyword

class Person {
    set Fname(fn){
        this.fname = fn
    }
    get Fname(){
        return this.fname
    }
    set Lname(ln){
        this.lname = ln
    }
    get Lname(){
        return this.lname
    }

}
let ram = new Person()
ram.Fname = "ram"
console.log(ram.Fname)
ram.Lname = "rao"
console.log(ram.Lname)