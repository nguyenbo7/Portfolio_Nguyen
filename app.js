/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".about__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

/*==================== Accordion Experience ====================*/
const accordion = document.getElementsByClassName('accordion__item');

for (let i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}