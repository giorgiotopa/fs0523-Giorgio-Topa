
let contentCard = document.getElementById('contentCard')


fetch('https://striveschool-api.herokuapp.com/books')
   .then(response => response.json())
   .then(res => {
    res.forEach(el => {
        
        let col = document.createElement('div');
        col.classList.add('col-7', 'col-md-5', 'col-lg-4','col-xxl-3');
        contentCard.appendChild(col);

        let card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem';
        col.appendChild(card);

        let img = document.createElement('img');
        img.classList.add('card-img-top','img-fluid');  
        img.src = el.img;
        img.alt = el.title;
        img.style.height = '25rem';
        card.appendChild(img);

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.style.height = '13rem';
        card.appendChild(cardBody);

        let title = document.createElement('h5');
        title.textContent = el.title;
        title.classList.add('card-title');
        cardBody.appendChild(title);

        let price = document.createElement('p');
        price.textContent = el.price + ' €';
        cardBody.appendChild(price);

        let button = document.createElement('a');
        button.classList.add('btn', 'btn-warning');
        button.innerText = 'Scarta'
        cardBody.append(button);
        button.addEventListener('click', () => {
            col.remove();
        });

        let carrello = document.getElementById('carrello');
       for (const libro of carrello.children) {
           let rimuovi = document.createElement('button');
           rimuovi.classList.add('btn', 'btn-danger');
           libro.appendChild(rimuovi)
       }





        let button2 = document.createElement('a');
        button2.classList.add('btn', 'btn-warning');
        button2.innerText = 'Acquista'
        cardBody.append(button2);
        button2.addEventListener('click', () => {
            carrello.appendChild(card)
            cardBody.removeChild(button);
            cardBody.removeChild(button2);
            col.remove();
        });


    });
})