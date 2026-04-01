// program 1

// break statement with for loop 

for(let i = 1 ; i <= 5  ; i++){ // 2 //3
    console.log(i) //1 // 2 // 3
    if(i == 3){
        break
    }
}

for(let i = 1 ; i <= 5 ; i++){ //2 //3
    if(i == 3){
        break
    }
    console.log(i) //1 //2
}


// program 3

for(let i = 5 ; i >= 1 ; i--){ // 4 // 3
    console.log(i) // 5 // 4 // 3
    if(i == 3){
        break
    }
}

// program 4
// continue statement with for loop
for(let i = 1; i <= 5 ; i++){ //2 //3 //4 //5 //6
    if(i == 3){
        continue
    }
    console.log(i) //1 //2 //4 // 5
}

for(let i = 20 ; i >= 2 ; i = i-2){
    if(i == 10){
        continue
    }
    console.log(i)
}