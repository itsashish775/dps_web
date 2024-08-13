import "./detailsBody.css"
import videoImage from "../../assets/images/image 4.png"
const DetailsBody = () => {
    return (
        <div className="detailWrapper">
            <div className="details">
                <div className="headings">
                    <div>
                        Welcome To DPS Yamuna Nagar:
                    </div>
                    <span>
                        The Best CBSE School In Haryana
                    </span>
                </div>
                <div className="description">
                    <div className="descriptionText">
                        <div>
                            Delhi Public School Yamuna Nagar, under the aegis of Delhi Public School Society, Delhi offers an inspiring, enriching, and inclusive academic environment to the students. As a school with a global perspective, we believe in honing the natural intellect, individual excellence, and the capacity for interdisciplinary collaboration in our students. We guide our learners to become confident and meticulous citizen-leaders, and encourage them to pursue their passion for growth in life. The school inspires and equips them to be risk-takers and explore new horizons. We pride ourselves on being one of the top CBSE schools in Yamuna Nagar, providing unique all-round education to our wards.
                        </div>
                        <br />
                        <div>
                            The school inculcates innovation and creativity in the students through holistic learning in state-of-the-art classrooms and labs. The sports academy is equipped with world-class infrastructure for multiple indoor and outdoor games. The students are trained under the guidance of national and international level coaches. We recognize that the knowledge, skills, and experience of our faculty members are significant for achieving our commitment to excellence. In our endeavor to provide the best educators and staff, we offer an outstanding work environment with excellent facilities that are as conducive for the staff as they are for the students by following valuable guidelines from the DPS Society. <span>Read More</span>
                        </div>


                    </div>
                </div>

            </div>
            <div className="rectangle6">
                <div className="image">
                    <img src={videoImage} alt="videoImage" />
                </div>
            </div>
        </div>
    )
}
export default DetailsBody