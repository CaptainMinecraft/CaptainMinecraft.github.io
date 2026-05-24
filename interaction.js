
function NightMode() {
  document.body.style.background="black"
  document.body.text="white"
}
function LightMode() {
  document.body.style.background="white"
  document.body.text="black"
 }
 const settings = document.getElementById("menu")
 const settingsList = document.getElementById("menuList")
 menu.addEventListener("click", () => 
 menuList.classList.toggle("hide")
 )
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
 function CLICKon() {
  document.getElementById('lightbulb').src="lightson.png"
  let clickeffect = new Audio('clicksoundeffect.m4a') 
  clickeffect.play()
}
function CLICKoff() {
  document.getElementById('lightbulb').src="lightsoff.png"
   let clickeffect = new Audio('clicksoundeffect.m4a')
  clickeffect.play()
}