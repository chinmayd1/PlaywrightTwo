// sync code
// function addA(){
//     console.log("A  executed")
// }

// function addB(){
//     console.log('B executed')
// }
// addB()
// addA()

// program 

// function addC(){
//     setTimeout(function(){
//         console.log("c is executed")
//     },2000)
// }

// function addD(){
//     console.log("d is executed")
// }

// addC()
// addD()

// program 3 

//userCreate ------getId -----getInfo

function getInfo() {
    setTimeout(function () {
        console.log("user created")
    }, 3000)
    setTimeout(function () {
        console.log("get Id")
    }, 2000)
    setTimeout(function () {
        console.log("get info")
    }, 1000)
}
//getInfo()

// async  function ----> sync execution

// call back hell 


function getInfo() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("get Id")
            setTimeout(function () {
                console.log("get info")
            }, 1000)
        }, 2000)
    }, 3000)
}
getInfo()