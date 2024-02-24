const sketchArea = document.querySelector(".sketch-area");
const gridSize = document.querySelector(".button");
const slideInput = document.querySelector(".slideInput");
const slideLabel = document.querySelector(".slide-label");
const randomBtn = document.querySelector(".random-btn");
const blackBtn = document.querySelector(".black-btn");
const clearBtn = document.querySelector(".clear-btn");
const gridBtn = document.querySelector("#grid-btn");
const colorPicker = document.querySelector("#colorPicker");

function createGrid(squares) {
  for (let i = 0; i < squares * squares; i++) {
    let gridPixels = document.createElement("div");
    gridPixels.classList.add("cell");

    gridPixels.style.height = `${100 / squares}%`;
    gridPixels.style.width = `${100 / squares}%`;
    sketchArea.appendChild(gridPixels);
  }
}

function blackColor(color) {
  color.target.style.backgroundColor = "black";
}

function randColors(event) {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  color = `rgb(${red}, ${green}, ${blue})`;
  event.target.style.backgroundColor = color;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function toggleOutline() {
  const squares = document.querySelectorAll(".cell");
  squares.forEach((square) => {
    square.classList.toggle("square");
  });
}

function pickColor() {}

//-------EVENTS------//

//random color event
randomBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".cell");
  squares.forEach((square) => {
    square.addEventListener("mouseover", randColors);
  });
});

//black color event
blackBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".cell");
  squares.forEach((square) => {
    square.removeEventListener("mouseover", randColors);
    square.addEventListener("mouseover", blackColor);
  });
});

//grid button event
gridBtn.addEventListener("click", () => {
  toggleOutline();
  gridBtn.classList.toggle("active");
  if (gridBtn.value == "ON") {
    gridBtn.value == "OFF";
  } else {
    gridBtn.value == "ON";
  }
});

//clear button event
clearBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".cell");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});

//Color Picker event
colorPicker.addEventListener("change", (event) => {
  let color = event.target.value;
  const squares = document.querySelectorAll(".cell");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = color;
    });
  });
});

//slider event
slideInput.addEventListener("input", (slideEvent) => {
  inputSize = slideEvent.target.value;
  removeAllChildNodes(sketchArea);
  slideLabel.textContent = `Choose Size: ${inputSize}x${inputSize}`;
  createGrid(inputSize);
});

createGrid(16);
