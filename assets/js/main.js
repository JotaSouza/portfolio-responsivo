/*============= MOSTRA MENU E ESCONDE ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*=========== MOSTRA MENU ===============*/
/* Verifica se existe a constante */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*=========== ESCONDE MENU ===============*/
/* Verifica se existe a constante */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*========================= REMOVE MENU MOBILE ========================= */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
    /*========================= ACORDION SKILLS ========================= */
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__closed'
    }
    if (itemClass === 'skills__content skills__closed') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach(el => {
    el.addEventListener('click', toggleSkills)
})

/*========================= TABELA DE QUALIFICAÇÃO ========================= */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualificacao__ativa')
        })
        target.classList.add('qualificacao__ativa')

        tab.forEach(tab => {
            tab.classList.remove('qualificacao__ativa')
        })
        tab.classList.add('qualificacao__ativa')
    })
})

/*========================= MODAL DE SERVIÇOS ========================= */
const modalViews = document.querySelectorAll('.servicos__modal'),
    modalBtns = document.querySelectorAll('.servicos__button'),
    modalCloses = document.querySelectorAll('.servicos__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach(modalClose => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*========================= PORTFOLIO SWIPER ========================= */
/*import Swiper from 'assets/js/swiper-bundle.esm.js'
import 'assets/css/swiper-bundle.css'*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})

/*========================= DEPOIMENTOS ========================= */
let swiperDepoimentos = new Swiper('.depoimentos__container', {
        loop: true,
        grabCursor: true,
        spaceBetween: 48,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },

        breakpoints: {
            568: {
                slidesPerView: 2
            }
        }
    })
    /*========================= SCROLL SECTIONS LINKS ATIVOS ========================= */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector('.nav__menu a[href*=' + sectionId + ']')
                .classList.add('active-link')
        } else {
            document
                .querySelector('.nav__menu a[href*=' + sectionId + ']')
                .classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*========================= MUDA BACKGROUND HEADER ========================= */
function scrollHeader() {
    const nav = document.getElementById('header')
        // Quando a rolagem é maior que 200 na altura da janela de visualização, adicione a classe scroll-header à tag de cabeçalho
    if (this.scrollY >= 80) nav.classList.add('scroll-header')
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
    /*========================= MOSTRA SCROLL UP ========================= */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
        // Quando a rolagem é superior a 560 de altura da janela de visualização, adicione a classe show-scroll à tag a com a classe scroll-top
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
    /*========================= TEMA DARK ========================= */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Tópico selecionado anteriormente (se o usuário selecionou)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtemos o tema atual da interface validando a classe dark-theme
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// Nós validamos se o usuário escolheu previamente um tópico
if (selectedTheme) {
    // Se a validação for cumprida, perguntamos qual era o problema para saber se ativamos ou desativamos o escuro
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
        darkTheme
    )
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
        iconTheme
    )
}

// Ative / desative o tema manualmente com o botão
themeButton.addEventListener('click', () => {
    // Adicionar ou remover o tema escuro / ícone
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
        // Nós salvamos o tema e o ícone atual que o usuário escolheu
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})