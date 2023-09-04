let totalContainerInside = document.querySelector('.totalContainerInside')
let transitionButtonRight = document.querySelector(".transitionButtonRight")
let transitionButtonLeft = document.querySelector(".transitionButtonLeft")

let loginButtonLeft = document.querySelector(".loginButtonLeft")
let usernameInputLeft = document.querySelector(".usernameInputLeft")
let passwordInputLeft = document.querySelector(".passwordInputLeft")

let errorWordLeftUsername = document.querySelector(".errorWordLeftUsername")
let errorWordLeftPassword = document.querySelector(".errorWordLeftPassword")

transitionButtonRight.addEventListener("click", function () {
    totalContainerInside.style.transform = "translateX(-100%)"
})

transitionButtonLeft.addEventListener("click", function () {
    totalContainerInside.style.transform = "translateX(0%)"
})

let users = [
    {
        id: 1,
        username: "elchineyvazli",
        password: "elchin123"
    },
    {
        id: 2,
        username: "raminvevo",
        password: "ramin123"
    },
    {
        id: 3,
        username: "anarvevo",
        password: "anar123"
    }
]

let userID = null

loginButtonLeft.addEventListener('click', function () {
    for (let i = 0; i < users.length; i++) {
        if (
            usernameInputLeft.value == users[i].username &&
            passwordInputLeft.value == users[i].password
        ) {
            window.location.replace("http://127.0.0.1:5500/pages/user.html");
            userID = users[i].id
            break;
        } else if (
            usernameInputLeft.value == "" &&
            passwordInputLeft.value == ""
        ) {
            errorWordLeftUsername.innerHTML = "*Empty"
            errorWordLeftPassword.innerHTML = "*Empty"
            errorWordLeftUsername.style.display = "block"
            errorWordLeftPassword.style.display = "block"
        }
        else {
            errorWordLeftUsername.innerHTML = "*Incorrect"
            errorWordLeftPassword.innerHTML = "*Incorrect"
            errorWordLeftUsername.style.display = "block"
            errorWordLeftPassword.style.display = "block"
        }
    }
})
