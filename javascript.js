const clickThisBtn = document.querySelector(".clickThisBtn");
const pointCurrentTotal = document.querySelector(".pointCurrentTotal")
const pointCumulativeTotal = document.querySelector(".pointCumulativeTotal")
const funnyText = document.querySelector(".funnyText")
const shopColorChangeBtn = document.querySelector(".shopColorChangeBtn")
let i = 0
let p = 0
clickThisBtn.addEventListener("click", () => {    
    i++;
    p++;
    pointCurrentTotal.textContent = `Current Total: ${i}`;
    pointCumulativeTotal.textContent =`Cumulative Total: ${p}`;
    if (i <=15) {funnyText.textContent = "what the flip... how could u have done this to me....."}
    else {funnyText.textContent = "are u happy with yourself...";}})

shopColorChangeBtn.addEventListener("click", () => {if (i >= 10) {i = (i - 10);
    pointCurrentTotal.textContent = `Current Total: ${i}`;}
    clickThisBtn.style.cssText = "color: blue; background: cyan;";
    shopColorChangeBtn.remove()}
)