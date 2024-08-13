import "./about.css"
import image1 from "../../assets/images/Group 27.png"
import company from "../../assets/images/estate.png"
const About = () => {
    return (
        <div className="about">
            <div className="aboutWrapper">
                <div className="block">
                    <div className="image">
                        <img src={image1} alt="image1" />
                    </div>
                </div>
                <div className="block">
                    <div className="card">
                        <div className="image" >
                            <img src={company} alt="company" />
                        </div>
                        <div className="cardText" >
                            <div className="text">Established in April 2007</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image" >
                            <img src={company} alt="company" />
                        </div>
                        <div className="cardText" >
                            <div className="text">Ist to XIIth CBSE Curriculum
                                Offered</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image" >
                            <img src={company} alt="company" />
                        </div>
                        <div className="cardText" >
                            <div className="text">Situated in Yamuna Nagar,
                                Haryana</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image" >
                            <img src={company} alt="company" />
                        </div>
                        <div className="cardText" >
                            <div className="text">ATAL Tinkering Lab Robotics
                                Lab</div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="card">
                        <div className="image" >
                            <img src={company} alt="company" />
                        </div>
                        <div className="cardText" >
                            <div className="text">Student Teachers Ratio 1:15</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image" >
                            <img src={company} alt="company" />
                        </div>
                        <div className="cardText" >
                            <div className="text">200+ In house staff</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image" >
                            <img src={company} alt="company" />
                        </div>
                        <div className="cardText" >
                            <div className="text">Spread Across an Area of
                                17 Acres</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image" >
                            <img src={company} alt="company" />
                        </div>
                        <div className="cardText" >
                            <div className="text">Co-ed Boarding School(Abode
                                of Bliss) For classes IIIrd to XIIth</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default About