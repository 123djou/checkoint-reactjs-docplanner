
import City from './Component/city/City';
import Acheivement from './Component/acheivement/Acheivement';
import Experience from './Component/experience/Experience';
import Header from './Component/header/Header';
import Footer from './Component/footer/Footer';

import React, { Component } from 'react';


class App extends Component {

    constructor(props) {
        super()


    }


    render() {
        const list = [

            { img: "https://www.docplanner.com/images/warsaw.png", name: "warsaw" },
            { img: "https://www.docplanner.com/images/barcelona.png", name: "barcelone" },
            { img: "https://www.docplanner.com/images/warsaw.png", name: "warsaw" },
            { img: "https://www.docplanner.com/images/barcelona.png", name: "barcelone" },
            { img: "https://www.docplanner.com/images/warsaw.png", name: "warsaw" },
            { img: "https://www.docplanner.com/images/barcelona.png", name: "barcelone" }];

        const link = [
            { img: "https://www.docplanner.com/img/sygnet.png", txt: "Znanylekarz" },
            { img: "https://www.docplanner.com/img/sygnet.png", txt: "Znanylekarz" },
            { img: "https://www.docplanner.com/img/sygnet.png", txt: "Znanylekarz" },
            { img: "https://www.docplanner.com/img/sygnet.png", txt: "Znanylekarz" },
            { img: "https://www.docplanner.com/img/sygnet.png", txt: "Znanylekarz" },
            { img: "https://www.docplanner.com/img/sygnet.png", txt: "Znanylekarz" },
            { img: "https://www.docplanner.com/img/sygnet.png", txt: "Znanylekarz" }
        ];

        

        return (


            <div>

                <Header />

                <main className="container">

                    <Experience link={link}  />
                    <Acheivement />
                    <City countryList={list} />
                </main>
                <Footer />
            </div>
        );
    }
}
export default App;
