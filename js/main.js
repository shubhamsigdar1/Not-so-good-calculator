let total=0;


document.querySelector("#zero").addEventListener('click',zero)
document.querySelector("#plusone").addEventListener('click',pone)
document.querySelector("#multieight").addEventListener('click',meight)

document.querySelector("#plustwo").addEventListener('click',ptwo)
document.querySelector("#minusfive").addEventListener('click',mfive)
document.querySelector("#minussix").addEventListener('click',msix)

document.querySelector("#plusthree").addEventListener('click',pthree)
document.querySelector("#minusfour").addEventListener('click',mfour)
document.querySelector("#multiseven").addEventListener('click',mseven)

document.querySelector("#divthree").addEventListener('click',dthree)
document.querySelector("#divone").addEventListener('click',done)
document.querySelector("#multinine").addEventListener('click',mnine)

function zero(){
  total=0
  document.querySelector("#placeToPutResult").innerText=total
}
function pone(){
  total=total+1
  document.querySelector("#placeToPutResult").innerText=total
}
function meight(){
  total=total*8
  document.querySelector("#placeToPutResult").innerText=total
}

function ptwo(){
  total=total+2
  document.querySelector("#placeToPutResult").innerText=total
}

function mfive(){
  total=total-5
  document.querySelector("#placeToPutResult").innerText=total
}

function msix(){
  total=total-6
  document.querySelector("#placeToPutResult").innerText=total
}

function pthree(){
  total=total+3
  document.querySelector("#placeToPutResult").innerText=total
}

function mfour(){
  total=total-4
  document.querySelector("#placeToPutResult").innerText=total
}

function mseven(){
  total=total*7
  document.querySelector("#placeToPutResult").innerText=total
}

function dthree(){
  total=total/3
  document.querySelector("#placeToPutResult").innerText=total
}
function done(){
  total=total/1
  document.querySelector("#placeToPutResult").innerText=total
}
function mnine(){
  total=total*9
  document.querySelector("#placeToPutResult").innerText=total
}










