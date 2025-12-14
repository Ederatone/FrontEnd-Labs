const downloadBtn = document.getElementById('downloadBtn');
const resultsContainer = document.getElementById('resultsContainer');
const statusMessage = document.getElementById('statusMessage');

downloadBtn.addEventListener('click', () => {
    statusMessage.textContent = 'Завантаження...';

    fetch('https://randomuser.me/api/?results=5')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            statusMessage.textContent = 'Успішно!';
            renderUsers(data.results);
        })
        .catch(error => {
            statusMessage.textContent = 'Помилка: ' + error.message;
        });
});

function renderUsers(users) {
    resultsContainer.innerHTML = '';

    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';

        const img = document.createElement('img');
        img.src = user.picture.large;
        img.alt = 'Фото користувача';

        const postcode = createInfoElement('Поштовий індекс', user.location.postcode);
        const coordinates = createInfoElement('Координати',
            `Шир: ${user.location.coordinates.latitude}, Довг: ${user.location.coordinates.longitude}`);
        const email = createInfoElement('Email', user.email);
        const city = createInfoElement('Місто', user.location.city);

        card.appendChild(img);
        card.appendChild(postcode);
        card.appendChild(coordinates);
        card.appendChild(email);
        card.appendChild(city);

        resultsContainer.appendChild(card);
    });
}

function createInfoElement(label, value) {
    const div = document.createElement('div');
    div.className = 'info-item';

    const labelSpan = document.createElement('span');
    labelSpan.className = 'info-label';
    labelSpan.textContent = label + ':';

    const valueText = document.createTextNode(value);

    div.appendChild(labelSpan);
    div.appendChild(valueText);

    return div;
}