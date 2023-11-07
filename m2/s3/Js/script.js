//------------------------------------------- User -----------------------------------

class User {
    constructor (name, surname, age, location){
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.location = location;
}
    confrontaetà = function(x) {
        if (this.age > x.age) {
            console.log(`${this.firstName} ${this.lastName} è più vecchio di ${x.firstName} ${x.lastName}`);
        }else if(this.age == x.age){
            console.log(`${this.firstName} ${this.lastName} ha la stessa età di ${x.firstName} ${x.lastName}`);
        }else if(this.age < x.age){
            console.log(`${this.firstName} ${this.lastName} è più piccolo di ${x.firstName} ${x.lastName}`)
        }else{
            
        }
    }
}

let Giacomo = new User('Giacomo','Sparanise',28,'Nola');
console.log(Giacomo);

let Nicola = new User('Nicola','Esposito',35,'Casalnuovo');
console.log(Nicola);

let Franco = new User ('Franco', 'Apicella', 35, 'Marigliano');


Giacomo.confrontaetà(Nicola);
Nicola.confrontaetà(Giacomo);
Franco.confrontaetà(Nicola);
Giacomo.confrontaetà(Franco);


// -------------------------------- Pets -----------------------------------------------------

class Pet {

    constructor (name, owner, species, breed) {

        this.petName = name;
        this.ownerName = owner;
        this.species = species;
        this.breed = breed;
    }

    sameowner = function (pet) {
        
        if (this.ownerName == pet.ownerName) {
            return true
        }else{
           return false
        }
    }
}




let petForm = document.getElementById('petForm');

petForm.addEventListener('submit', function(e){
    e.preventDefault();

    let petName = document.getElementById('petName').value;
    let ownerName = document.getElementById('ownerName').value;
    let species = document.getElementById('species').value;
    let breed = document.getElementById('breed').value;

    let newPet = new Pet(petName, ownerName, species, breed);

    addpetList(newPet);
    clearList();
})

function addpetList(pet) {
          
        let petList = document.getElementById('petList');
        let list = document.createElement('li');
        list.textContent = `Nome dell'animale: ${pet.petName}, Nome del proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
        petList.appendChild(list); 
    }

function clearList() {
    let petName= document.getElementById('petName');
    petName.value = '';
    let ownerName = document.getElementById('ownerName');
    ownerName.value = '';
    let species = document.getElementById('species');
    species.value = '';
    let breed = document.getElementById('breed');
    breed.value = '';    
}





// let bobby = new Pet ('Bobby','Gim','dog','labrador');
// let fuffy = new Pet ('Fuffy', 'Gim','cat','soriano');
// let bunny= new Pet ('Bunny', 'Clara', 'coniglio', 'nano');



// console.log(bobby);
// console.log(fuffy);
// console.log(bunny);

// console.log(bobby.sameowner(fuffy));
// console.log(fuffy.sameowner(bunny));


