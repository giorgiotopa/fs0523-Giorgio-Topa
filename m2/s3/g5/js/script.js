// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjYwNTk0YjFkODAwMThkNTYzMmYiLCJpYXQiOjE2OTk2MDgwNzAsImV4cCI6MTcwMDgxNzY3MH0.GP9gAGgGGwufx2ZuU6DUyZd0GHaMNmR7VREMQK-FQ4I"
// }
// })



class Product {

    constructor (a,b,c,d,e) {

        this.name = a;
        this.description = b;
        this.brand = c;
        this.imageUrl = d;
        this.price = e;
    }
}

let nome = document.getElementById('name');
let description = document.getElementById('description');
let brand = document.getElementById('brand');
let imageUrl = document.getElementById('imageUrl');
let price = document.getElementById('price');

function clearList() {
    nome.value = '';
    description.value = '';
    brand.value = '';
    imageUrl.value = '';
    price.value = '';
}

let productForm = document.getElementById('productForm');
let productList = document.getElementById('productList');

productForm.addEventListener('submit', function(e){
    e.preventDefault();

    let newProduct = new Product(nome.value, description.value, brand.value, imageUrl.value, price.value);

    fetch("https://striveschool-api.herokuapp.com/api/product/",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjYwNTk0YjFkODAwMThkNTYzMmYiLCJpYXQiOjE2OTk2MDgwNzAsImV4cCI6MTcwMDgxNzY3MH0.GP9gAGgGGwufx2ZuU6DUyZd0GHaMNmR7VREMQK-FQ4I"
                },
                body:JSON.stringify(newProduct)
            })

    clearList();
});
// -----------------------------------Controllo dati nell'indirizzo-------------------------------------
let id = 0;

fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjYwNTk0YjFkODAwMThkNTYzMmYiLCJpYXQiOjE2OTk2MDgwNzAsImV4cCI6MTcwMDgxNzY3MH0.GP9gAGgGGwufx2ZuU6DUyZd0GHaMNmR7VREMQK-FQ4I"
}
})
.then(response => response.json())
.then(obj =>{
    console.log(obj);

    obj.forEach(el => {
    let list = document.createElement('li');
    list.textContent = `Nome: ${el.name}, Descrizione: ${el.description}, Marca: ${el.brand}, Immagine: ${el.imageUrl}, Prezzo: ${el.price}`;
    list.id = el._id;

    let btnElimina = document.createElement('button');
    btnElimina.textContent = 'Elimina';
    btnElimina.addEventListener('click', function () {
        fetch("https://striveschool-api.herokuapp.com/api/product/" + list.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjYwNTk0YjFkODAwMThkNTYzMmYiLCJpYXQiOjE2OTk2MDgwNzAsImV4cCI6MTcwMDgxNzY3MH0.GP9gAGgGGwufx2ZuU6DUyZd0GHaMNmR7VREMQK-FQ4I"
            }
        })
            .then(res => {
                if (res.status === 200) {
                    list.remove();
                }
            });
    });

    let btnModifica = document.createElement('button');
    btnModifica.textContent = 'Modifica';

    btnModifica.addEventListener('click', function () {
           // Implementa la logica per la modifica dell'oggetto
           let modifiedProduct = prompt("Modifica i dati:", JSON.stringify(el));
            
           if (modifiedProduct) {
               modifiedProduct = JSON.parse(modifiedProduct);

               // Invia una richiesta PUT al server per aggiornare l'oggetto
               fetch("https://striveschool-api.herokuapp.com/api/product/" + list.id, {
                   method: 'PUT',
                   headers: {
                       'Content-Type': 'application/json',
                       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjYwNTk0YjFkODAwMThkNTYzMmYiLCJpYXQiOjE2OTk2MDgwNzAsImV4cCI6MTcwMDgxNzY3MH0.GP9gAGgGGwufx2ZuU6DUyZd0GHaMNmR7VREMQK-FQ4I",
                   },
                   body: JSON.stringify(modifiedProduct)
               })
                   .then(response => response.json())
                   .then(updatedProduct => {
                       // Aggiorna la visualizzazione dell'oggetto modificato nella lista
                       list.textContent = `Nome: ${updatedProduct.name}, Descrizione: ${updatedProduct.description}, Marca: ${updatedProduct.brand}, Immagine: ${updatedProduct.imageUrl}, Prezzo: ${updatedProduct.price}`;
                   })
                   .catch(error => console.error('Errore durante la modifica:', error));
           }
    });

    list.appendChild(btnModifica);
    list.appendChild(btnElimina);
    productList.appendChild(list);
    });
});


// ------------------------------------ Funzione Modifica -----------------------------



