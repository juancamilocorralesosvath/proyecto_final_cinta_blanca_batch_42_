var x = document.getElementById("login");
var y = document.getElementById("register"); 
var z = document.getElementById("btn");
let bienvenido = document.getElementById("bienvenido");
let felicidades = document.getElementById("felicidades");
let header = document.getElementById("header");
let hero = document.getElementById("hero");
let loginbtn = document.getElementById("loginbtn");
let registerbtn = document.getElementById("registerbtn");


function register() { 
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}
function login() { 
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";

}
function loginimageeffect(){ 
  bienvenido.style.display = "block";
  header.style.display = "none";
  hero.style.display = "none";
}
loginbtn.addEventListener("click", loginimageeffect);
function registerimageeffect(){ 
  felicidades.style.display = "block";
  header.style.display = "none";
  hero.style.display = "none";
}
registerbtn.addEventListener("click", registerimageeffect);