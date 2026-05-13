
// set --> 
// number ---> boolean ---> string ----> object ---> array ---> map ---> set
// it does not allow to store duplicate values 


// Create , Retrive , Update , Delete ,Has ??
// Duplicate , Index ?



let a = [11,22,33,44,55,11] // yes
console.log(a)

let obj  = {

    fn:"chinmay",
    ln:"deshpande",
    age:23,
    fn:"sarika"

}
console.log(obj) // No

let fb = "facebook" // stores the value by index ?
console.log(fb[0])

// map()

let mapA = new Map([
    [1,"admin"],
    [1,"customer"],
    [1,"manager"]
])

console.log(mapA)

let setA = new Set([11,22,33,44,55])
console.log(setA)

// allows duplicate values --- No
let setB = new Set([11,22,33,44,55,11])
console.log(setB)

// does set stores the value by index? - No
let setC = new Set([11,22,33,44,55,11])
console.log(setC)
console.log(setC[0])

let setD  = new Set()
console.log(setD)
setD.add(1)
setD.add(2)
setD.add(3)
setD.add(4)
setD.add(5)
console.log(setD)
console.log(setD.size)


setD.forEach(function(val){
    console.log(val)
})


let setE  = new Set()
setE.add(1)
setE.add(2)

let r1 = setE.has(2)
console.log(r1)

let r2 = setE.has(3)
console.log(2)

console.log(setE)

setE.delete(1)
console.log(setE)
setE.add(11)
setE.add(44)
setE.add(34)
console.log(setE)
//setE.clear()
console.log(setE)

console.log(setE.keys())

// reserved methods
for(keyOne of setE.keys()){
    console.log(keyOne)
}


for(val of setE.values()){
    console.log(val)
}


for([k,v] of setE.entries()){
    console.log([k,v])
}
