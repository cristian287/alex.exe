function comer (){
  boton = document.getElementById("comer")
  $ ("#comer").on ("click" , function () {
      hambre ++
      puntosAC --
      emocion ()    
      if (hambre < 0 ) { 
        hambre = 0
        }
      chequearPuntos ()
      checkFinal()
    })
}
function hablar (){
  $ ("#hablar").on ("click" , function () {
     felicidad ++
      puntosAC --
      dialogo()
        $ ("#cajadeTexto").unbind ("click")
        $ ("#cajadeTexto").on ("click", function () {
            $ ("#cajadeTexto").unbind ("click")
              emocion () 
              if (felicidad < 0 ) { 
               felicidad = 0
              }
              chequearPuntos ()
               checkFinal()
        } ) 
       
  })
}


function beber (){
  boton2 = document.getElementById("sed")
  $ ("#sed").on ("click" , function () {
      sed ++
      puntosAC --
      emocion ()
      if (sed < 0 ) { 
        sed = 0
      }
        chequearPuntos ()
        checkFinal()
    })
}
function chequearPuntos (){
  if ( puntosAC <= 0 ){
    $ ("#comer").unbind("click")
    $ ("#hablar").unbind("click")
    $ ("#sed").unbind("click")
     noche ()
  }
  
}
function checkFinal (){
    if (( hambre <= 0 ) || ( felicidad <= 0 ) || ( sed <= 0 )){
      codigodeChat = 999
     
    }
}
