const iniciarseccion = document.getElementsByClassName('container-profile')[0];
const btn1 = document.getElementById('btn1');
const cerrarseccion = document.getElementById('profile-btn');
const regist = document.getElementsByClassName('container')[0];

btn1.onclick = function() {
    iniciarseccion.style.display = 'block';
    regist.style.display='none';
}

cerrarseccion.onclick = function(){
    iniciarseccion.style.display = 'none';
    regist.style.display='block';
}
  

