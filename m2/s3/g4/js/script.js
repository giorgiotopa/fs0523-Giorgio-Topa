// COIXQMfja6rDcIO2Ip1aMjkdhCsIC4OksGO6fXoPcRKoZZ4skDE0ZSLw Apy Key




function trovafoto(ricerca,array) {    
    
    fetch(`https://api.pexels.com/v1/search?query=${ricerca}`,{
        
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "COIXQMfja6rDcIO2Ip1aMjkdhCsIC4OksGO6fXoPcRKoZZ4skDE0ZSLw"
        }
    })
    .then(response => response.json())
    .then(obj =>{
        
        obj.photos.forEach(element => {
            let img = document.createElement('img');
            img= element;
            array.push(img);
        });   
        
        function replaceSvg(array){
            let svg = document.querySelectorAll('svg');
            
            svg.forEach((svg,i )=> {
                if (i > 0 && i - 1 < array.length) {
                    const nuovaimg = document.createElement('img');
                    nuovaimg.src = array[i].src.tiny;
                    svg.parentNode.replaceChild(nuovaimg,svg);            
                }
            });
        }
        
        replaceSvg(array_foto_dog);
    });
}

let array_foto_sunset = [];
let array_foto_mountain = [];
let array_foto_dog = [];
trovafoto('sunset', array_foto_sunset);
trovafoto('mountain', array_foto_mountain);
trovafoto('dog', array_foto_dog);



console.log(array_foto_sunset);

function replaceImg(array){
    let img = document.querySelectorAll('img');
    
    img.forEach((img,i )=> {
        if (i < array.length) {
            const nuovaimg = document.createElement('img');
            nuovaimg.src = array[i].src.tiny;
            img.parentNode.replaceChild(nuovaimg,img);            
        }
    });
}

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

btn1.addEventListener('click', function() {
    replaceImg(array_foto_sunset);
});

btn2.addEventListener('click', function() {
    replaceImg(array_foto_mountain);
});



