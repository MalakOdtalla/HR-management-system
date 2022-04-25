"use strict";


//Generate employee id number- note: not complete
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }




  
//add an event listener 
  let button=document.getElementById("submit");

  button.addEventListener('click',getData);
  function getData(){
      //console.log();
  }

  //refactor the render prototype function