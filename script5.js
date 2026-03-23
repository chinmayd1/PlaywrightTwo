// logical operator

// And - && 

//  true    &&    true     ------> true
//  false   &&    true     ------> false
//  true    &&    false    ------> false
//  false   &&    false    ------> false

console.log(2 == 2 && 3 == 3)
console.log(3 == 1 && 2 == 2)
console.log(5 == 5 && 4 == 3)
console.log(4 != 4 && 3 != 3)
console.log(3 === 3 && 3 != '3')
console.log(3 === 3 && 3 !== '3')

// Or - ||

// true   ||     true      ----> true
// false  ||     true      ----> true
// true   ||     false     ----> true
// false  ||     false     ----> false

console.log(3 == 3 || 2 == 2)
console.log(3 !== 3 || 2 == '2')
console.log(3 == 3 || 2 === '2')
console.log(2 != 2 || 3 != 3)


// Not - !

// ! true  --> false
// ! false --> true

console.log(!(2 == 2))
console.log(!(2 == 1))