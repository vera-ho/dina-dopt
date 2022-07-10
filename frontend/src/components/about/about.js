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
        portfolio: "",
        plogo: "https://cdn.discordapp.com/attachments/862515957842706475/995683776728399922/icons8-woman-profile-64.png"
    }, {
        name: "Alan Ng",
        dino: "https://cdn.discordapp.com/attachments/862515957842706475/995665506696695829/triceratops_orange.png",
        dinoalt: "orange-triceratops",
        desc: "",
        github: "",
        linkedin: "",
        angellist: "", 
        portfolio: "",
        plogo: "https://cdn.discordapp.com/attachments/862515957842706475/995683776090865734/icons8-user-64_1.png"
    }, {
        name: "Mike Chen",
        dino: "https://cdn.discordapp.com/attachments/862515957842706475/995665507078393876/triceratops_red.png",
        dinoalt: "red-triceratops",
        desc: "",
        github: "",
        linkedin: "",
        angellist: "", 
        portfolio: "",
        plogo: "https://cdn.discordapp.com/attachments/862515957842706475/995683776090865734/icons8-user-64_1.png"
    }, {
        name: "Kevin Natera",
        dino: "https://cdn.discordapp.com/attachments/862515957842706475/995665506889637908/triceratops_purple.png",
        dinoalt: "purple-triceratops",
        desc: "",
        github: "",
        linkedin: "",
        angellist: "", 
        portfolio: "",
        plogo: "https://cdn.discordapp.com/attachments/862515957842706475/995683776090865734/icons8-user-64_1.png"
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
                    <a href={developer.github}>
                        <img src="https://cdn.discordapp.com/attachments/862515957842706475/995683775642079273/icons8-github-64.png"
                            alt="github-logo" />
                    </a>

                    <a href={developer.linkedin}>
                        <img src="https://cdn.discordapp.com/attachments/862515957842706475/995683775872778280/icons8-linkedin-circled-64.png"
                            alt="linkedin-logo" />
                    </a>

                    <a href={developer.angellist}>
                        <img src="https://cdn.discordapp.com/attachments/862515957842706475/995683775092637706/icons8-angellist-64.png"
                            alt="angellist-logo" />
                    </a>

                    <a href={developer.portfolio}>
                        <img src={developer.plogo}
                            alt="portfolio-logo" />
                    </a>
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