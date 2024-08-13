import "./detailAbout.css"
import videoImage from "../../assets/images/Group 29.png"
const DetailAbout = () => {
    return (
        <div className="detailAboutWrapper">
            <div className="detailAbout">
                <div className="headings">
                    <div>
                        DPS, Yamuna Nagar
                    </div>
                    <span>
                        The Best CBSE Boarding School in North India
                    </span>
                </div>
                <div className="description">
                    <div className="descriptionText">
                        <div>
                            The environment at DPS Yamuna Nagar, one of the best boarding schools in Haryana, is highly nurturing, caring and aims towards providing every child with the opportunities to develop their talents as well as achieve their full academic potential. Our objective at the day boarding school is to make students’ life fun, safe, and rewarding, and help them achieve independence and maturity. We take great pride in providing the best amenities to all our students. We focus on every element required for the holistic growth of our wards.

                        </div>
                        <br />
                        <div>
                            Teachers at the day boarding school in Yamuna Nagar take 100% responsibility for the holistic development of children. Our landmark day boarding school provides unmatched ambiance and a highly motiving learning environment to the students. Besides providing high-quality education, we focus on the overall growth and development of the students. Students from different backgrounds and cultures come together and thrive as their differences are embraced and celebrated by our vibrant community of boarders. The school offers boarding facilities to students from multiple nationalities, making it one of the best residential schools in India.
                            <span>Read More</span>
                        </div>


                    </div>
                </div>

            </div>
            <div className="rectangle6">
                <div className="positionBox">
                    <div className="yellowBox"></div>
                    <div className="imageBox">
                        <img src={videoImage} alt="videoImage" />
                    </div>
                    <div className="greenBox"></div>
                </div>
            </div>
        </div>
    )
}
export default DetailAbout