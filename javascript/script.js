const divContainer = document.querySelector("#grid-container");

for (let i = 0; i < 256; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    divContainer.appendChild(gridCell);
};