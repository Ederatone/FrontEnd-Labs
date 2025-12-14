const form = document.getElementById('userForm');

const patterns = {
    pib: /^[A-Za-zА-Яа-яІіЇїЄє\s]+$/,
    variant: /^\d+$/,
    group: /^[A-Za-zА-Яа-яІіЇїЄє]{2}-\d{2}$/,
    phone: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
    idcard: /^[A-Za-zА-Яа-яІіЇїЄє]{2} №\d{6}$/,
    faculty: /^[A-Za-zА-Яа-яІіЇїЄє]{4}$/
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    let collectedData = {};

    const inputs = ['pib', 'variant', 'group', 'phone', 'idcard', 'faculty'];

    inputs.forEach(id => {
        const input = document.getElementById(id);
        const value = input.value;
        const pattern = patterns[id];

        if (pattern.test(value)) {
            input.classList.remove('error');
            collectedData[id] = value;
        } else {
            input.classList.add('error');
            isValid = false;
        }
    });

    if (isValid) {
        const newWindow = window.open("", "Результат", "width=400,height=500");

        newWindow.document.write(`
            <html>
            <head>
                <title>Перевірені дані</title>
                <style>
                    body { font-family: sans-serif; padding: 20px; }
                    h2 { color: #007bff; border-bottom: 2px solid #ccc; padding-bottom: 10px; }
                    p { font-size: 16px; margin: 10px 0; }
                    strong { display: inline-block; width: 100px; }
                </style>
            </head>
            <body>
                <h2>Введені дані</h2>
                <p><strong>ПІБ:</strong> ${collectedData.pib}</p>
                <p><strong>Варіант:</strong> ${collectedData.variant}</p>
                <p><strong>Група:</strong> ${collectedData.group}</p>
                <p><strong>Телефон:</strong> ${collectedData.phone}</p>
                <p><strong>ID-card:</strong> ${collectedData.idcard}</p>
                <p><strong>Факультет:</strong> ${collectedData.faculty}</p>
            </body>
            </html>
        `);
        newWindow.document.close();
    }
});

const tableContainer = document.getElementById('table-container');
const colorPicker = document.getElementById('colorPicker');
const myVariant = 15;

function createTable() {
    const table = document.createElement('table');
    let counter = 1;

    for (let i = 0; i < 6; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 6; j++) {
            const td = document.createElement('td');
            td.textContent = counter;
            td.id = 'cell-' + counter;
            tr.appendChild(td);
            counter++;
        }
        table.appendChild(tr);
    }
    tableContainer.appendChild(table);
}

createTable();

const targetCell = document.getElementById('cell-' + myVariant);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

if (targetCell) {
    targetCell.addEventListener('mouseover', function() {
        this.style.backgroundColor = getRandomColor();
    });

    targetCell.addEventListener('click', function() {
        this.style.backgroundColor = colorPicker.value;
    });

    targetCell.addEventListener('dblclick', function() {
        const parentRow = this.parentElement;
        const cells = Array.from(parentRow.children);
        const startIndex = cells.indexOf(this);
        const pickedColor = colorPicker.value;

        for (let i = startIndex; i < cells.length; i += 2) {
            cells[i].style.backgroundColor = pickedColor;
        }
    });
}