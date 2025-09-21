const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

function updateClock() {
    console.log('Updating clock...')
    const now = new Date();
    console.log(now);
    const h = now.getHours().toString().padStart(2, '0');
    console.log(h);
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');

    minute.style.color = m%2==0 ? 'green'  : 'blue';
    second.style.color =s%2==0 ? 'green'  : 'red';
    hour.style.color = h%2==0 ? 'green'  : 'red';

    hour.textContent = h;
    minute.textContent = m;
    second.textContent = s;
}
let updateCLockVar = setInterval(updateClock, 1000);

document.querySelector(".startBtn").addEventListener("click", ()=>{
    updateCLockVar = setInterval(updateClock, 1000);
});
document.querySelector(".stopBtn").addEventListener("click", () => {
    clearInterval(updateCLockVar);
})