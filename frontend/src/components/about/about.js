import React from "react";

const AboutUs = props => {

    const developers = [{
        name: "Vera Ho - Team Lead",
        dino: "https://cdn.discordapp.com/attachments/862515957842706475/995665506495381594/triceratops_blue.png",
        dinoalt: "blue-triceratops",
        desc1: "Hello! I am a senior electrical engineer turned software engineer based in NYC, and currently open to opportunities as a full-stack or backend engineer.",
        desc2: "In addition to engineering, I love to hike, snowboard, and dabble in photography and sewing.",
        github: "https://github.com/vh71886",
        linkedin: "https://www.linkedin.com/in/veraho/",
        angellist: "https://angel.co/u/vera-ho-1", 
        portfolio: "",
        plogo: "https://cdn.discordapp.com/attachments/862515957842706475/995683776728399922/icons8-woman-profile-64.png"
    }, {
        name: "Alan Ng - FrontEnd Flex",
        dino: "https://cdn.discordapp.com/attachments/862515957842706475/995665506696695829/triceratops_orange.png",
        dinoalt: "orange-triceratops",
        desc1: "Hi! I am a software engineer with a passion for full-stack development. I love",
        desc2: "Some hobbies include playing basketball, snowboarding, and recently - weightlifting. I also love traveling to new places and exploring new things.",
        github: "https://github.com/AlanCLN",
        linkedin: "https://www.linkedin.com/in/alan-cln/",
        angellist: "https://angel.co/u/alan-cheuk-lun-ng",
        portfolio: "",
        plogo: "https://cdn.discordapp.com/attachments/862515957842706475/995683776090865734/icons8-user-64_1.png"
    }, {
        name: "Mike Chen",
        dino: "https://cdn.discordapp.com/attachments/862515957842706475/995665507078393876/triceratops_red.png",
        dinoalt: "red-triceratops",
        desc1: "",
        desc2: "",
        github: "",
        linkedin: "",
        angellist: "", 
        portfolio: "",
        plogo: "https://cdn.discordapp.com/attachments/862515957842706475/995683776090865734/icons8-user-64_1.png"
    }, {
        name: "Kevin Natera",
        dino: "https://cdn.discordapp.com/attachments/862515957842706475/995665506889637908/triceratops_purple.png",
        dinoalt: "purple-triceratops",
        desc1: "",
        desc2: "",
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
                    <h1>{developer.name}</h1>
                    <p>{developer.desc1}</p>
                    <p>{developer.desc2}</p>
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
                <div className="about-page-project-link">
                    <a href="https://github.com/vh71886/dina-dopt">
                        Click here for the Dina-Dopt GitHub Repository
                    </a>
                </div>
                <ul className="about-page-list">
                    {devItems}
                </ul>
            </div>
        </div>
    )
}

export default AboutUs;