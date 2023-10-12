let tabellone = document.getElementById('tabellone')

      let tabella = document.createElement('table')
       
          let  numeri = 1;

        for (let i = 0; i < 4; i++) {
           
            let righe = document.createElement('tr');    
            
            for (let j = 0; j < 19; j++){

            if (numeri <= 76){
            let celle = document.createElement('td');
            celle.innerHTML = numeri;
            righe.append(celle);
            numeri ++;
            }
        }
            tabella.append(righe);
        } 

        tabellone.append(tabella);


    let bottone = document.createElement('button');
    bottone.innerText = 'Estrai';
    tabellone.append(bottone);

    bottone.addEventListener('click', function () {

        let estrazione = Math.floor(Math.random() * 76);
         let numerostratto = 0;
         numerostratto.i
        
    })