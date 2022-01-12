function comer (){
  boton = document.getElementById("comer")
    boton.onclick = () => {
      hambre ++
      puntosAC --
      emocion ()    
      if (hambre < 0 ) { 
        hambre = 0
        }
      chequearPuntos ()
      checkFinal()
    }
}
function hablar (){
  boton3 = document.getElementById("hablar")
    boton3.onclick = () => {
      felicidad ++
      puntosAC --
      dialogo ()
     pet = document.getElementById ( "pet") 
     pet.onclick = () => {
       emocion
     }
      emocion () 
      if (felicidad < 0 ) { 
        felicidad = 0
        }
        chequearPuntos ()
        checkFinal()
    }
}
function beber (){
  boton2 = document.getElementById("sed")
    boton2.onclick = () => {
      sed ++
      puntosAC --
      emocion ()
      if (sed < 0 ) { 
        sed = 0
      }
        chequearPuntos ()
        checkFinal()
    }
}
function chequearPuntos (){
  if ( puntosAC <= 0 ){
     boton.onclick = () => {}
     boton2.onclick = () => {}
     boton3.onclick = () => {}
     noche ()
  }
  
}
function checkFinal (){
    if (( hambre <= 0 ) || ( felicidad <= 0 ) || ( sed <= 0 )){
      codigodeChat = 999
     
    }
}
