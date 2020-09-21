const sticky = 5;
const menuClass = document.querySelector('.body-menu');
const body = document.querySelector('.body-center-section');
const header = document.querySelector('.header-info');
const jobs = document.querySelector('.body-jobs-people-style');

window.onscroll = function() {

    if (window.pageYOffset > 423.23480224609375) {
        menuClass.classList.add('menu-class');
        body.classList.add('body-center-fixed');
        jobs.classList.add('body-center-fixed');
    } else {
        menuClass.classList.remove('menu-class');
        body.classList.remove('body-center-fixed');
        jobs.classList.remove('body-center-fixed');
    }

    if (window.pageYOffset > 398.1913146972656) {
        header.style.display = "block";
    } else {
        header.style.display = "none";
    }
};