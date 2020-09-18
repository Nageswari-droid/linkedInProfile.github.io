const sticky = 10;
const headerClass = document.querySelector('.header');

window.onscroll = function() {
    console.log(window.pageYOffset + " " + sticky);
    if (window.pageYOffset > sticky) {
        headerClass.classList.add('header-nav')
    } else {
        headerClass.classList.remove('hedaer-nav');
    }
};