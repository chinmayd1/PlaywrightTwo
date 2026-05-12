// map and set 

// number , boolean , string , array , object , map , set
// inbulit data types

let a = 10
let b= true
let c = "chinmay"
let d = [11,22,33]
let e = {a:1,b:2}

// map()
// set()
let info = {
    1:"admin",
    2:"manager",
    3:"customer",
    4:"supervisor"
}
console.log(info)
// program 2

// map with values

let mapA = new Map([
    [1,"admin"],
    [2,"customer"],
    [3,"manager"],
    [4,"supervisor"]
])
console.log(mapA)

let mapB = new Map([
    [1,"admin"],
    [true,"customer"],
    [[11,22,33],"manager"],
    [{"a":2,"b":3},"supervisor"]
])
console.log(mapB)

// program 2
// Map with values

let mapC = new Map([
    [1,"red"],
    [2,"green"],
    [3,"blue"]
])
console.log(mapC)
// Empty Map

let mapD = new Map()
console.log(mapD)
// set
mapD.set(1,"purple")
mapD.set(2,"blue")
mapD.set(3,"green")
console.log(mapD)

// size
console.log(mapD.size)
let a1 = mapD.get(1)
console.log(a1)

let a2 = mapD.get(2)
console.log(a2)

// update 
mapD.set(1,"yellow")
console.log(mapD)

// "India" ===> IND

// mapD.clear()
// console.log(mapD)

mapC = new Map([
    ["a","red"],
    [2,"green"],
    [3,"blue"]
])

mapC.delete("a")

let q1 = mapC.has("A")
console.log(q1)

console.log(mapC.keys())
console.log(mapC.values())
console.log(mapC.entries())


for(let key of mapC.keys()){
    console.log(key)
}
for(let val of mapC.values()){
    console.log(val)
}
for(let [k,v] of mapC.entries()){
    console.log(k,v)
}


mapC.forEach(function(v,k){
    console.log(v,k)
})
