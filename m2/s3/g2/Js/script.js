// ------------------------- Esercizio 1 -----------------------------

let form = document.querySelector('form');
let ul = document.createElement('ul');
let li = document.createElement('li');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.querySelector('input[name="name"]').value;
    JSON.stringify(name);
    localStorage.setItem('name', name);
    if (name) {
        li.textContent = name;
        ul.appendChild(li);
        form.prepend(ul);        
    }
    clearInput();
});

form.addEventListener('reset', () => {
    localStorage.removeItem('name');
    ul.innerHTML = '';
});

function clearInput() {
    let input = document.querySelector('input[name="name"]');
    input.value = '';
}

// ----------------------------Esercizio 2 ----------------------------     



let secondi = 0;

function timer() {
    secondi ++;
    sessionStorage.setItem('secondi', secondi);
    document.getElementById('timer').textContent = secondi;
}

let secondi2 = sessionStorage.getItem('secondi');

if (secondi2) {
    secondi = parseInt(secondi2);
}

const timerInterval = setInterval(timer, 1000);