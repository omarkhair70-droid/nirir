const scene = document.querySelector(".scene");
const beings = [...document.querySelectorAll(".being")];

function centerEyes(){
  beings.forEach((being)=>{
    being.style.setProperty("--eye-x","0px");
    being.style.setProperty("--eye-y","0px");
  });
}

scene.addEventListener("pointermove",(event)=>{
  const x=(event.clientX/window.innerWidth-.5)*2;
  const y=(event.clientY/window.innerHeight-.5)*2;

  beings.forEach((being)=>{
    const track=Number(being.dataset.track||".35");
    being.style.setProperty("--eye-x",`${x*track*6}px`);
    being.style.setProperty("--eye-y",`${y*track*3.5}px`);
  });
});

scene.addEventListener("pointerleave",centerEyes);

if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  centerEyes();
}