// change navbar styles on scroll

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// ========== show / hide nav button =====================

// Show nav menu
const menu = document.querySelector(".nav__menu");
const menuOpen = document.querySelector("#open-menu-button");
const menuClose = document.querySelector("#close-menu-button");

menuOpen.addEventListener('click', ()=>{
    menu.style.display="flex ";  
    menuClose.style.display = "inline-block";  
    menuOpen.style.display = "none";  
})

// Close nav menu 
menuClose.addEventListener('click', ()=>{
    menu.style.display="none ";  
    menuOpen.style.display = "inline-block";  
    menuClose.style.display = "none";  
})