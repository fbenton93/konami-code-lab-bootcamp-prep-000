const codes = [
  "ArrowUp", 
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let counter = 0

function konami(e) {
  var key = e.key
  console.log(key)
  
  if (key === codes[counter]) {
    counter++
  } else {
    counter = 0
  }
  
  if (counter === codes.length) {
    alert("Congratulations")
    counter = 0
  }
  
  
  
  
}




function init() {
  const body = document.body;
  body.addEventListener('keydown',konami); {
    konami(e);
  }
}