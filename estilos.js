let estilo1 = document.getElementById('estilo1');
let estilo2 = document.getElementById('estilo2');
let fondo = document.getElementById('fondo')
let estilo3=document.getElementById('estilo3')
let botones=document.getElementsByClassName('Estilos')


estilo1.addEventListener('click', function(event){
    fondo.style.backgroundColor = 'red';
    fondo.style.fontFamily = 'Gloria Hallelujah';
    
})


estilo2.addEventListener('click', function(event){
    fondo.style.backgroundColor = 'blue';
    fondo.style.fontFamily = 'Arial';
})

estilo3.addEventListener('click', function(event ){
    fondo.style.backgroundColor='gray';
    fondo.style.fontFamily = 'Verdana';

})


    


    