function abrirMes(id){
document.getElementById('menu').style.display='none';
document.getElementById('fraseFinal').style.display='none';
document.getElementById(id).style.display='block';
}
function volver(){
document.querySelectorAll('.galeria').forEach(e=>e.style.display='none');
document.getElementById('menu').style.display='grid';
document.getElementById('fraseFinal').style.display='block';
}
function respuesta(si){
const msg=document.getElementById('mensaje');
const foto=document.getElementById('fotoFinal');
if(si){msg.textContent='Sabía que dirías que sí 💖';foto.style.display='block'}
else{msg.textContent='Respuesta incorrecta 😢'}
}