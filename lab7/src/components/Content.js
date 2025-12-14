import React, { Component } from "react";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            p1Style: {},
            p2Style: {},
        };
    }

    toggleStyle1 = () => {
        this.setState((prevState) => ({
            p1Style:
                prevState.p1Style.backgroundColor === "blue"
                    ? { backgroundColor: "transparent", color: "black" }
                    : { backgroundColor: "blue", color: "white" },
        }));
    };

    toggleStyle2 = () => {
        this.setState((prevState) => ({
            p2Style:
                prevState.p2Style.backgroundColor === "green"
                    ? { backgroundColor: "transparent", color: "black" }
                    : { backgroundColor: "green", color: "white" },
        }));
    };

    render() {
        return (
            <div className="content-wrapper">
                <p
                    onClick={this.toggleStyle1}
                    style={this.state.p1Style}
                    className="interactive-element"
                >
                    Дата народження: 16.08.2006<br/>
                    Місце народження: Київ
                </p>

                <p
                    onClick={this.toggleStyle2}
                    style={this.state.p2Style}
                    className="interactive-element"
                >
                    Освіта: <br/>
                    Університет: КПІ імені Ігоря Сікорського
                </p>

                <h3>Мої хобі:</h3>
                <ul>
                    <li>Відеоігри</li>
                    <li>Музика</li>
                    <li>Малювання</li>
                </ul>

                <h3>Улюблені фільми:</h3>
                <ol>
                    <li>Людина бензопила (2025)</li>
                    <li>Джентельмени (2019)</li>
                    <li>Безславні виродки (2009)</li>
                </ol>

                <h3>Улюблене місто: Київ</h3>
                <p>
                    Ки́їв — столиця та найбільше місто України. Розташований у середній течії Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний, транспортний, освітньо-науковий, історичний, культурний та духовний центр України. У системі адміністративно-територіального устрою України Київ має спеціальний статус, визначений Конституцією, і не входить до складу жодної області, хоча і є адміністративним центром Київської області. Місце розташування центральних органів влади України, іноземних місій, штаб-квартир більшості підприємств і громадських об'єднань, що працюють в Україні.
                </p>
            </div>
        );
    }
}

export default Content;