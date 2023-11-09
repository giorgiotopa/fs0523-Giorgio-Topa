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
        
    });
}
let arrey_foto_sunset = [];
let array_foto_mountain = [];

trovafoto('sunset', arrey_foto_sunset);
trovafoto('mountain', array_foto_mountain);


console.log(arrey_foto_sunset);



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
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

btn1.addEventListener('click', function() {
    replaceSvg(arrey_foto_sunset);
});

btn2.addEventListener('click', function() {
    replaceSvg(array_foto_mountain);
});



