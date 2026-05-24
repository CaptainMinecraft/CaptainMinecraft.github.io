let audio = 0
let HITSS = 0
 
 function Meow() {
   HITSS ++;
   let audio = Math.floor(Math.random() * 10)
   
   if ( audio <= 5 ) {
     let audioPUNCH = new Audio('punch.mp3')
     audioPUNCH.play();
   }
   else if ( audio >= 6 ) {
    let audioOUCH = new Audio('ouch.mp3')
    audioOUCH.play()
    audio = Math.floor(Math.random() * 10)
   }
 }
 let clickeffect = new Audio('clicksoundeffect.m4a')
