window.addEventListener("scroll", function(){
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 0)
})

function menuShow() {
    // let iconClose = document.querySelector('.icon-close');
    // let iconOpen = document.querySelector('.icon')

    // if (iconClose.classList.contains('open')) {
    //     iconClose.classList.remove('open');
    //     iconOpen.classList.add('.open')
    // } else {
    //     iconClose.classList.add('open');
    //     iconOpen.classList.remove('.open')
    // };

    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    };
};