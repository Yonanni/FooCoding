// //1
console.log("Hello world")
console.log("Hello")
// //2
// console.log('I'm awesome')
console.log(`I'm awesome`); //we can use backticks or
console.log("I'm awesome"); //we can use doublequote in the outer and single inside
// //3

let x;
console.log("will output undifine because it hasnt assigned a value yet") //will output undifine because it hasnt assigned a value yet
x = 5
console.log("will output 5 because now x is assigned to 5") //

//4
let y = "hello"
console.log("this will output 'hello'")
let y = "world"
console.log("this will output world becase of reasigning of y")
console.log(y)
//5
let z=7.25
console.log(z)
let a = Math.floor(z)
console.log(a)
let b = a>z?a:z
console.log(b)
// 6
let names = []
console.log("this will output []")
console.log(names)
let pets = ["cat", "dog", "parrot"]
console.log(pets)
pets.push("baby pig")
console.log(pets)

//7
let myString = "this is a test"
console.log(myString)
let myStringLength = myString.length
console.log(myStringLength)

//8
let firstName = "John"
console.log(firstName)
let price = 200
console.log(price)

let license = true
console.log(license)

let student = ["sara", "doe"]
console.log(student)

if (typeof(firstName)=== typeof(price)){
    console.log("the same type")
} else {
    console.log("fistName is", typeof(firstName), "and price is", typeof(price) )
}

// 9

let x = 7 
console.log("here x = 7")
x = x%3
console.log("but here x = 1 as it is a modulo")

//10
//yes we can store multiple types in one array as follow
let mixedArray = [1, "John", false, {firstName: "Doe"}]

// yes we can but any number over zero is equal to another number over zero
let n = 2/0
let m = 10/0

if(n>m){
  console(n)
} else if (m>n) {
  console.log(m)
} else if (n=m) {
  console.log("equal")
  console.log(n, m)
} else {
  console.log("none")
}

if (n===Infinity){
  console.log(true)
} else {
  console.log(false)
}
