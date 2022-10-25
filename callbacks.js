function grumpus() {
    alert("GAHHH GO AWAY!")
}

//setTimeout(grumpus, 5000); //5000 milisecons === 5 seconds

const btn = document.querySelector('button');
btn.addEventListener('click', grumpus);