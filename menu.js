const menuBar = document.querySelector(".menu-bar");
const menu = document.querySelectorAll(".menu");
const bodyCenter = document.querySelector('.body-center-section');
const seeAll = document.querySelector('.seee-all-style');

const bodyJobsPeople = document.querySelector('.body-jobs-people-style');
const sideSec = document.querySelector('.body-side-section');

const homeSec = document.querySelector('.body-head-center');
const aboutSec = document.querySelector('.body-about-style');
const jobsSec = document.querySelector('.body-jobs');

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

    // menu[index].addEventListener("mouseover", function(event) {

    //     idVal = event.target.id;

    //     hoverHandler(idVal);

    // })

    // menu[index].addEventListener("mouseleave", function(event) {

    //     idVal = event.target.id;

    //     leaveHandler(idVal);

    // })

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

        bodyJobsPeople.style.display = "none";
        bodyCenter.style.display = "block"
        sideSec.style.display = "flex";
        bodyCenter.appendChild(homeSec);

    } else if (idVal === aboutBtn.id) {

        bodyJobsPeople.style.display = "none";
        bodyCenter.style.display = "block"
        sideSec.style.display = "flex";
        aboutSec.style.display = "block";
        bodyCenter.appendChild(aboutSec);

    } else if (idVal === jobsBtn.id) {

        bodyCenter.style.display = "none"
        sideSec.style.display = "none";
        jobsSec.style.display = "block";
        bodyJobsPeople.style.display = "block";

    } else if (idVal === peopleBtn.id) {

    }

}

seeAll.addEventListener("click", () => {
    while (bodyCenter.hasChildNodes()) {
        var i = 0;
        bodyCenter.childNodes[i].remove();
        i++;
    }

    borderColorHandler(aboutBtn.id);
    bodyJobsPeople.style.display = "none";
    bodyCenter.style.display = "block"
    sideSec.style.display = "flex";
    aboutSec.style.display = "block";
    bodyCenter.appendChild(aboutSec);
});

// function hoverHandler(idVal) {

//     menu.forEach((ele, index) => {
//         console.log(menu[index].style.color);
//         if (menu[index].id == idVal && menu[index].style.color != "rgb(3, 90, 137)") {
//             menu[index].style.color = "#6f6c6c";
//         } else {
//             menu[index].style.color = "#035a89";
//         }

//     })

// }

// function leaveHandler(idVal) {
//     menu.forEach((ele, index) => {

//         if (menu[index].id == idVal && menu[index].style.color != "#035a89") {
//             menu[index].style.color = "#505050";
//         } else if (menu[index].style.color == "#035a89") {
//             menu[index].style.color = "#0073B1";
//         }

//     })
// }