//1
let myString = "hello,this,is,a,difficult,to,read,sentence";
// console.log(myString)
let myStringLength = myString.length
// console.log(myStringLength)
let removeComma = myString.split(",").join(" ")
// console.log(removeComma)

//2
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
let addTurtle = favoriteAnimals.push("turtle")
let jimMeerkat = favoriteAnimals.splice(1,0,"meerkat")

// console.log("Now favoriteAnimals will give me the original array + Mauro's turtle and Jims meerkat(but this will be placed at position 1")
// console.log(favoriteAnimals)
let animalsLength = favoriteAnimals.length
// console.log("The array has a length of:", animalsLength)
let giraffeOut = favoriteAnimals.splice(animalsLength-2, 1)
// console.log(favoriteAnimals)

for(let i = 0; 0<animalsLength; i++){
    if (favoriteAnimals[i]==="meerkat"){
        favoriteAnimals.splice(i, 1)
        console.log(favoriteAnimals)
    }
}
console.log(favoriteAnimals["meerkat"])

//1
function sumFunc(n1, n2, n3) {
    return n1+n2+n3       
}
//2
function colorCar(color){
    console.log("a "+color+" card")
}
//3
function colorCar(obj){
    console.log(obj)
}
//3
let info = {
    name: "John",
    age: "12"
  }
  
  function myFunc(obj){
    return obj
  }
  console.log(myFunc(info))

//4
function vehicleType (color, num){
    if (num===1){
        return `${color} car`
    } else if (num ===2 ){
        return `${color} motorbike`
    }
}

//5  
console.log(3===3?"yes":"no")  
//6
function vehicle(color, num, age){
   
    if (num===1 && age<=2){
        return `${color} new car`
    } else if(num===2 && age<=2)  {
        return `${color} used motorbike`
    } 
    
    if (num ===2 && age <=2){
        return `${color} new motorbike`
    } else{
        return `${color} used motorbike`
    }
}

//7
let list = ["motorbike", "caravan", "bike"]

//8
list[2] //gives us "bike" 

//9

// function vehicles(color, num, age){
    
//    if (num===3 && age<2){
//        console.log(`${color} new ${list[2]}`)
//    } else if (num===3 && age>2){
//     console.log(`${color} old ${list[2]}`)
//    }  
    
// }
// vehicles("green", 3, 1)

//10
let ads = ``
for(let i = 0; i<list.length; i++){
    ads += `${i===list.length-1?`and ${list[list.length-1]}`: list[i]}s${i===list.length-1 ?`.`:','} ` 
}
console.log(`Amazing Joe's Garage we service ${ads}`)

//11
//the code in number 10 works wether we have 4 elements or 100 elements in the list array

//12
let emptyObj = {}

//13
let teachers = {
    Ildana,Sahin,Alex,Claudio,Saif
}
//14
let outMentors = {
    html: "Ildana",
    javascript: "Sahin",
    css: ["Alex","Claudio","Saif"]
}
//15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
x == y// this will return false becase x and y are referencing to defferent memory address regardless of the double or triple equality 
x === y // this will return false becase x and y are referencing to defferent memory address regardless of the double or triple equality 
z == y // this will return true becase z and y are referencing to the same memory address which is the same value for both variables
z == x // this will return false becase x and y are referencing to defferent memory address regardless of the double or triple equality 

console.log(x==y,x===y,z==y,z==x)//false false true false
//we can also prove it using if else statement

//16
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
// changing o1 will not change o2 or viceversa
//but but changing o2 or o3 will change the other once because object unlike primitives are reference type
// we can show that by console.log the values of o1, o2, o3

//17
let bar = 42;
typeof typeof bar; // if we console this it will give us string because the first typeof will give us number and the second typeof will yield string as number is of course a string.


