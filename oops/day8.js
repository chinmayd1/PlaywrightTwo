
// class Calc{
//     // addition(x,y){
//     //     console.log(x+y)
//     // }
//     // addition(x,y,a){
//     //     console.log(x+y+a)
//     // }
//     // addition(x,y,a,b){
//     //     console.log(x+y+b+a)
//     // }

//     addition(x,y,a,b){
//         if(x != undefined && y != undefined && a != undefined && b!= undefined){
//             console.log(x+y+a+b)
//         }
//         else if(x != undefined && y != undefined && a != undefined){
//             console.log(x+y)
//         }
//         else if(x != undefined && y != undefined){
//             console.log(x+y)
//         }
//     }
// }
// // overloading 
// a = new Calc()
// a.addition(23,4)
// a.addition(12,3,4)
// a.addition(12,3,4,5)

//code --> compile (syntax) --> run

// overrding 



// different class , same methodname and same signature and has a relationship
class worldBank {

    loan() {
        console.log("i am loan from WB")
    }
    save() {
        console.log("i am save from WB")
    }

}

class SBI extends worldBank {
    displayCityName() {
        console.log("nagpur")
    }

    loan() {
        console.log("i am loan from SBI ")
        //super.loan()
    }
    save() {
        console.log("i am save from SBI")
        //super.save()
    }   

}
class PNB extends worldBank {
    displayCityName() {
        console.log("nagpur")
    }
}
let nagpursbi = new SBI()
let nagpurpnb = new PNB()


nagpursbi.loan()
nagpursbi.save()
nagpursbi.displayCityName()

// Duck typing 
// function inside a class  --- method


class Human {
    sound(){
        console.log("hi hello")
    }
}
class Dog {
    sound(){
        console.log("Bow Bow")
    }
}
class Cat {
    sound(){
        console.log("Meow Meow")
    }
}
class Duck {
    sound(){
        console.log("quack quack")
    }
}

let a = new Human()
let b = new Dog()
let c = new Cat()
let d = new Duck()

function callSound(obj){
    obj.sound()
}
callSound(a)
callSound(b)
callSound(c)
callSound(d)




