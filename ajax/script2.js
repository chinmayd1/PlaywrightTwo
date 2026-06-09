// function additionA(){
//     console.log("addition A called")
// }

// function additionB(){
//     console.log("addition B called")
// }

// additionA()
// additionB()


// function additionC(){
//     setTimeout(function(){
//         console.log('c is called')
//     },2000)
// }

// function additionD(){
//     console.log("D")
// }
// additionC()
// additionD()

// program 3

// function getInfo(){
//     setTimeout(function(){
//         console.log('user created')
//     },3000)
//     setTimeout(function(){
//         console.log('getid')
//     },2000)

//     setTimeout(function(){
//         console.log('getinfo')
//     },1000)
// }
// getInfo()

// program 4 

//async --- sync
// call back hell

// function getInfo() {
//     setTimeout(function () {
//         console.log('user created')
//         setTimeout(function () {
//             console.log('getid')

//             setTimeout(function () {
//                 console.log('getinfo')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getInfo()

// not reusable
// promise ---- async code ---> sync --- more efficient
// promise ---->  2 month (pending) ----> resolved , reject


// let pro =  new Promise(function(resolve,reject){
//         let a = 10
//         let b = 5
//         if(a == b){
//             resolve("hello")
//         }
//         else {
//             reject("bye")
//         }
// })

// // consuming the promise

// pro
// .then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })



// let pro2 =   new Promise(function(resolve,reject){
//     let name = "Chinmay"
//     if(name.includes("c")){
//         resolve([11,22,33])
//     }
//     else {
//         reject([-11,-12,-13])
//     }

// })

// pro2.then(function(a){
//     console.log(a[0])
// },function(b){
//     console.log(b[2])
// })


// program 3

// let pro3 =   new Promise(function(resolve,reject){
//     let name = "Chinmay"
//     if(name.includes("C")){
//         resolve([11,22,33])
//     }
//     else {
//         reject([-11,-12,-13])
//     }

// })


// pro3
// .then(function(a){
//     console.log(a[0])
// })  
// .catch(function(b){
//     console.log(b[1])
// })

// program 4




let pro4 =   new Promise(function(resolve,reject){
    let name = "Chinmay"
    if(name.includes("c")){
        resolve([11,22,33])
    }
    else {
        reject([-11,-12,-13])
    }

})

pro4
.then(function(a){
    console.log(a[2])
})
.catch(function(b){
    b[0]
})
.finally(function(){
    console.log('i will always execute')
})








