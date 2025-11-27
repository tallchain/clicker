const clickThisBtn = document.querySelector(".clickThisBtn");
const pointTotal = document.querySelector(".pointTotal")
let i = 0

clickThisBtn.addEventListener("click", () => {    
    i++;
    pointTotal.textContent = `what the flip ${i}`})