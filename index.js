const sketchArea = document.querySelector(".sketch-area");
const gridSize = document.querySelector(".button");
const slideInput = document.querySelector(".slideInput");
const slideLabel = document.querySelector(".slide-label");

function createGrid(squares) {
  sketchArea.textContent = "";

  for (let i = 0; i < squares * squares; i++) {
    let gridPixels = document.createElement("div");
    gridPixels.classList.add("cell");

    gridPixels.style.height = `${100 / squares}%`;
    gridPixels.style.width = `${100 / squares}%`;
    sketchArea.appendChild(gridPixels);

    //Events
    gridPixels.addEventListener("mouseover", () => {
      gridPixels.style.backgroundColor = "black";
      gridPixels.style.borderStyle = "none";
    });
  }
}

//Events
//gridSize.addEventListener("click", () => {
//  let sign = window.prompt("Please enter a number between 1 to 64");
//  if (sign > 64 || sign < 1) {
//    return alert("Please enter a number between 1 to 64");
//  } else {
//    createGrid(sign);
//  }
//});

slideInput.addEventListener("input", (slideEvent) => {
  inputSize = slideEvent.target.value;
  slideLabel.textContent = `${inputSize} X ${inputSize}`;
  createGrid(inputSize);
});

createGrid(16);
