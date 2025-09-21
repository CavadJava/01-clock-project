const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

function updateClock() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');

    minute.style.color = m%2==0 ? randomColor()  : randomColor();
    second.style.color =s%2==0 ? randomColor()  : randomColor();
    hour.style.color = h%2==0 ? randomColor()  : randomColor();

    hour.textContent = h;
    minute.textContent = m;
    second.textContent = s;
}

let randomColor = function randomColor() {
    let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];

    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

let updateCLockVar = setInterval(updateClock, 1000);
function callUpdateClock(){
    return updateCLockVar();
}
document.querySelector(".startBtn").addEventListener("click", ()=>{
    updateCLockVar = setInterval(updateClock, 1000);
});
document.querySelector(".stopBtn").addEventListener("click", () => {
    clearInterval(updateCLockVar);
    updateCLockVar = null;
})

document.querySelector(".timerBtn").addEventListener("click", () => {
    let timer = prompt("Enter the time in seconds");
    document.querySelector(".timerBtn").disabled = true;
    clearInterval(updateCLockVar);
    updateCLockVar = null;
    document.querySelector("#timer").textContent = `${timer}`;
        document.querySelector(".timerBtn").textContent = 'Triggered';
    setTimeout(() => {
        document.querySelector("#timer").textContent = 'done';
        document.querySelector(".timerBtn").disabled = false;
        updateCLockVar = setInterval(updateClock, 1000);
    }, timer * 1000);
});