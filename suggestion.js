const suggest = document.querySelector('.suggest-company');

const imgArr = ["/image/next.png", "/image/Picture1.png", "/image/symbol.png"];
const compName = ["Go TestSeries", "gotestseries", "Ridhan Technologies Pvt Ltd"];
const compDesc = ["E-learning", "Capital Markets", "Computer Software"];

for (let i = 0; i < imgArr.length; i++) {
    const newElement = document.createElement('div');
    newElement.className = `comp-style company-${i}`;
    newElement.innerHTML = `
        <div class="comp-style-head">
            
            <div class="comp-display">
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
                <div>
                    + Follow
                </div>
            </div>

        </div>
    `

    suggest.append(newElement);
}