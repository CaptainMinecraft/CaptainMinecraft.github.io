
function NightMode() {
  document.body.style.background="black"
  document.body.text="white"
}
function LightMode() {
  document.body.style.background="white"
  document.body.text="black"
 }
let audio = 0
let HITSS = 0
 
 function Meow() {
   HITSS ++;
   audio ++;
   
   if ( audio < 5 ) {
     let audioPUNCH = new Audio('punch.mp3')
     audioPUNCH.play();
   }
   else if ( audio == 5 ) {
    let audioOUCH = new Audio('ouch.mp3')
    audioOUCH.play()
    audio = 0
   }
 }
 console.dir(document)
 const Hits = document.getElementById("HitsP")
 const image1 = document.getElementById("HitsI")
 image1.addEventListener ("click", function() {
   Hits.textContent = HITSS + (" hits")
 });
 function reset() {
   HITSS = 0
   Hits.textContent = 0 + (" hits")
 }
 