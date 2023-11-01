let cards = document.querySelectorAll('.card');


function countcard() {    
    // alert('ci sono ' + cards.length + ' viaggi disponibili');
}

countcard()

function addbadge() {
    let cardwelcome = document.querySelectorAll('#collapse2 .card') ;

    cardwelcome.forEach(element => {
        element.innerHTML += `<span class="badge bg-danger position-absolute end-0 mt-2 me-2">HOT</span>`
    });
}

addbadge();


function removecards() {
    cards.forEach(el =>{
        el.remove()
    })
}

// removecards();
    






