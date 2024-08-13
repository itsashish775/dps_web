import "./style.css"
import image1 from "../../assets/images/WhatsApp Image 2024-01-11 at 1.05.png"
import image2 from "../../assets/images/WhatsApp Image 2024-01-11 at 1.05 2.png"
const RohitAcademy = () => {
    return (
        <div className="rohitacademy">
            <div className="heading">
                <div className="text">
                    Rohit Sharma Academy at DPS, Yamuna Nagar
                </div>
            </div>
            <div className="academy">
                <div className="card1">
                    <img src={image1} alt="image1" />
                </div>
                <div className="card2">
                    <div className="text">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                    </div>
                </div>
                <div className="card3">
                    <img src={image2} alt="image1" />
                </div>
            </div>
        </div>
    )
}
export default RohitAcademy