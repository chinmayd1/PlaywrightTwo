class Student {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}


let students = 
[
 new Student("a","b"),
 new Student("c","d"),
 new Student("e","f"),
 new Student("g","h"),
 new Student("t","y"),
]

students.forEach(function(el){
    el.displayName()
})

let students1 = {
    first:new Student("a","b"),
    second:new Student("a1","b2"),
    third:new Student("a3","b3"),
    four:new Student("a4","b4"),
    five:new Student("a5","b5")
}










// class Student {
//     firstName= "chinmay"
//     lastName = "deshpande"
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let amol = new Student()