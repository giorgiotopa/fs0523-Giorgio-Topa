let tabellone = document.getElementById('tabellone');


function createTabella(a,b) {
    for (let i = a; i <= b; i++) {
        let casella = document.createElement('div')
        casella.innerText = i
        casella.classList.add('casella')
        tabellone.append(casella)
    }
}

createTabella(1,76);

