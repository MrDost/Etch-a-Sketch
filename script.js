const container = document.querySelector('.grid-container');
const buttons = document.querySelectorAll('#res');
const buttons2 = document.querySelectorAll('#mode');
let mode = 'Black';
generateGrid(16);

for (const i of buttons) {
    console.log(i)
    i.addEventListener('click', () => {
        for (const j of buttons) {
            j.classList.remove('active');
        }
        i.classList.add('active');
        removeGrid()
        generateGrid(parseInt(i.innerText))
    })
}

for (const i of buttons2) {
    console.log(i)
    i.addEventListener('click', () => {
        for (const j of buttons2) {
            j.classList.remove('active');
        }
        i.classList.add('active');
        mode = i.innerText;
    })
}

function generateGrid(size) {
    let pixelSize = 1024 / size;

    for (i = 0; i < size**2; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel')
        pixel.style.width = pixelSize + 'px'; 
        pixel.style.height = pixelSize + 'px';
        isDrawing = false;

        pixel.addEventListener('mousedown', () => {
            isDrawing = true;
            pixel.style.backgroundColor = getColor(mode);
        });
        pixel.addEventListener('mouseup', () => {
            isDrawing = false;
        });
        pixel.addEventListener('mousemove', () => {
            if (isDrawing) {
                pixel.style.backgroundColor = getColor(mode);
            }
        });

        container.appendChild(pixel);
    }
}

function getColor(mode) {
    if (mode == 'Black') {
        return 'black';
    } else if (mode == 'Grayscale') {
        return "#" + randomGrayscale()
    } else {
        return "#" + randomColor()
    }
}

function randomGrayscale() {
    const randomInt = Math.floor(Math.random() * 16) + 0;
    const values = ['a', 'b', 'c', 'd', 'e', 'f'];
    const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const merged = values.concat(digits);
    let color = '';
    for (i = 0; i < 6; i++) {
        color += merged[randomInt];
    }

    return color
}

function randomColor() {
    const values = ['a', 'b', 'c', 'd', 'e', 'f'];
    const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const merged = values.concat(digits);
    let color = '';
    for (i = 0; i < 6; i++) {
        const randomInt = Math.floor(Math.random() * 16) + 0;
        color += merged[randomInt];
    }

    console.log(color);
    return color
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}