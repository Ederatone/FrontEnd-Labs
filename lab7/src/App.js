import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import GoodsCard from "./components/GoodsCard";

function App() {
    const goods = [
        { id: 1, name: "Apple", price: 15, image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" },
        { id: 2, name: "Pear", price: 20, image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Pears.jpg" },
        { id: 3, name: "Grape", price: 25, image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg" },
        { id: 4, name: "Peach", price: 18, image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peaches.jpg" },
        { id: 5, name: "Banana", price: 22, image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" },
        { id: 6, name: "Orange", price: 30, image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg" },
    ];

    return (
        <div className="App">
            <section className="task-section">
                <Header />
                <Content />
                <Image />
            </section>

            <section className="task-section">
                <div className="goods-gallery">
                    {goods.map((item) => (
                        <GoodsCard
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default App;