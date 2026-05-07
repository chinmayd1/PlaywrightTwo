
let students = [
     {
        fullName:"chinmay deshpande",
        city:"pune",
        skills:["html","css","js"],
        language:"marathi"
     }
    ,{
        fullName:"sarika pansare",
        city:"pune",
        skills:["html","python"],
        language:"marathi"
     }
    ,{
        fullName:"rahul singh",
        city:"mumbai",
        skills:["css","msbi",'sql'],
        language:"marathi"
     }
    ,{
        fullName:"rohit dani",
        city:"nagpur",
        skills:["css","python","reactjs"],
        language:"marathi"
     }

]
// console.log(students[0]['fullName'])
// console.log(students[0].fullName)

// program 1 - print firstName for all students 

for(let i = 0 ; i < 4 ; i++){
   //console.log(i)
   console.log(students[i]['fullName'])
}

// program 2 - add generative AI skills to all elements

for(let i = 0 ; i < students.length ; i++){
   console.log(students[i]['skills'].push("Generative AI"))
}
console.log(students)

// program 3  - add add generative AI using forEach()
students.forEach(function(el){
   el.skills.push("Generative AI")
})
console.log(students)

// program 4 - print name of students with html skill

// true && true ----> true

for(let i = 0 ; i < students.length ; i++){
   if(students[i].skills.includes("html") && students[i].skills.includes("css")){
      console.log(students[i].fullName)
   }
}

let result = students.filter(function(el){
   return el.skills.includes("html")
})
//[obj2,obj3]
console.log(result)

result.forEach(function(el){
   console.log(el.fullName)
})



