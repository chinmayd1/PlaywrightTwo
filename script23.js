// program 1
let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    greet:function(){
        console.log("hello")
    }
}

// object ? ---> properties and methods
console.log(info.firstName)
info.greet()

// program 2

let info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    parent:{
        mother:"kanchan",
        father:"shirish"
        // sibling:"gauri"
    },
    skills:["html","css","javascript"] // AI
}

info2.skills.push("AI")
console.log(info2.parent.father)
console.log(info2['parent']['mother'])
info2.parent.mother = "kanchan s"
console.log(info2)
info2.parent.siblings = "gauri"
console.log(info2)

// program 3

// object property or key is always string

let info3 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23
}

console.log(Object.keys(info3))
console.log(Object.values(info3))
console.log(Object.entries(info3))


