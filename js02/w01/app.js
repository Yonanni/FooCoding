//1
let myBooks = ['war_and_peace','the_great_gatsby','hamlet','the_odyssey','the_devine_comedy','lolita','crime _and_punishment','the_adventures_of_huckleberry_finn','run','the_trial']
// console.log(myBooks)

//3
const createElement = (element) => {
    let newElement = document.createElement(element)
    return newElement
}

const rootDiv = document.querySelector(".keys")
const unorderedListId = (name) => {
    const ul = createElement("ul")
    for(let i=0; i<name.length; i++){
        let li = createElement("li")
        let newDiv = createElement("div")
        let title = createElement("h3")
        title.innerText=name[i]
        newDiv.append(title)
        li.append(newDiv)
        ul.append(li)
    }
    rootDiv.append(ul)  
}
unorderedListId(myBooks)


//4
let bookInfo = {
    "war_and_peace": {
        title: "War and peace",
        language: "Ryska",
        author: "Leo Tolstoy"
    },
    "the_great_gatsby": {
        title: "The greate gatsby",
        language: "English",
        author: "F. Scott Fitzgerald"
    },
    "hamlet": {
        title: "hamlet",
        language: "English",
        author: "William Shakespeare"
    },
    "the_odyssey": {
        title: "The odyssey",
        language: "English",
        author: "Homer"
    },
    "the_devine_comedy": {
        title: "The devine comedy",
        language: "English",
        author: "Dante Alighieri"
    },
    "lolita": {
        title: "Lolita",
        language: "Ryska",
        author: "Vladimir Nabokov"
    },
    "crime_and_punishment": {
        title: "Crime and punishment",
        language: "Ryska",
        author: "Fyodor Dostoyevsky"
        
    },
    "the_adventures_of_huckleberry_finn": {
        title: "The Adventures of Huckleberry Finn ",
        language: "English",
        author: "Mark Twain"
    },
    "the_trial": {
        title: "The trial",
        language: "English",
        author: "Franz Kafka"
    },
    "run": {
        title: "Run",
        language: "Tigrinya",
        author: "Ghebre-Anenia Welde-Geliom"
    }
}
// 5
const unorderedList = (obj) => {
    const rootDiv = document.querySelector(".root")
    const ul = document.createElement("ul")
    for(let [key, value] of Object.entries(obj)){
        let li = document.createElement("li")
        li.classList.add("book")
        let newDiv = document.createElement("div")
        let h3 = document.createElement("h3")
        h3.innerText= value.title
        let small = document.createElement("small")
        small.innerText= `written by ${value.author} in ${value.language} languages`
        newDiv.append(h3)
        newDiv.append(small)
        li.append(newDiv)
        ul.append(li)
    }
    rootDiv.append(ul)  
}
unorderedList(bookInfo)

//6

//7
const imgObj = {
    'war_and_peace': "https://images-na.ssl-images-amazon.com/images/I/A1aDb5U5myL.jpg",
    'the_great_gatsby': "https://image.bokus.com/images2/9781853260414_200x_the-great-gatsby",
    'hamlet': "https://prod-bb-images.akamaized.net/book-covers/coverimage-9781787244160-bookbeat-2018-05-22.jpg?w=200&format=jpg&quality=85",
    'the_odyssey': "https://kbimages1-a.akamaihd.net/7a8346a9-55e4-4d33-9139-261d1a3c2c4f/353/569/90/False/the-odyssey-barnes-noble-signature-editions.jpg",
    'the_devine_comedy': "https://images-na.ssl-images-amazon.com/images/I/A1I2Kx625BL.jpg",
    'lolita': "https://upload.wikimedia.org/wikipedia/commons/5/57/Lolita_1955.JPG",
    'crime _and_punishment': "https://images-na.ssl-images-amazon.com/images/I/71CcO-jvRUL.jpg",
    'the_adventures_of_huckleberry_finn': "https://d30a6s96kk7rhm.cloudfront.net/original/readings/978/009/957/9780099572978.jpg",
    'run': "https://images-na.ssl-images-amazon.com/images/I/51YauiV83ZS._SX345_BO1,204,203,200_.jpg",
    'the_trial': "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1428901424l/49563.jpg"
}
//7


