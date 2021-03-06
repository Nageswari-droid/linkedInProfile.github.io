const suggest = document.querySelector('.suggest-company');

const imgArr = ["../desktopView/image/next.png", "../desktopView/image/Picture1.png", "../desktopView/image/symbol.png"];
const compName = ["Go TestSeries", "gotestseries", "Ridhan Technologies Pvt Ltd"];
const compDesc = ["E-learning", "Capital Markets", "Computer Software"];

function compHandler() {
    for (let i = 0; i < imgArr.length; i++) {
        const newElement = document.createElement('div');
        newElement.className = `comp-style company-${i}`;
        newElement.innerHTML = `
            <div class="comp-style-head">
                
                <div class="comp-display" onmouseover = "mouseHandler(this)" onmouseleave = "mouseLeaveHandler(this)">
                    <div class="comp-img">
                        <img src="${imgArr[i]}" width="50" height="50">        
                    </div>
    
                    <div class="compa-name-sec">
                        <div class="title-style">
                            ${compName[i]}
                        </div>
                        <div class="desc-style">
                            ${compDesc[i]}
                        </div>
                    </div>
                </div>
    
                <div class="follow-comp-style">
                    <div class="follow-suggest-style">
                        + Follow
                    </div>
                </div>
                <div class="border-bottom-style border-${i}">
                
                </div>
            </div>
        `

        suggest.append(newElement);

    }
}

function mouseHandler(event) {

    const descComp = document.querySelector('.desc-style');
    const compVar = document.querySelector('.comp-display');

    event.lastElementChild.lastElementChild.style.textDecoration = "underline";

}

function mouseLeaveHandler(event) {
    const descComp = document.querySelector('.desc-style');
    const compVar = document.querySelector('.comp-display');

    event.lastElementChild.lastElementChild.style.textDecoration = "none";
}

compHandler();