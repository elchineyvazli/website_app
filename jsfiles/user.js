let head = document.querySelector('head')

let movies = [
    {
        id: 1,
        name: "Avatar",
        price: 9,
        img: "../images/movies/movie1.jpg"
    },
    {
        id: 2,
        name: "65",
        price: 10,
        img: "../images/movies/movie2.jpg"
    },
    {
        id: 3,
        name: "King of Kotha",
        price: 11,
        img: "../images/movies/movie3.jpg"
    },
    {
        id: 4,
        name: "Blue Beetle",
        price: 12,
        img: "../images/movies/movie4.jpg"
    },
    {
        id: 5,
        name: "Jawan",
        price: 13,
        img: "../images/movies/movie5.jpg"
    },
    {
        id: 6,
        name: "Us",
        price: 14,
        img: "../images/movies/movie6.png"
    },
    {
        id: 7,
        name: "Marvel",
        price: 15,
        img: "../images/movies/movie7.jpg"
    },
    {
        id: 8,
        name: "Sing",
        price: 16,
        img: "../images/movies/movie8.jpg"
    },
]

let moviesPartInside = document.querySelector('.moviesPartInside')
let borderValue = true

movies.map((card) => (
    moviesPartInside.innerHTML += `<div class="movieCard" style="border:${borderValue ? "solid 1px white" : "solid 1px black"}">
    <div class="topMovieCard" style="background-image:url(${card.img})">
    </div>
    <h1 class="movieName">${card.name}</h1>
    <div class="forPrice">
    <p class="priceOfMovie">${card.price}$</p>
    <button class="payButton">BUY</button>
    </div>
    </div>`
))

let darkButton = document.querySelector('.darkButton')
let lightButton = document.querySelector('.lightButton')
let darkOrLight = document.querySelector('.darkOrLight')
let faSun = document.querySelector('.fa-sun')
let faMoon = document.querySelector('.fa-moon')
let isItDark = true

//! ELEMENTS FOR TOTAL PAGE
let totalContainerRight = document.querySelector('.totalContainerRight')
let totalContainerLeft = document.querySelector('.totalContainerLeft')
let body = document.querySelector('body')
let totalContainer = document.querySelector('.totalContainer')
let movieCards = document.querySelectorAll('.movieCard')
let forPrices = document.querySelectorAll('.forPrice')
let payButtons = document.querySelectorAll('.payButton')
let priceOfMoviesNode = document.querySelectorAll('.priceOfMovie')
let priceOfMovies = Array.prototype.slice.call(priceOfMoviesNode)


lightButton.addEventListener('click', () => {
    darkOrLight.style.backgroundColor = 'white'
    faSun.style.color = 'white'
    faMoon.style.color = 'black'
    lightButton.style.backgroundColor = "#656370"
    lightButton.style.color = "white"
    lightButton.style.zIndex = 1
    darkButton.style.zIndex = 0
    darkButton.style.backgroundColor = "white"
    darkButton.style.color = "black"
    isItDark = false

    //! FOR TOTAL PAGE
    totalContainerRight.style.backgroundColor = "rgb(210,210,210)"
    totalContainerLeft.style.backgroundColor = "rgb(230,230,230)"
    body.style.backgroundColor = "#4169e1"
    totalContainerRight.style.border = "solid 2px #4169e1"
    totalContainerLeft.style.border = "solid 2px #4169e1"
    for (let i = 0; i < movieCards.length; i++) {
        movieCards[i].style.border = 'none'
        movieCards[i].style["boxShadow"] = 'rgba(0,0,0, 0.24) 0px 3px 8px;'
        forPrices[i].style.backgroundColor = 'white'
        payButtons[i].style.color = 'black'
        payButtons[i].style.border = 'solid 1px black'
        priceOfMovies[i].style.color = 'black'
    }
    for (let j = 0; j < movieMenuLists.length; j++) {
        movieMenuLists[j].style.color = "black"
    }

    for (let j = 0; j < movieMenuLists.length; j++) {
        icons[j].style.color = "black"
    }
})
darkButton.addEventListener('click', () => {
    darkOrLight.style.backgroundColor = '#302E3C'
    faSun.style.color = '#656370'
    faMoon.style.color = 'white'
    lightButton.style.backgroundColor = "#302E3C"
    lightButton.style.color = "#656370"
    lightButton.style.zIndex = 0
    darkButton.style.zIndex = 1
    darkButton.style.backgroundColor = "black"
    darkButton.style.color = "white"
    isItDark = true
})

let movieMenuLists = document.querySelectorAll('.movieMenuLiButton')
let movieMenuListsBefore = document.querySelectorAll('.movieMenuLiButton::before')
let icons = document.querySelectorAll('.menuIcon')
let colorArr = ["green", "red", "yellow", "purple", "pink", "blue", "cyan"]


for (let i = 1; i < movieMenuLists.length; i++) {
    movieMenuLists[i].style.color = "rgb(100, 99, 105)"
}
movieMenuLists[0].style.color = "white"
movieMenuLists[0].style.setProperty("--backgroundColor", "green")
icons[0].style.color = "green"


for (let i = 0; i < movieMenuLists.length; i++) {
    movieMenuLists[i].addEventListener('click', function () {
        if (isItDark == true) {
            movieMenuLists[i].style.setProperty("--backgroundColor", "rgb(100, 99, 105)")
            if (movieMenuLists[i].style.color == "rgb(100, 99, 105)" && icons[i].style.color == "rgb(100, 99, 105)") {
                movieMenuLists[i].style.color = "rgb(255,255,255)"
                movieMenuLists[i].style.setProperty("--backgroundColor", colorArr[i])
                icons[i].style.color = colorArr[i]
                for (let j = 0; j < movieMenuLists.length; j++) {
                    if (j != i) {
                        movieMenuLists[j].style.setProperty("--backgroundColor", "transparent")
                        movieMenuLists[j].style.color = "rgb(100, 99, 105)"
                        icons[j].style.color = "rgb(100, 99, 105)"
                    }
                }
            } else {
                movieMenuLists[i].style.color = "rgb(100, 99, 105)"
                icons[i].style.color = "rgb(100, 99, 105)"
                movieMenuLists[i].style.setProperty("--backgroundColor", "#222129")
            }
        }
        //* ----------------------- *\\
        else {
            if (movieMenuLists[i].style.color == "black" && icons[i].style.color == "black") {

                movieMenuLists[i].style.color = "black"
                movieMenuLists[i].style.setProperty("--backgroundColor", colorArr[i])
                icons[i].style.color = colorArr[i]
                for (let j = 0; j < movieMenuLists.length; j++) {
                    if (j != i) {
                        movieMenuLists[j].style.color = "black"
                        icons[j].style.color = "black"
                        movieMenuLists[j].style.setProperty("--backgroundColor", "transparent")
                    }
                }
                // for (let k = 0; k < movieMenuLists.length; k++) {
                //     movieMenuLists[k].style.setProperty("--backgroundColor", "rgb(230,230,230)")
                // }
            } else {

                movieMenuLists[i].style.color = "rgb(100,100,100)"
                icons[i].style.color = "rgb(230,230,230)"
                movieMenuLists[i].style.setProperty("--backgroundColor", "rgb(230,230,230)")
            }
        }
    })
}

let totalContainerRightInside = document.querySelector('.totalContainerRightInside')
let moviesButton = document.querySelector('.moviesButton')
let tvSeriesButton = document.querySelector('.tvSeriesButton')

moviesButton.addEventListener('click', () => {
    moviesButton.style.color = "white"
    tvSeriesButton.style.color = "#808080"
    totalContainerRightInside.style.transform = "translateX(0)"
})

tvSeriesButton.addEventListener('click', () => {
    tvSeriesButton.style.color = "white"
    moviesButton.style.color = "#808080"
    totalContainerRightInside.style.transform = "translateX(-1020px)"
})

let choisesNode = document.querySelectorAll('.choises')
let choises = Array.prototype.slice.call(choisesNode)



let menuChoises = document.querySelector('.menuChoises')

let homeButton = document.querySelector('.homeButton')
let basketButton = document.querySelector('.basketButton')
let popularButton = document.querySelector('.popularButton')
let discoverButton = document.querySelector('.discoverButton')
let favoritesButton = document.querySelector('.favoritesButton')
let categoriesButton = document.querySelector('.categoriesButton')
let settingsButton = document.querySelector('.settingsButton')

let homePart = document.querySelector('.homePart')
let basketPart = document.querySelector('.basketPart')
let popularPart = document.querySelector('.popularPart')
let discoverPart = document.querySelector('.discoverPart')
let favoritesPart = document.querySelector('.favoritesPart')
let categoriesPart = document.querySelector('.categoriesPart')
let settingsPart = document.querySelector('.settingsPart')

for (let i = 0; i < choises.length; i++) {
    choises[i].style.zIndex = 0
    choises[i].style.opacity = 0
}



choises[0].style.zIndex = 1
choises[0].style.opacity = 1

homeButton.addEventListener('click', function () {
    for (let i = 0; i < choises.length; i++) {
        choises[i].style.zIndex = 0
        choises[i].style.opacity = 0
    }
    homePart.style.zIndex = 1
    homePart.style.opacity = 1
})
basketButton.addEventListener('click', function () {
    for (let i = 0; i < choises.length; i++) {
        choises[i].style.zIndex = 0
        choises[i].style.opacity = 0
    }
    basketPart.style.zIndex = 1
    basketPart.style.opacity = 1
})
popularButton.addEventListener('click', function () {
    for (let i = 0; i < choises.length; i++) {
        choises[i].style.zIndex = 0
        choises[i].style.opacity = 0
    }
    popularPart.style.zIndex = 1
    popularPart.style.opacity = 1
})
discoverButton.addEventListener('click', function () {
    for (let i = 0; i < choises.length; i++) {
        choises[i].style.zIndex = 0
        choises[i].style.opacity = 0
    }
    discoverPart.style.zIndex = 1
    discoverPart.style.opacity = 1
})
favoritesButton.addEventListener('click', function () {
    for (let i = 0; i < choises.length; i++) {
        choises[i].style.zIndex = 0
        choises[i].style.opacity = 0
    }
    favoritesPart.style.zIndex = 1
    favoritesPart.style.opacity = 1
})
categoriesButton.addEventListener('click', function () {
    for (let i = 0; i < choises.length; i++) {
        choises[i].style.zIndex = 0
        choises[i].style.opacity = 0
    }
    categoriesPart.style.zIndex = 1
    categoriesPart.style.opacity = 1
})
settingsButton.addEventListener('click', function () {
    for (let i = 0; i < choises.length; i++) {
        choises[i].style.zIndex = 0
        choises[i].style.opacity = 0
    }
    settingsPart.style.zIndex = 1
    settingsPart.style.opacity = 1
})

let loader = document.querySelector('.loader')
window.addEventListener('load', () => {
    loader.style.display = "block"
    loader.style.top = "50%"
    loader.style.left = "50%"
    setTimeout(() => {
        loader.style.display = "none"
    }, 300)
})

let basketTop = document.querySelector('.basketTop')


let choiseArr = []
let a = 0
let priceOfMoviesArr = []
let total = 0
let basketCardArr = []
let itemsPrice = document.querySelector('.itemsPrice')
let prevPriceOfMovies = 0

for (let i = 0; i < payButtons.length; i++) {

    payButtons[i].addEventListener('click', function (e) {
        for (let j = 0; j < choiseArr.length; j++) {

            if (e) {

                let backgroundImage = e.target.parentNode.parentNode.children[0].style.backgroundImage
                console.log(backgroundImage);
                basketTop.innerHTML += `
                <div class="basketCard">
                <div class="basketCardLeft">
                <img src="${movies[i].img}" alt="err"/>
                </div>
                <div class="basketCardRight">
                <h1 class="basketCardName">${e.target.parentNode.parentNode.children[1].innerText}</h1>
                <h1 class="basketCardPrice">${e.target.parentNode.children[0].innerHTML}</h1>
                <button class="removeButton" style="color:white;"><i class="fa-solid fa-trash"></i></button>
                </div>
                </div>`

                // setTimeout(() => {
                // let movieCardsNode = document.querySelectorAll('.movieCard')
                // let movieCards = Array.prototype.slice.call(movieCardsNode)
                // let movieNamesNode = document.querySelectorAll('.movieName')
                // let movieNames = Array.prototype.slice.call(movieNamesNode)
                // let moviePricesNode = document.querySelectorAll('.moviePrice')
                // let moviePrices = Array.prototype.slice.call(moviePricesNode)
                // console.log(moviePrices);
                // movieNames[i].innerHTML = e.target.parentNode.parentNode.children[0].innerText
                // moviePrices[i].innerHTML = `${e.target.parentNode.parentNode.children[2].children[0].price}`
                // basketCardArr.push(basketCards[i])
                // a += 1
                // }, 100)

                e.target.parentNode.parentNode.children[0].style.backgroundImage = `${backgroundImage}`

                priceOfMoviesArr.push(Number(priceOfMovies[i].innerText.slice(0, priceOfMovies[i].innerText.length - 1)))
                if (prevPriceOfMovies != priceOfMovies[i].innerText.slice(0, priceOfMovies[i].innerText.length - 1)) {
                    total = priceOfMoviesArr.reduce((a, b) => a + b)
                }
                itemsPrice.innerText = total
                prevPriceOfMovies = priceOfMovies[i].innerText.slice(0, priceOfMovies[i].innerText.length - 1)
            }
        }
        choiseArr[a] = i
        a += 1
    })
}