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

productForm.addEventListener('submit', function(e){
    e.preventDefault();

    let newProduct = new Product(nome.value, description.value, brand.value, imageUrl.value, price.value);

    let list = document.createElement('li');
    list.textContent = `Nome: ${newProduct.name}, Descrizione: ${newProduct.description}, Marca: ${newProduct.brand}, Immagine: ${newProduct.imageUrl}, Prezzo: ${newProduct.price}`;
    productList.appendChild(list);

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
// -----------------------------------input-------------------------------------


fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZjYwNTk0YjFkODAwMThkNTYzMmYiLCJpYXQiOjE2OTk2MDgwNzAsImV4cCI6MTcwMDgxNzY3MH0.GP9gAGgGGwufx2ZuU6DUyZd0GHaMNmR7VREMQK-FQ4I"
}
})
.then(response => response.json())
.then(obj =>{
    console.log(obj);
});


