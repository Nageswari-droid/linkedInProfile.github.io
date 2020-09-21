const suggest = document.querySelector('.suggest-company');

const imgArr = ["../desktopView/image/next.png", "../desktopView/image/Picture1.png", "../desktopView/image/symbol.png"];
const compName = ["Go TestSeries", "gotestseries", "Ridhan Technologies"];
const compDesc = ["E-learning", "Capital Markets", "Computer Software"];
const followers = ["43 followers", "2 followers", "254 followers"];

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
                        <div class="follow-count">
                            ${followers[i]}
                        </div>
                    </div>
                </div>
                
                <div class="follow-comp-style">
                    <div class="follow-suggest-style" onclick="followHandler(this)">
                        + Follow
                    </div>
                </div>
            </div>

            <div class="border-bottom-style"></div>
        `

        suggest.append(newElement);

    }
}

const followBtn = document.querySelectorAll('.follow-suggest-style');
const parentFollow = document.querySelectorAll('.follow-comp-style');

function mouseHandler(event) {
    event.lastElementChild.lastElementChild.style.textDecoration = "underline";
}

function mouseLeaveHandler(event) {
    event.lastElementChild.lastElementChild.style.textDecoration = "none";
}

function followHandler(event) {

    console.log(event.parentNode);
    // console.log(parentFollow);
    event.style.display = "none";

    const newFollow = document.createElement('div');
    newFollow.className = "follow-icon-new";
    newFollow.innerHTML = `
        <div class="following">
            <svg width="16" height="16">                                    
                <path style="fill:  rgb(99, 99, 99);" d="M15 3L6.57 13.72A.7.7 0 016 14a.72.72 0 01-.56-.27L1 8.07 2.36 7 6 11.72 13.68 2z"></path>
            </svg>
            <div style="color: rgb(99, 99, 99); font-size: 16px;">Following</div>
        </div>
    `;
    event.parentNode.append(newFollow);
}

compHandler();