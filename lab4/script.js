const element1 = document.getElementById('target-1');
const element2 = document.querySelector('#target-2');

element1.onclick = function() {
    this.classList.toggle('active-style-1');
};

element2.onclick = function() {
    this.classList.toggle('active-style-2');
};

const imgWrapper = document.getElementById('img-wrapper');
let imgElement = document.getElementById('city-img');

function addImage() {
    if (!document.getElementById('city-img')) {
        const link = document.querySelector('#img-wrapper a');
        const newImg = document.createElement('img');
        newImg.id = 'city-img';
        newImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/17-07-02-Maidan_Nezalezhnosti_RR74377-PANORAMA.jpg/500px-17-07-02-Maidan_Nezalezhnosti_RR74377-PANORAMA.jpg';
        newImg.alt = 'Фото міста';
        newImg.width = 600;

        if (link) {
            link.appendChild(newImg);
        } else {
            imgWrapper.appendChild(newImg);
        }
    }
}

function increaseSize() {
    imgElement = document.getElementById('city-img');
    if (imgElement) {
        imgElement.width += 50;
    }
}

function decreaseSize() {
    imgElement = document.getElementById('city-img');
    if (imgElement && imgElement.width > 50) {
        imgElement.width -= 50;
    }
}

function removeImage() {
    imgElement = document.getElementById('city-img');
    if (imgElement) {
        imgElement.remove();
    }
}