import React, { useState } from "react";

function Image() {
    const [imageSize, setImageSize] = useState(600);
    const [isVisible, setIsVisible] = useState(true);

    const addImage = () => {
        setIsVisible(true);
        setImageSize(600);
    };

    const increaseSize = () => {
        setImageSize((prev) => prev + 50);
    };

    const decreaseSize = () => {
        setImageSize((prev) => (prev > 50 ? prev - 50 : prev));
    };

    const removeImage = () => {
        setIsVisible(false);
    };

    return (
        <div className="image-wrapper">
            {isVisible && (
                <a href="https://uk.wikipedia.org/wiki/%D0%9A%D0%B8%D1%97%D0%B2" target="_blank" rel="noreferrer">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/17-07-02-Maidan_Nezalezhnosti_RR74377-PANORAMA.jpg/500px-17-07-02-Maidan_Nezalezhnosti_RR74377-PANORAMA.jpg"
                        alt="Kyiv"
                        style={{ width: `${imageSize}px` }}
                    />
                </a>
            )}
            <div className="controls">
                <button onClick={addImage}>Додати</button>
                <button onClick={increaseSize}>Збільшити</button>
                <button onClick={decreaseSize}>Зменшити</button>
                <button onClick={removeImage}>Видалити</button>
            </div>
        </div>
    );
}

export default Image;