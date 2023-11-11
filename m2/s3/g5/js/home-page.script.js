
// -----------------------------------Controllo dati nell'indirizzo-------------------------------------

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
        let containerClone = document.getElementById('containerCard');

        let clone = getClone();
        
        let img = clone.querySelector('.card-img-top');
        img.src = el.imageUrl;
        
        let cardTitle = clone.querySelector('.card-title');
        cardTitle.textContent = el.name;
        
        let cardText = clone.querySelector('.card-text');
        cardText.textContent = el.description;
        
        containerClone.appendChild(clone);
    
})
});

function getClone(){
    let temp = document.getElementsByTagName('template')[0];
    return temp.content.cloneNode(true);
}




