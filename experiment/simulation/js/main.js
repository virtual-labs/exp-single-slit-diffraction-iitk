var a ="First";
var width=0;
function openNav() {
    document.getElementById("mySidepanel").style.width = "500px";
    document.getElementById("mySidepanel").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  function anand(){
    document.getElementById("st54").style.width = "500px";
    document.getElementById("mySidepanel").style.height = "100%";
  }

// --------------------------------- Rays Image -----------------
const raysimage = document.getElementById("raysimage");
const raysPin = document.getElementById("raysPin");
const raysCircle = document.querySelectorAll(".raysCircle");
const raysBtn = document.getElementById("raysBtn");
const rays = document.getElementById("rays");

const raysLence = document.getElementById("raysLence"); 
const lenceRange = document.getElementById("lenceRange");
raysLence.setAttribute("transform", "matrix(0.055 0 0 0.0515 480 127)");
raysimage.setAttribute("transform", `matrix(0.0422 0 0 0.0422 503 66)`);

let rotation = 90;
raysBtn.addEventListener("click",()=>{

 

 
  // rays.style.transition = "10s";
  // rays.style.translate = 30;
  raysBtn.classList.toggle("btnRotate")    
  raysimage.classList.toggle("raysClose");
  raysPin.classList.toggle("raysClose");

  raysCircle.forEach((value)=>{
    value.classList.toggle("raysClose");
  })

lenceRange.disabled = lenceRange.disabled?false:true;

  // const rangeValueofD = document.getElementById("rangeValueofD");
 
  if(lenceRange.disabled){
    rangeValueofD.innerHTML = 0;
     document.getElementById("lenceRange").value=0;
     raysLence.setAttribute("transform", `matrix(0.055 0 0 0.0515 480 127)`);
     raysimage.setAttribute("transform", `matrix(0.0422 0 0 0.0422 503 66)`);
  }

  lenceRange.addEventListener("input", function(){
    const rangeValueofD = document.getElementById("rangeValueofD");
    var lenceVal = document.getElementById("lenceRange").value;
    rangeValueofD.innerHTML = lenceVal;
   
 var position = 480 - (((+lenceVal)/12))*26;

  var position1 = 503 - ((+lenceVal)/12)*26.083;
 
  console.log(position1)
  console.log((+lenceVal)/12)

        // var position = 
    raysLence.setAttribute("transform", `matrix(0.055 0 0 0.0515 ${position} 127)`);
    raysimage.setAttribute("transform", `matrix(0.0422 0 0 0.0422 ${position1} 66)`);
    getmaximaval();

  })


  rays.style.transform = rotate(`${rotation}deg`);
  rays.style.transformOrigin = "50% 50%";

})

function getmaximaval(){
  a = document.getElementById("noofmaxima").value;
  var D = document.getElementById("rangeValueofD").innerHTML;
  var len = 0;
   len = document.getElementById("lenceRange").value;
  console.log(len+"len");
  console.log(D+"D");
  if(a=="First" && len!=0)
  {  
    width = (6328*(Math.pow(10,-10))*D)/0.03;
  }
  else if(a=="Second" && len!=0)
  {  
    width = (6328*(Math.pow(10,-10))*D*2)/0.03;
  }
 else if(a=="Third" && len!=0)
  {  
    width = (6328*(Math.pow(10,-10))*D*3)/0.03;
  }
  else if(a=="Fourth" && len!=0)
  {  
    width = (6328*(Math.pow(10,-10))*D*4)/0.03;
  }
  else if(a=="Fourth" && len!=0)
  {  
    width = (6328*(Math.pow(10,-10))*D*5)/0.03;
  }

  width= width.toFixed(4);
  document.getElementById("changevalue").innerHTML = width+" mm";
}

// var a=document.getElementById("changevalue");

// function slider(id) {
//   if (id === 'lenceRange') {
//       anand = document.getElementById(id).value;
//       console.log("anand"+anand);
//       a.innerHTML = (12.57*10**-10)*(117900)*ammeter1+" "+"mm";
      
//   }

// }
// let moving = 0;
// let rotation = 90;
// function move(){
//   const image=document.querySelector("#raysbtn");
//    if(moving == 0)
//    { image.style.transform = `rotate(${rotation}deg)`;
//      rotation = -90;
//    }
//    else{

//    }
// }










  






