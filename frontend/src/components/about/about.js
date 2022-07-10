import React from "react";

const AboutUs = props => {

    const developers = [{
        name: "Vera Ho",
        dino: "https://cdn.discordapp.com/attachments/862515957842706475/995665506495381594/triceratops_blue.png",
        dinoalt: "blue-triceratops",
        desc: "",
        github: "",
        linkedin: "",
        angellist: "", 
        portfolio: ""
    }, {
        name: "Alan Ng",
        dino: "https://cdn.discordapp.com/attachments/862515957842706475/995665506696695829/triceratops_orange.png",
        dinoalt: "orange-triceratops",
        desc: "",
        github: "",
        linkedin: "",
        angellist: "", 
        portfolio: ""
    }, {
        name: "Mike Chen",
        dino: "https://cdn.discordapp.com/attachments/862515957842706475/995665507078393876/triceratops_red.png",
        dinoalt: "red-triceratops",
        desc: "",
        github: "",
        linkedin: "",
        angellist: "", 
        portfolio: ""
    }, {
        name: "Kevin Natera",
        dino: "https://cdn.discordapp.com/attachments/862515957842706475/995665506889637908/triceratops_purple.png",
        dinoalt: "purple-triceratops",
        desc: "",
        github: "",
        linkedin: "",
        angellist: "", 
        portfolio: ""
    }];

    const devItems = developers.map( developer => {
        return (
            <li className="about-page-list-item">
                <img src={developer.dino} 
                    alt={developer.dinoalt} />
                <div className="developer-description">
                    <p>{developer.name}</p>
                    <p>{developer.desc}</p>
                </div>
                <div className="developer-contact-information">

                </div>
            </li>
        )
    })

    return (
        <div className="about-page-container">
            <div className="about-page-content">
                <ul className="about-page-list">
                    {devItems}
                </ul>
            </div>
        </div>
    )
}

export default AboutUs;