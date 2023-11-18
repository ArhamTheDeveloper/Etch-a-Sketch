const gridContainer = document.querySelector(".grid-container");
const button = document.querySelector(".btn");

// Function to remove all child elements of a given element
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

for (let i = 0; i < 256; i++) {
  let div = document.createElement("div");
  gridContainer.append(div);
}

// Event listener for hover effect using event delegation
gridContainer.addEventListener("mouseover", (event) => {
  if (event.target.tagName === "DIV") {
    event.target.style.backgroundColor = "rgb(255, 155, 155)";
  }
});

button.addEventListener("click", () => {
  let numOfSquares = prompt(
    "Enter the number of squares per side for the new grid"
  );
  if (numOfSquares < 100) {
    removeAllChildNodes(gridContainer);
    for (let i = 0; i < numOfSquares * numOfSquares; i++) {
      let div = document.createElement("div");
      div.style.width = `calc(500px / ${numOfSquares})`;
      div.style.height = `calc(500px / ${numOfSquares})`;
      gridContainer.append(div);
    }
  } else {
    alert("Number of squares should not be more than 100");
  }
});
