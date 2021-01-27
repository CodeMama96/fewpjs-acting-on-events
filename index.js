// Your code here
let dodger = document.getElementById("dodger"); //grabbing the element
dodger.style.backgroundColor = "#FF69B4"; //changing color
console.log(dodger.style.left); // "180px"
console.log(dodger.style.bottom); // "0px" 
dodger.style.bottom = "100px"; 
dodger.style.bottom = "0px"; //returning to where we started
document.addEventListener("keydown", function(e) {
    console.log(e.key);
  }); 

document.addEventListener("keydown", function(e) {
if (e.key === "ArrowLeft") {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
}
}); 

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 


  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  }); 


  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  } 


  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  }); 

