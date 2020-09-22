const menuBar = document.querySelector(".menu-bar");
const menu = document.querySelectorAll(".menu");

const homeSec = document.querySelector('.body-about');
const aboutSec = document.querySelector('.body-about-style');
const jobsSec = document.querySelector('.body-jobs');
const peopleSec = document.querySelector('.body-people');

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
            menu[index].style.borderBottomColor = "transparent";
            menu[index].style.color = "#505050";
        } else {
            menu[index].style.borderBottomColor = "#0073B1";
            menu[index].style.color = "#0073B1";
        }
    })

}

function nodeHandler(idVal) {

    if (idVal === homeBtn.id) {

        peopleSec.style.display = "none";
        homeSec.style.display = "block";
        aboutSec.style.display = "none";
        jobsSec.style.display = "none";

    } else if (idVal === aboutBtn.id) {

        peopleSec.style.display = "none";
        homeSec.style.display = "none";
        aboutSec.style.display = "block";
        jobsSec.style.display = "none";

    } else if (idVal === jobsBtn.id) {

        peopleSec.style.display = "none";
        homeSec.style.display = "none";
        aboutSec.style.display = "none";
        jobsSec.style.display = "block";

    } else if (idVal === peopleBtn.id) {

        peopleSec.style.display = "block";
        homeSec.style.display = "none";
        aboutSec.style.display = "none";
        jobsSec.style.display = "none";

    }

}