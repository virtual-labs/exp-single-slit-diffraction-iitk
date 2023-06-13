var a = "First";
var width = 0;
function openNav() {
  document.getElementById("mySidepanel").style.width = "500px";
  document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
function anand() {
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
raysBtn.addEventListener("click", () => {
  // rays.style.transition = "10s";
  // rays.style.translate = 30;
  raysBtn.classList.toggle("btnRotate");
  raysimage.classList.toggle("raysClose");
  raysPin.classList.toggle("raysClose");

  raysCircle.forEach((value) => {
    value.classList.toggle("raysClose");
  });

  lenceRange.disabled = lenceRange.disabled ? false : true;

  // const rangeValueofD = document.getElementById("rangeValueofD");

  if (lenceRange.disabled) {
    rangeValueofD.innerHTML = 0;
    document.getElementById("lenceRange").value = 0;
    raysLence.setAttribute("transform", `matrix(0.055 0 0 0.0515 480 127)`);
    raysimage.setAttribute("transform", `matrix(0.0422 0 0 0.0422 503 66)`);
  }

  lenceRange.addEventListener("input", function () {
    const rangeValueofD = document.getElementById("rangeValueofD");
    var lenceVal = document.getElementById("lenceRange").value;
    rangeValueofD.innerHTML = lenceVal;

    var position = 480 - (+lenceVal / 12) * 26;

    var position1 = 503 - (+lenceVal / 12) * 26.083;

    console.log(position1);
    console.log(+lenceVal / 12);

    // var position =
    raysLence.setAttribute(
      "transform",
      `matrix(0.055 0 0 0.0515 ${position} 127)`
    );
    raysimage.setAttribute(
      "transform",
      `matrix(0.0422 0 0 0.0422 ${position1} 66)`
    );
    getmaximaval();
  });

  rays.style.transform = rotate(`${rotation}deg`);
  rays.style.transformOrigin = "50% 50%";
});

function getmaximaval() {
  a = document.getElementById("noofmaxima").value;
  var D = document.getElementById("rangeValueofD").innerHTML;
  var len = 0;
  len = document.getElementById("lenceRange").value;
  console.log(len + "len");
  console.log(D + "D");
  if (a == "First" && len != 0) {
    width = (6328 * Math.pow(10, -10) * D) / 0.03;
  } else if (a == "Second" && len != 0) {
    width = (6328 * Math.pow(10, -10) * D * 2) / 0.03;
  } else if (a == "Third" && len != 0) {
    width = (6328 * Math.pow(10, -10) * D * 3) / 0.03;
  } else if (a == "Fourth" && len != 0) {
    width = (6328 * Math.pow(10, -10) * D * 4) / 0.03;
  } else if (a == "Fourth" && len != 0) {
    width = (6328 * Math.pow(10, -10) * D * 5) / 0.03;
  }

  width = width.toFixed(4);
  document.getElementById("changevalue").innerHTML = width + " mm";
}

let turn1=0,flag1=0,turn2=0,flag2=0,turn3=0,flag3=0,turn4=0,flag4=0,turn5=0,flag5=0;
function completed(id) {
  var s = id.charAt(id.length - 1);
 
  if (s == 1) {

    for (var i = 1; i <= 7; i++) {
      var ans = document.getElementById(`first${i}`).value;
      if (ans == 0) {
        flag1 = 1;
        break;
      }
    }
    if (flag1== 0 && turn1 == 0) {
      document.getElementById(id).style.backgroundColor = "green";
      turn1 = 1;
    } else if (turn1 == 1) {
      document.getElementById(id).style.backgroundColor = "red";
      turn1 = 0;
    }
  }
else if(s==2){

  for (var i = 1; i <= 7; i++) {
    var ans = document.getElementById(`second${i}`).value;
    if (ans == 0) {
      flag2 = 1;
      break;
    }
  }
  if (flag2 == 0 && turn2 == 0) {
    document.getElementById(id).style.backgroundColor = "green";
    turn2 = 1;
  } else if (turn2 == 1) {
    document.getElementById(id).style.backgroundColor = "red";
    turn2 = 0;
  }
}

else if(s==3){

  for (var i = 1; i <= 7; i++) {
    var ans = document.getElementById(`three${i}`).value;
    if (ans == 0) {
      flag3 = 1;
      break;
    }
  }
  if (flag3 == 0 && turn3 == 0) {
    document.getElementById(id).style.backgroundColor = "green";
    turn3 = 1;
  } else if (turn3 == 1) {
    document.getElementById(id).style.backgroundColor = "red";
    turn3 = 0;
  }
}

else if(s==4){

  for (var i = 1; i <= 7; i++) {
    var ans = document.getElementById(`four${i}`).value;
    if (ans == 0) {
      flag4 = 1;
      break;
    }
  }
  if (flag4 == 0 && turn4== 0) {
    document.getElementById(id).style.backgroundColor = "green";
    turn4= 1;
  } else if (turn4== 1) {
    document.getElementById(id).style.backgroundColor = "red";
    turn4= 0;
  }
}


else if(s==5){

  for (var i = 1; i <= 7; i++) {
    var ans = document.getElementById(`five${i}`).value;
    if (ans == 0) {
      flag5 = 1;
      break;
    }
  }
  if (flag5 == 0 && turn5 == 0) {
    document.getElementById(id).style.backgroundColor = "green";
    turn5 = 1;
  } else if (turn5 == 1) {
    document.getElementById(id).style.backgroundColor = "red";
    turn5 = 0;
  }
}


else if(s==6){
  let turn = 0;
  let flag = 0;
  for (var i = 1; i <= 7; i++) {
    var ans = document.getElementById(`six${i}`).value;
    if (ans == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0 && turn == 0) {
    document.getElementById(id).style.backgroundColor = "green";
    turn = 1;
  } else if (turn == 1) {
    document.getElementById(id).style.backgroundColor = "red";
    turn = 0;
  }
}

else if(s==7){
  let turn = 0;
  let flag = 0;
  for (var i = 1; i <= 7; i++) {
    var ans = document.getElementById(`seven${i}`).value;
    if (ans == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0 && turn == 0) {
    document.getElementById(id).style.backgroundColor = "green";
    turn = 1;
  } else if (turn == 1) {
    document.getElementById(id).style.backgroundColor = "red";
    turn = 0;
  }
}
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
function printTable() {
  var table = document.getElementById("table");
  var win = window.open('', '', 'height=700,width=700');
  win.document.write('<html><head>');
  win.document.write('<title>Table</title>');
  win.document.write('</head>');
  win.document.write('<body>');
  win.document.write(table.outerHTML);
  win.document.write('</body></html>');
  win.print();
}
