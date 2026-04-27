
// Objects

// js everthing is object 
//            fn          ln         mob     ag  ro
let info = ["chinmay","deshpande",7709192441,23,45]
console.log(info)

let info2 = {
    // key:value
    // prop:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:45,
    mobileNumber:7709192441

}
console.log(info2)

// program 1
// define
//              0       1          2          3
let cities = ["pune","mumbai","bangalore","kolkata"]
console.log(cities[0])
// update
cities[0] = "nagpur"
console.log(cities)
// add
cities.push("wardha")
cities.unshift('goa')
console.log(cities)
// delete
cities.pop()
cities.shift()




// does object stores the value by index ? - No
let vehicle = {
    color:"blue",
    model:"sedane"
}
//console.log(vehicle[0])
// retrive --- dot notation and bracket notation
console.log(vehicle.color)
console.log(vehicle['model'])
// update ---  dot notation and bracket notation
vehicle['color'] = "red"
vehicle.model = 'SUV'
console.log(vehicle)
// add    ---  dot notation and bracket notation 
vehicle.logo = "circle"
vehicle['company'] = "audi"
console.log(vehicle)
// delete -- dot notation and bracket notation
// {
//     color:"blue",
//     model:"sedane"
// }
// { color: 'red', model: 'SUV', logo: 'circle', company: 'audi' }
delete vehicle.color 
delete vehicle['model']
console.log(vehicle)


// program 2


let info3 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:34
}
// retrive
console.log(info3.firstName)
console.log(info3['lastName'])
// update 
info3.age = 45
info3['lastName'] = "dani"
// add
info3.language = "marathi"
info3.city = "pune"
console.log(info3)
//delete
delete info3.city
delete info3['age']

// program 3

let numbers = [11,22,33,11,22,33]
console.log(numbers)

let info4 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:34,
    age:55
}
console.log(info4)





