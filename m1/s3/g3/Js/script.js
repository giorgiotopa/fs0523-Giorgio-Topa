

let buttonsave = document.getElementById('mybutton')

buttonsave.addEventListener('click', function(e) {
    
    e.preventDefault();
    

   let input = document.getElementById('myinput');
   let list = document.getElementById('mylist');

   if (!input.value) return;

   let elementlist = document.createElement('li');
        elementlist.classList.add('listclass');
        elementlist.innerText = input.value;

        list.append(elementlist);
        input.value = '';  
        
        elementlist.addEventListener('click', function() {

            elementlist.classList.add('selectedlist');
            let buttondelete = document.createElement('button');
            buttondelete.innerText = 'Delete';
            elementlist.appendChild(buttondelete);
            
            if (!(buttondelete.value)) {
                
            } else {              
                
                buttondelete.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    elementlist.value=''
                })
                
            }
            
        })
           
})









