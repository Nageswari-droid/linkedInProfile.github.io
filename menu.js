const menuBar = document.querySelector(".menu-bar");
const menu = document.querySelectorAll(".menu");
const bodyCenter = document.querySelector('.body-center-section');
const seeAll = document.querySelector('.seee-all-style');

const homeSec = document.querySelector('.body-head-center');
const aboutSec = document.querySelector('.body-about-style');

const homeBtn = document.querySelector('#home-menu');
const aboutBtn = document.querySelector('#about-menu');
const jobsBtn = document.querySelector('#jobs-menu');
const peopleBtn = document.querySelector('#people-menu');

var idVal;

menu.forEach((element, index) => {

    menu[index].addEventListener("click", function(event) {

        idVal = event.target.id;

        borderColorHandler(idVal);
        nodeHandler(idVal);
    })

});

function borderColorHandler(idVal) {

    menu.forEach((ele, index) => {
        if (idVal != menu[index].id) {
            menu[index].style.borderLeftColor = "transparent";
            menu[index].style.color = "#505050";
        } else {
            menu[index].style.borderLeftColor = "#0073B1";
            menu[index].style.color = "#0073B1";
        }
    })

}

function nodeHandler(idVal) {

    while (bodyCenter.hasChildNodes()) {
        var i = 0;
        bodyCenter.childNodes[i].remove();
        i++;
    }

    if (idVal === homeBtn.id) {
        bodyCenter.appendChild(homeSec);
    } else if (idVal === aboutBtn.id) {
        aboutSec.style.display = "block";
        bodyCenter.appendChild(aboutSec);
    } else if (idVal === jobsBtn) {

    } else if (idVal === peopleBtn) {

    }

}

seeAll.addEventListener("click", () => {
    while (bodyCenter.hasChildNodes()) {
        var i = 0;
        bodyCenter.childNodes[i].remove();
        i++;
    }

    borderColorHandler(aboutBtn.id);
    aboutSec.style.display = "block";
    bodyCenter.appendChild(aboutSec);
});