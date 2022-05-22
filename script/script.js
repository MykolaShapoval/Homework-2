
function createNumber() {
   var x = document.getElementById("first").value;
   var y = document.getElementById("last").value;

   if (x == null || x == "") {
      alert("Write something");
      return;
   }

   if (y == null || y == "") {
      alert("Write something");
      return;
   }

   var random = getRandomInt(x, y);
   const addToArea = document.getElementById("area");
   addToArea.innerText = random;
   alert("What number did i guess? (add number to the third input)")
}


function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min);
}

function refresh() {
   window.location.reload();
}

var attempts = 1;
function tryIt() {
   var a = document.getElementById("area").innerText;
   var b = document.getElementById("try").value;

   if (a < b) {
      alert("It`s too lot, try again.");
      document.getElementById("try").value = "";
   } else if (a > b) {
      alert("The number is too small , try again.");
      document.getElementById("try").value = "";
   } else if (a === b) {
      alert(`You're right! It's ${b} you needed ${attempts} attempts`);
      window.location.reload();
   } else if (b === null) {
      alert("Input is empty!")
   }
   attempts = attempts + 1;
}

