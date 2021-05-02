
const canvas = document.getElementById("canvas");

start();

showPicture()
setInterval(main, 100); // 1000ms === 1s




function start() {
    showPicture(); //poner imagenes iniciar variables
    //llamar a main
  }
  
function main() {
     //llamar a player 1
     //llamar a enemigo
     //comprobar
    }


function player1(){
    //habilitar los botones 
    //esperar el click
    //comprobar perdida del enemigo
    //cambiar variables
    
    //pasar turno
}

function enemy(){
    //desavilitar los botones 
    //mecanica de ataque
    //comprobar perdida del player1
    //cambiar variables
    
    //pasar turno
}

function showPicture()
{
    let image = new Image(); 
    image.src = "img/zelda.jpg";
    const SceneDiv = document.querySelector('.scene');
    SceneDiv.appendChild(image);
}


//   document.addEventListener("keydown", moveSnake);


