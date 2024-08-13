import "./style.css"
import image58 from "../../assets/images/Rectangle 58.png"
import image59 from "../../assets/images/Rectangle 59.png"
import image60 from "../../assets/images/Rectangle 60.png"
const MeetInspiration = () => {
    return (
        <div className="meetInspiration">
            <div className="heading">
                DPS- Where Education Meets Inspiration
            </div>
            <div className="cardAndDetails">
                <div className="card">
                    <img src={image58} alt="image58" />
                    <div className="verticalTag">
                        <div className="text">
                            Our mission
                        </div>
                    </div>
                    <div class="info">
                        We aim towards being a center of excellence in education by educating our privileged youth in the essence of enlightened leadership and citizenship.
                    </div>
                    <div class="card-blur"></div>
                </div>
                <div className="card">
                    <img src={image59} alt="image58" />
                    <div className="verticalTag">
                        <div className="text">
                            Our vision
                        </div>
                    </div>
                    <div class="info">
                        We aim towards being a center of excellence in education by educating our privileged youth in the essence of enlightened leadership and citizenship.
                    </div>
                    <div class="card-blur"></div>
                </div>
                <div className="card">
                    <img src={image60} alt="image58" />
                    <div className="verticalTag">
                        <div className="text">
                            Our value
                        </div>
                    </div>
                    <div class="info">
                        We aim towards being a center of excellence in education by educating our privileged youth in the essence of enlightened leadership and citizenship.
                    </div>
                    <div class="card-blur"></div>
                </div>
                <div className="details">
                    <div className="text">
                        DPS, Yamuna Nagar is deeply committed towards holistic education of the learners. Our focus not only in the development educational skills of the students but also their non-cognitive skills. The team at DPS, Yamuna Nagar comprises of well-qualified and experienced teachers and instructors supported by experienced administrative staff members. The school campus houses a well-equipped and technologically advanced academic wing, boarding houses, amply equipped sports amenities, medical facilities and state-of-the-art labs, spread over acres of campus, which are well-planned and constructed.

                    </div>
                </div>
            </div>
        </div >
    )
}

export default MeetInspiration