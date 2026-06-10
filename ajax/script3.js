
// function additionA(){
//     console.log("A")
// }
// function additionB(){
//     console.log("B")
// }

// additionA()
// additionB()

// function additionC(){
//     setTimeout(function(){
//         console.log("C")
//     },2000)
// }
// function additionD(){
//     console.log("C")
// }
// additionC()
// additionD()


// program 2


// function getInfo(){

//     setTimeout(function () {
//         console.log("user created")
//     }, 3000)

//     setTimeout(function () {
//         console.log("get id")
//     }, 2000)

//     setTimeout(function () {
//         console.log("getInfo")
//     }, 1000)
// }

// getInfo()



// function getInfo() {

//     setTimeout(function () {
//         console.log("user created")
//         setTimeout(function () {
//             console.log("get id")
//             setTimeout(function () {
//                 console.log("getInfo")
//             }, 1000)
//         }, 2000)

//     }, 3000)

// }

// getInfo()

// promises ----> resolved reject pending


// let pro  = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 5

//     if(a == b){
//         resolve('hello')
//     }
//     else {
//         reject("bye")
//     }
// })

// pro.then(function(str)  {
//     console.log(str)
// },function(str){
//     cosnole.log(str)
// })


// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })


// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always run")
// })


// program 2

let pro4 = new Promise(function(resolve,reject){
    let a = 10
    let b = 10
    if(a == b){
        resolve("a is equal")
    }
    else {
        console.log("a is not equal")
    }
})

// pro4
// .then(function(str){
//     console.log(str)
//     return "bye"
// })
// .then(function(str){
//     console.log(str)
//     return "bye2"
// })
// .then(function(str){
//     console.log("bye")
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always run .....")
// })


function userCreate(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },3000)
    })
}

function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("getId")
        },2000)
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get info")
        },1000)
    })
}


async function getInfo(){
    try {
           let a1 =  await userCreate()
           console.log(a1)
           let a2 = await getId()
           console.log(a2)
           let a3 = await getInfo()
    }   
    catch{
        cosnole.log("error ")
    }
    
}
getInfo()






// userCreate()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(){
//     console.log('error called')   
// })
// .finally(function(){
//     console.log("i will always run")
// })

// promise combinators 

