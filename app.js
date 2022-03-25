const toggleBtn = document.querySelector(".toggle-btn")
const showNavbar = document.getElementsByClassName("navbar-wrapper")[0]
const navbarLi = document.getElementsByClassName("navbar-links")[0]


toggleBtn.addEventListener("click", function(){
    showNavbar.classList.toggle("show-navbar")
    navbarLi.classList.toggle("show-navbar")    
})


