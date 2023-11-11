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

fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjYwNTk0YjFkODAwMThkNTYzMmYiLCJpYXQiOjE2OTk2MDgwNzAsImV4cCI6MTcwMDgxNzY3MH0.GP9gAGgGGwufx2ZuU6DUyZd0GHaMNmR7VREMQK-FQ4I"
}
})
.then(response => response.json())
.then(obj =>{
    
    obj.forEach(el => {
    let list = createProductElement(el);

    productList.appendChild(list);
})
});

// ------------------------------- funzione template-------------------------

function getClone(){
    let temp = document.getElementById('myTemplate');
    return temp.content.cloneNode(true);
}

function createProductElement(el) {
    let list= document.createElement('li')
    list.textContent = `Nome: ${el.name}, Descrizione: ${el.description}, Marca: ${el.brand}, Immagine: ${el.imageUrl}, Prezzo: ${el.price}`;
    list.id = el._id;

    let btnElimina = document.createElement('button');
    btnElimina.classList.add('btn', 'btn-danger','rouunded-1', 'mx-2');
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
    btnModifica.classList.add('btn', 'btn-warning','rouunded-1', 'mx-2');
    btnModifica.textContent = 'Modifica';
    btnModifica.setAttribute('data-id', `${list.id}`);
     
    btnModifica.addEventListener( 'click', function() {

        let clone = getClone();
       
        list.appendChild(clone);

    let btnSave = document.getElementById('saveChanges');
    let dataId = btnModifica.getAttribute('data-id');


    btnSave.addEventListener('click', function () {
        let nomeModal = document.getElementById('nameModal');
        let descriptionModal = document.getElementById('descriptionModal');
        let brandModal = document.getElementById('brandModal');
        let imageUrlModal = document.getElementById('imageUrlModal');
        let priceModal = document.getElementById('priceModal');
       

        let modificaProduct = new Product(
            nomeModal.value,
            descriptionModal.value,
            brandModal.value,
            imageUrlModal.value,
            priceModal.value
        );       
     
        fetch("https://striveschool-api.herokuapp.com/api/product/" + dataId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjYwNTk0YjFkODAwMThkNTYzMmYiLCJpYXQiOjE2OTk2MDgwNzAsImV4cCI6MTcwMDgxNzY3MH0.GP9gAGgGGwufx2ZuU6DUyZd0GHaMNmR7VREMQK-FQ4I",
            },
            body: JSON.stringify(modificaProduct)
        });

        
    });
    });

    list.appendChild(btnModifica);
    list.appendChild(btnElimina);

    return list;
}



