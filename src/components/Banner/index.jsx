import "./banner.css"
import logo from "../../assets/images/logo 1.png"
const Banner = () => {
    return (
        <div className="banner">
            <div className="bannerImage">
                <div className="logo">
                    <img src={logo} alt="logo 1" />
                </div>
                <div className="bannerTextLayout">
                    <div className="bannerText">Bringing</div>
                    <div className="bannerText">Excellence to Students</div>
                </div>
                <div className="bannerFooter">
                    <div className="records">
                        <div className="recordCount">1400</div>
                        <div className="recordText">STUDENTS</div>
                    </div>
                    <div className="records">
                        <div className="recordCount">75</div>
                        <div className="recordText">TEACHERS</div>
                    </div>
                    <div className="records">
                        <div className="recordCount">40</div>
                        <div className="recordText">CLASSES</div>
                    </div>
                    <div className="records">
                        <div className="recordCount">10</div>
                        <div className="recordText">LABS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner