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

trovafoto('sunset', arrey_foto_sunset);


console.log(arrey_foto_sunset);

let btn1 = document.getElementById('btn1');

btn1.addEventListener('click',function(){
    let svg = document.querySelectorAll('svg');
    
    svg.forEach((svg,i )=> {
        if (i > 0 && i - 1 < arrey_foto_sunset.length) {
            const nuovaimg = document.createElement('img');
            nuovaimg.src = arrey_foto_sunset[i].src.tiny;
            svg.parentNode.replaceChild(nuovaimg,svg);
            
        }
    });
});


