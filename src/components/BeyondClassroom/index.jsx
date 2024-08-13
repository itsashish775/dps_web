import image1 from "../../assets/images/Rectangle 34.png"
import image2 from "../../assets/images/Rectangle 35.png"
import image3 from "../../assets/images/Rectangle 36.png"
import image4 from "../../assets/images/Rectangle 37.png"
import "./style.css"
const BeyoundClassroom = () => {
    return (
        <div className="beyondClassroom">
            <div className="heading">
                <div className="text">
                    Beyond The Classroom
                </div>
            </div>
            <div className="cardSection">
                <div className="card">
                    <div className="image">
                        <img src={image1} alt="" />
                    </div>
                    <div className="cardDetails">
                        <div className="boldText">Academics</div>
                        <div className="smallText">JOIN US TO ENTHUSE, EMPOWER
                            AND EXCEL YOUR WARD</div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={image2} alt="" />
                    </div>
                    <div className="cardDetails">
                        <div className="boldText">Infrastructure</div>
                        <div className="smallText">J17 ACRES ECO-FRIENDLY CAMPUS</div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={image3} alt="" />
                    </div>
                    <div className="cardDetails">
                        <div className="boldText">Sports</div>
                        <div className="smallText">PASSION FIRST AND EVERTHING
                            WILL COME INTO PLACE</div>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={image4} alt="" />
                    </div>
                    <div className="cardDetails">
                        <div className="boldText">Pastoral Care</div>
                        <div className="smallText">WHERE CARING IS NOT JUST A
                            DUTY BUT CULTURE</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeyoundClassroom