
// variables de escritura

let cajadeTexto  = document.getElementById ( "cajadeTexto")
let  sedR = document.getElementById ( "sedR")
let  hambreR = document.getElementById ( "hambreR")
let  felicidadR = document.getElementById ( "felicidadR")
let estadisticasDia = document.getElementById ("hoy")
let puntodeAcion = document.getElementById ("puntos")

// variables del juego en general 
    
function stats (_emociones) {
   let emocionesReal = (Math.round(Math.random()*9)) +1 ;
   return emocionesReal
}

let hambre = (stats("hambre"));
hambreR.textContent = hambre + " / 10";
let sed = (stats("sed")) ;
sedR.textContent = sed + " / 10";
let felicidad = (stats("felicidad"));
felicidadR.textContent = felicidad + " / 10";
let boton = 0;
let textoCharla = " holas "
let puntosAC = 0
puntodeAcion.textContent = puntosAC
let hoy = 0 
estadisticasDia.textContent = hoy

function dia (diahoy){
   diahoy = diahoy + 1 ;
   return diahoy ; 
} 



// variables del hud

let pet = 0

let codigodeChat = 0

if (codigodeChat < -1){
    
} 


function continu (){
   let continuar = document.getElementById ("cajadeTexto")
   continuar.onclick = () => {
      console.log (codigodeChat)
      codigodeChat ++
      game ()
   };
   
}
continu()

// variables de inicio de juego

function gamz  (_juego ) {
   //el juego puede estar trucado por que nuynca tengo suerte y siempre pierdo :( asi que si esta en 0 no es mal codigo es que no tengo suerte 
   let puzle = (Math.round(Math.random()*5)) ;
   return puzle;
}

function PrimerDia (valor){
   cajadeTexto.textContent =  " buenos dias!! ✍(◔◡◔), este es el dia " + hoy + "  mis estadisticas base son:" + "(hambre:" +  hambre + ")"+ "(felicidad:" + felicidad + ")" + "(sed:" + sed + ")" + " en que quieres gastar sus puntos?"
   if (valor){
      console.log (true)
      puntosAC = 1
      hoy ++
      puntodeAcion.textContent = puntosAC
      cajadeTexto.textContent = " tienes " + puntosAC + " de puntos elije un de mis emociones para subirle un punto  (1) felicidad  (2) comida  (3) sed " ;
      comer()
      beber ()
      hablar () 
      emocion ()
   }
}
function noche (){
   console.log (codigodeChat)
   felicidad --
   hambre--
   sed --
   puntosAC = 1
   codigodeChat == 8
   emocion()
   cajadeTexto.textContent = " ya es de noche perdi un punto de cada cosa"
   document.getElementById("cajadeTexto").onclick = () =>{
      codigodeChat ++;
      if((codigodeChat > 10) && (codigodeChat < 999)){
         codigodeChat = 8;
         continu()
      }
      else{
      }
      game ()
   }
}

//actualizar hud
 function emocion (){
   felicidadR.textContent = felicidad + " / 10";
   sedR.textContent = sed + " / 10";
   hambreR.textContent = hambre + " / 10";
   puntodeAcion.textContent = puntosAC
   estadisticasDia.textContent = hoy
 }



 // modo nocturno 

 let modoOscuro = document.getElementById("modo");
chequearModoOscuro(localStorage.getItem("oscuro"))
console.log(localStorage.getItem("oscuro"))
function chequearModoOscuro(modo){
    if (modo == "true"){
        console.log("true")
        document.body.id = ""
    }
    else{
        console.log("false")
        document.body.id = "modoNoche"
    }
}

modoOscuro.onclick = () =>{
    if (localStorage.getItem("oscuro") == "true"){
        localStorage.setItem("oscuro", "false")
        chequearModoOscuro(localStorage.getItem("oscuro"))
    }
    else{
        localStorage.setItem("oscuro", "true")
        chequearModoOscuro(localStorage.getItem("oscuro"))
    }
}


   // final
let puntaje = 0
let puntos = 0
function mathF () {
   puntaje =  sed + hambre + felicidad + hoy
}
function puntajeF (){
   mathF ()
   puntos = getElementById ("puntuacion")
   puntos.textContent = " tu puntuacion es: " + mathF
}