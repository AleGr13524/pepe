const toggleButton = document.querySelector('.theme');
const bodyTag = document.querySelector("body");

const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuNavbar = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");

hamburgerMenu.addEventListener("click", ()=>{
        menuNavbar.removeAttribute("id","oculto")
        closeMenu.removeAttribute("id", "oculto")
})
closeMenu.addEventListener("click", ()=>{
    menuNavbar.setAttribute("id","oculto")
    closeMenu.setAttribute("id", "oculto")
})

function applyTheme(theme) {
    if (theme === 'dark') {
        bodyTag.classList.add('dark-mode');
        toggleButton.innerHTML = '<i class="fa-regular fa-moon"></i>'; 
    } else {
        bodyTag.classList.remove("dark-mode")
        toggleButton.innerHTML = '<i class="fa-regular fa-sun"></i>'; 
    }
}

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    applyTheme(currentTheme);
} 

toggleButton.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});

/*------- Front-page -------*/
const navigationItem = document.querySelectorAll(".front-page__img-navigation__item");
const navigationItemImg = document.querySelectorAll(".front-page__img-navigation__item img");
const frontPageImg = document.querySelector(".front-page__img-large img");

navigationItem.forEach((element, index)=>{
    element.addEventListener("click", ()=>{
       getAttributeImg(index);
    })
})
function getAttributeImg(index) {
        const imgNavigationSrc = navigationItemImg[index].getAttribute("src");
        frontPageImg.setAttribute("src", `${imgNavigationSrc}`)
        console.log(imgNavigationSrc)
}
