/* SHOW MENU */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Menu Show */
/* validate if constant exist */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu Hide */
/* validate if constant exist */
if(navClose) {
    navClose.addEventListener('click', () => {
       navMenu.classList.remove('show-menu');
    });
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
    const header = document.getElementById('header');

    if(this.scrollY >= 100) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/* SWIPER DISCOVER */
var swiper = new Swiper(".discover__container", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
   coverflowEffect: {
       rotate: 0,
   }
});

/* SWIPER DISCOVER */
const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('video-icon');

function playPause() {
    if(videoFile.paused) {
        videoFile.play();

        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    } else {
        videoFile.pause();

        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');
    }
}
videoButton.addEventListener('click', playPause);

function finalVideo() {
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}
videoFile.addEventListener('ended', finalVideo);

/* SHOW SCROLL TOP */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-up');

    if(this.scrollY >= 200) {
        scrollTop.classList.add("show-scroll");
    } else {
        scrollTop.classList.remove("show-scroll");
    }
}
window.addEventListener('scroll', scrollTop);

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

/* DARK LIGHT THEME */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(darkTheme) ? 'ri-moon-line' : 'ri-sun-line';

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedTheme === 'ri-moon-line' ? 'add': 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})






