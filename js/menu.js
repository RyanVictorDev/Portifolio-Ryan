window.addEventListener("scroll", function(){
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 0)
})

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    };
};

let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  let currentScroll = document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll para baixo
    header.style.top = "-100px"; // Esconde o cabeçalho movendo para cima
  } else {
    // Scroll para cima
    header.style.top = "0"; // Mostra o cabeçalho movendo para a posição inicial
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});