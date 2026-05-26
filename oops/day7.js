// // Online Java Compiler
// // Use this editor to write, compile and run your Java code online

// class Main {
//     // same class , same method name , different signature 
//     // overloading
    
    
//     public static void main(String[] args) {
//         System.out.println("Start small. Ship something.");
//         addition(123,4);
//         addition(123,33,44);
//         addition(34,55,66,77);
//     }
    
//     public static void addition(int x , int y){
//          System.out.println(x+y);
//     }
    
//     public static void addition(int x , int y ,int z){
//          System.out.println(x+y+z);
//     }
    
//     public static void addition(int x , int y ,int z ,int a){
//          System.out.println(x+y+z+a);
//     }
    
    
    
// }


class Calculator{

    // addition(a,b){
    //     console.log(a+b)
    // }

    // addition(a,b,c){
    //     console.log(a+b+c)
    // }

    
    // addition(a,b,c,d){
    //     console.log(a+b+c+d)
    // }

    addition(a ,b,c,d){
        
        if(a != undefined && b != undefined && c != undefined && d != undefined){
            console.log(a+b+c+d)
        }
        else if(a != undefined && b != undefined && c != undefined){
            console.log(a+b+c)
        }
        else if(a != undefined && b != undefined){
            console.log(a+b)
        }
    }


}

let cal = new Calculator()
cal.addition(123,4)
cal.addition(123,3,4)
cal.addition(23,44,55,6)