const gridContainer = document.querySelector(".grid-container");

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
