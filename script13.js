// array

let a = 10
console.log(a)
a = 100
console.log(a)

//             0    1   2   3
let numbers = [111,222,333,444]
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])

//Student -type
//Properties - fn , ln , age , weight , height 
//Methods - walk() , talk()
//              0          1       2         3
let names = ["chinmay","sarika","poorva","shraddha"]
console.log(names[0])
let q1 = names.length
console.log(q1)
// length - 1 is always last index - True
console.log(names[names.length-1])


// program 2
//             string    string   number number boolean
let info = ["chinmay","deshpande",34,55,true]
console.log(info)


// program 3

// C R  U   D
// Create
// Read
// Update
// Delete
//               0       1        2        3
let fruits = ["apple","mango","banana","orange"]
// update
console.log(fruits)
fruits[0] = "chikoo"
console.log(fruits)

// read
console.log(fruits[1])
for(let i = 0 ; i < fruits.length  ; i++){ //1 // 2 // 3 // 4
    //console.log(i) // 0 //1 //2 // 3
    console.log(fruits[i])
}
//               0      1       2          3      4
let cities = ["pune","mumbai","indore",'chennia',"goa"]
for(let i = 0  ; i < cities.length ; i++){
    //console.log(i)
    console.log(cities[i])
}