// while loop 
// 9 pm ist 
// 8.00 am ist

// intilialization
// while(condition){
//     // statament
//     // increment/ decrement
// }

// print 1 to 3
let i1 = 1
while(i1 <= 3){
    console.log(i1) //1 // 2 // 3
    i1 = i1 + 1 // 2 // 3 // 4
}

// print 1 to 5
let i2 = 1
while(i2 <= 5){
    console.log(i2) // 1 // 2 // 3 // 4 // 5
    i2 ++ // 2 // 3 // 4 // 5 // 6
}

// print "hello" 3 times
let i3 = 1
while(i3 <= 3){
    console.log("hello") // "hello" // "hello" // "hello"
    i3 = i3 + 1 // 2 //3 // 4
}

// print 5 to 1
let i4 = 5
while(i4 >= 1){
    console.log(i4) // 5 // 4 // 3 // 2 //1
    i4 = i4 - 1 // 4 // 3 // 2 // 1 // 0
}

// table of 2
let i5 = 1
while(i5 <= 10){
    console.log(i5 * 2) 
    i5 = i5 + 1 
}

let i6 = 2
while(i6 <= 20){
    console.log(i6) //2 // 4 -------- 20
    i6 = i6 + 2 // 4 // 6 ------------22
}

let i7 = 3
while(i7 <= 30){
    console.log(i7)
    i7 = i7 + 3
}

let i8 = 50
while(i8 >= 5){
    console.log(i8) // 50 // 45 ------- 5
    i8 = i8 - 5 // 45 // 40 ---------- 0
}

// break  statement with while loop 

let i9 = 1
while(i9 <= 5){
    console.log(i9) //1 //2 //3
    if(i9 == 3){
        break
    }
    i9 = i9 + 1 // 2 //3
}

let i10 = 1
while(i10 <= 5){
    if(i10 == 3){
        break
    }
    console.log(i10) //1 //2
    i10 ++ //2 //3
}


let i11 = 5
while(i11 >= 1){
    console.log(i11) // 5 // 4 //3
    if(i11 == 3){
        break
    }
    i11 = i11 - 1 // 4 // 3
}

// continue statement with while loop

let q = 1
while(q <= 5){
    if(q == 3){
        q++ // 4
        continue
    }
    console.log(q) //1 //2 // 4 //5
    q = q + 1 //2 // 3 // 5 //5
}












