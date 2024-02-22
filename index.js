const sketchArea = document.querySelector(".sketch-area");
const gridSize = document.querySelector(".button");
const slideInput = document.querySelector(".slideInput");
const slideLabel = document.querySelector(".slide-label");
const randomBtn = document.querySelector(".random-btn");
const blackBtn = document.querySelector(".black-btn");

function createGrid(squares) {
  sketchArea.textContent = "";

  for (let i = 0; i < squares * squares; i++) {
    let gridPixels = document.createElement("div");
    gridPixels.classList.add("cell");

    gridPixels.style.height = `${100 / squares}%`;
    gridPixels.style.width = `${100 / squares}%`;
    sketchArea.appendChild(gridPixels);

    gridPixels.addEventListener("mouseover", () => {
      gridPixels.style.backgroundColor = "black";
      gridPixels.style.borderStyle = "none";
    });

    //black color event
    blackBtn.addEventListener("click", () => {
      gridPixels.addEventListener("mouseover", blackColor);
    });

    //random color event
    randomBtn.addEventListener("click", () => {
      gridPixels.addEventListener("mouseover", randColors);
    });
  }
}

function blackColor(color) {
  color.target.style.backgroundColor = "black";
  color.target.style.borderStyle = "none";
}

function randColors(event) {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  color = `rgb(${red}, ${green}, ${blue})`;

  event.target.style.backgroundColor = color;
}

slideInput.addEventListener("input", (slideEvent) => {
  inputSize = slideEvent.target.value;
  slideLabel.textContent = `Choose Size: ${inputSize}x${inputSize}`;
  createGrid(inputSize);
});

createGrid(16);
