
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
 function reset() {
    HITSS = 0
    audio = 0
   Hits.textContent = 0 + (" hits")
 }
 console.dir(document)
 const Hits = document.getElementById("HitsP")
 const image1 = document.getElementById("HitsI")
 image1.addEventListener ("click", function() {
   Hits.textContent = HITSS + (" hits")
 });
 const settings = document.getElementById("menu")
 const settingsList = document.getElementById("menuList")
 menu.addEventListener("click", () => 
 menuList.classList.toggle("hide")
 )