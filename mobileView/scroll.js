const sticky = 5;

const gallery = document.querySelector('.body-menu');
const dummy = document.querySelector('.dummmy');

window.onscroll = function() {

    if (window.pageYOffset > 320.7130432128906) {
        gallery.classList.add('body-menu-fixed');
        dummy.style.display = "block";
    } else {
        gallery.classList.remove('body-menu-fixed');
        dummy.style.display = "none";
    }
};