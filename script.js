const container = document.getElementById('container');
const resizeButton = document.getElementById('resizeButton');

let gridSize = 16; // default grid 16x16

// Create the grid
function createGrid(size) {
    container.innerHTML = ''; // clear old grid
    const squareSize = 960 / size; // size per square

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Track darkness level for progressive darkening
        square.dataset.darkness = 0;

        // Hover effect
        square.addEventListener('mouseenter', () => {
            // Random RGB color
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            // Increase darkness by 10%
            let darkness = Number(square.dataset.darkness);
            if (darkness < 100) darkness += 10;
            square.dataset.darkness = darkness;

            // Apply color with opacity based on darkness
            square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${darkness / 100})`;
        });

        container.appendChild(square);
    }
}

// Resize grid button
resizeButton.addEventListener('click', () => {
    let newSize = prompt('Enter number of squares per side (max 100):');
    newSize = Number(newSize);

    if (newSize && newSize > 0 && newSize <= 100) {
        gridSize = newSize;
        createGrid(gridSize);
    } else {
        alert('Invalid number! Enter a number between 1 and 100.');
    }
});

// Initialize default grid
createGrid(gridSize);
