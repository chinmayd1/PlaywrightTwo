
// program 1

// switch case without break statement

let city = "pune"
switch(city){
    case "pune":
        console.log("MH")
    case "indore":
        console.log("MP")
    case "jaipur":
        console.log("RJ")
    case "lucknow":
        console.log("UP")
    default:
        console.log("incorrect city name")
    
}

// program 2
// switch case with break 

let city2 = "Indore"
switch(city2){
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
    case 'lucknow':
        console.log("UP")
        break
    case "indore":
        console.log("MP")
        break
    default:
        console.log("incorrect city name")
}

// program 3
// switch with multiple case 

let city3 = "Indore"
switch(city3){
    case "mumbai":
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    case "bhopal":
    case "indore":
        console.log("MP")
        break
    case "kanpur":
    case "lucknow":
        console.log("UP")
        break
    default:
        console.log("incorrect city name")

}

// program 4

let x1 = 1000
let x2 = 5000
let x3 = 30000
let flag = true


switch(flag){
    case x1 > x2 && x1 > x3:
        console.log("x1 is greater")
        break
    case x2 > x1 && x2 > x3:
        console.log("x2 is greater")
        break
    default:
        console.log("x3 is greater")
}






// if(x1 > x2 && x1 > x3){
//     console.log("x1 is greater")
// }
// else if(x2 > x1 && x2 > x3){
//     console.log("x2 is greater")
// }
// else {
//     console.log('x3 is greater')
// }
















