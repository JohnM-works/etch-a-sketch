const sketchArea = document.querySelector(".sketch-area");
const gridSize = document.querySelector(".button");

let gridSide = 700;

sketchArea.style.height = `${gridSide}px`;
sketchArea.style.width = `${gridSide}px`;

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

gridSize.addEventListener("click", () => {
  let sign = window.prompt("Please enter a number between 1 to 64");
  if (sign > 64 || sign < 1) {
    return alert("Please enter a number between 1 to 64");
  } else {
    createGrid(sign);
  }
});

createGrid(16);
