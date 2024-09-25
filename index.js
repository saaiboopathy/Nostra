

const closesignup = document.getElementById("closesignup")
const signupcontainer = document.getElementById("signup-container")

closesignup.addEventListener("click", function () {
    signupcontainer.style.display = "none"
})


//sidenavbar

const sidenavbar = document.getElementById("sidenavbar")
const menuicon = document.getElementById("menu-icon")
const closesidenav = document.getElementById("close-sidenav")

menuicon.addEventListener("click",function(){
    sidenavbar.style.right=0
})

closesidenav.addEventListener("click",function(){
    sidenavbar.style.right="-50%"
})


// SEARCHBOX CODE

const search = document.getElementById("Search")
const collections = document.getElementById("collectionsmenu")
const searchList = collections.getElementsByTagName("div")

search.addEventListener("keyup", function (event) {
    const enteredElement = event.target.value.toUpperCase()

    for (let count = 0; count < searchList.length; count++) {
        if (searchList[count].textContent.toUpperCase().indexOf(enteredElement) < 0) {
            searchList[count].style.display = "none"
        }
        else {
            searchList[count].style.display = "block"
        }
    }
})

//checkboxes

const checkboxes = document.getElementsByName("check")
let checkingcontainer = []

for (count = 0; count < checkboxes.length; count++) {
    checkboxes[count].addEventListener("click", function (event) {
        const checkboxvalue = event.target.value

        if (event.target.checked) {
            checkingcontainer.push(checkboxvalue)
        }
        else {
            const index = checkingcontainer.indexOf(checkboxvalue)
            if (index > -1) {
                checkingcontainer.splice(index, 1)
            }
        }
        filterproducts()
    }


    )
}

function filterproducts() {

    for (j = 0; j < searchList.length; j++) {
        const product = searchList[j]
        let match = true

        if (checkingcontainer.length > 0) {

            for (i = 0; i < checkingcontainer.length; i++) {
                const filteredvalues = checkingcontainer[i].toUpperCase()
                const productText = product.textContent.toUpperCase()

                if (productText.indexOf(filteredvalues) === -1) {
                    match = false
                }
            }
        }

        if (match) {
            product.style.display = "block"
        }
        else {
            product.style.display = "none"
        }
    }
}

