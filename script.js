const nav = document.querySelector('.nav');
const closeIcon = document.querySelector('.close');
const main = document.querySelector('.main');
const headercontent = document.querySelector('.header--contenedor');
const btnMenu = document.getElementById('menu');

btnMenu.addEventListener('click', (e) =>{
    e.preventDefault();
    nav.classList.toggle('nav--active');
    headercontent.classList.toggle('header--contenedor--active');
    
    if(nav.classList.contains('nav--active')){
        document.querySelector('#menu i').classList.remove('fa-bars');
        document.querySelector('#menu i').classList.add('fa-xmark');
        main.classList.add('blur');
        closeIcon.classList.add('close-active');
    }else{
        document.querySelector('#menu i').classList.remove('fa-xmark');
        document.querySelector('#menu i').classList.add('fa-bars');
        main.classList.remove('blur');
        closeIcon.classList.remove('close-active');

    }
});

// Funcion para remover elementos activos

const removeActiveElements = (selector) => {

    const linksActive = document.querySelectorAll(`.${selector}`);

    if(linksActive.length){
        linksActive.forEach(linksAction => {
            linksAction.classList.remove(selector);
        });
    }
}


const navLinks = document.querySelectorAll('.nav__link');


navLinks.forEach((navLink, index) => {
    navLink.addEventListener('click', (e) => {
        e.preventDefault();
        if(!navLink.classList.contains('nav__link--active')){
            removeActiveElements('nav__link--active');
            navLink.classList.add('nav__link--active');
        }
    });
    navLink.addEventListener('mouseover', (e) => {
        if(!navLink.classList.contains('nav__link--active')){
            removeActiveElements('nav__link--active');
            navLink.classList.add('nav__link--active');
        }
    });

    navLink.addEventListener('mouseout', (e) => {
        removeActiveElements('nav__link--active');
        document.querySelector('.home-link').classList.add('nav__link--active');
    });
});





console.log(btnJoin);
