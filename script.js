const grid = document.querySelector('.grid');
const changeSize = document.querySelector('#resize');
const eraser = document.querySelector('#eraser');
const colorPicker = document.querySelector('#color-picker');
const reset = document.querySelector('#reset');


let currentColor = "grey";

function generateSquares(count) {
  for (let i = 1; i <= count**2; i++) {
    let square = document.createElement('div');
    square.className= 'square';

    square.style.cssText = 

    `height: ${100 / count}%; 
    aspect-ratio: 1; 
    border: .5px solid grey; 
    box-sizing: border-box;`;

    square.addEventListener("mouseover", (e) => {
        square.style.backgroundColor = currentColor;
    });

    grid.appendChild(square);
    }
}

generateSquares(16);

changeSize.addEventListener('click', () => {
  let newSize = prompt("Enter new size (1-100):");
  if (newSize > 100 || newSize < 1 || isNaN(newSize)) {
    alert("Please enter a number between 1 and 100");
  } else {
    grid.innerHTML = "";
    generateSquares(newSize);
  }
}
);
eraser.addEventListener('click', () => {
  currentColor = "white";
}
);
reset.addEventListener('click', () => {
  grid.innerHTML = "";
  generateSquares(16);
  currentColor = "grey";
  colorPicker.value = "#808080";
 
});

colorPicker.addEventListener('input', () => {
  currentColor = colorPicker.value;
});