const clock = document.querySelector("#clock span");

function getClock() {
    const date = new Date();
    clock.innerText = `${date
        .getHours()
        .toString()
        .padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
}

setInterval(getClock, 1000);
