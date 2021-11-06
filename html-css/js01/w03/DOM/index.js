

let button = document.getElementById("button")
let photoDiv = document.querySelector(".photo")
const image = document.createElement("img")
image.src="http://www.mandysam.com/img/random.jpg"

photoDiv.append(image)


button.onclick = (e) => {
    e.preventDefault()
    let fName = document.getElementById("fname").value
let lName = document.getElementById("lname").value
    console.log(fName)
    console.log(lName)
}
button.addEventListener("mouseover", function(e){
    document.querySelector("body").classList("colors")
})
button.onmouseover = () =>{
    document.querySelector("body").classList("colors")

}