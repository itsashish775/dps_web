import "./style.css"
import image1 from "../../assets/images/IMG_3706 1.png"
import image2 from "../../assets/images/DSC01471 1.png"
import image3 from "../../assets/images/KUNA4739 1.png"
import image4 from "../../assets/images/IMG_4138 1.png"
import image5 from "../../assets/images/IMG_3711 1.png"
const SchoolHilight = () => {
    return (
        <div className="schoolHilight">
            <div className="header">
                <div className="heading">
                    <div className="text">
                        School Highlights
                    </div>
                </div>
                <div className="fullGallary">
                    <div className="btn">
                        Full Gallary 
                    </div>
                </div>
            </div>
            <div className="imageBanner">
                <div className="left">
                    <div className="first">
                        <div className="image image1">
                            <img src={image1} alt="demoImage" />
                        </div>
                        <div className="image image2">
                            <img src={image2} alt="demoImage" />
                        </div>
                    </div>
                    <div className="second">
                        <div className="image image2">
                            <img src={image3} alt="demoImage" />
                        </div>
                        <div className="image image1">
                            <img src={image4} alt="demoImage" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="image2">
                        <img src={image5} alt="demoImage" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SchoolHilight