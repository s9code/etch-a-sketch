// VARIABLES

const divContainer = document.querySelector("#grid-container");
const userResize = document.querySelector("#resize-btn");
const dltCells = document.querySelector("#dlt-cells");

// EVENTOS

userResize.addEventListener("click", () => {

    const userInput = parseInt(prompt("¿Cuantos cuadrados quieres por lado?"));

    if (userInput > 100 || userInput <= 0 || isNaN(userInput)) {

        alert("Debes insertar un numero y no debe exceder de 100");
        divContainer.innerHTML = "";

    } else {

        createGrid(userInput);

    };

});

dltCells.addEventListener("click", () => {

    createGrid(40);

})

//FUNCIONES

function createGrid(gridSize) {

    divContainer.innerHTML = "";

    const totalCells = gridSize * gridSize;

    const cellSize = 960 / gridSize;

    for (let i = 0; i < totalCells; i++) {

        const gridCell = document.createElement("div");

        divContainer.appendChild(gridCell);

        gridCell.addEventListener("mouseenter", () => {
            gridCell.classList.add("gridColor");
        });

        gridCell.style.width = `${cellSize}px`;
        gridCell.style.height = `${cellSize}px`;

    };

};

createGrid(40);