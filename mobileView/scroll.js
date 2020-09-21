const sticky = 5;

const gallery = document.querySelector('.body-menu');
const dummy = document.querySelector('.dummmy');

const follow = document.querySelector('#follow-btn-id');
const followIcon = document.querySelector('.head-follow');
const visit = document.querySelector('.visit-btn');
const visitIcon = document.querySelector('.button-icon');
const followCount = document.querySelector('#follow-count');

window.onscroll = function() {

    if (window.pageYOffset > 320.7130432128906) {
        gallery.classList.add('body-menu-fixed');
        dummy.style.display = "block";
    } else {
        gallery.classList.remove('body-menu-fixed');
        dummy.style.display = "none";
    }
};

follow.addEventListener('click', () => {

    let result = +(followCount.textContent.split(' ')[0]);

    followCount.textContent = result + 1 + " followers";

    followIcon.style.display = "block";
    follow.style.display = "none";
    visit.classList.add('visit-visible');
    visit.children[0].style.color = "white";
    visitIcon.classList.add('button-visit-icon');

});