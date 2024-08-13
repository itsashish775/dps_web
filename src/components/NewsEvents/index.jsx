import "./style.css"
import image1 from "../../assets/images/Untitled-2 1.png"
import eventImg1 from "../../assets/images/Rectangle 41.png"
import eventImg2 from "../../assets/images/image 6.png"
import eventImg3 from "../../assets/images/image 7.png"
const NewsEvents = () => {
    return (
        <div className="newsEvents">
            <div className="left">
                <div className="heading">
                    <div className="text">
                        Discover the Best Co-ed CBSE School
                    </div>
                </div>
                <div className="image">
                    <img src={image1} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="heading">
                    <div className="text">
                        News and Events
                    </div>
                </div>
                <div className="events">
                    <div className="eventsCard">
                        <div className="img">
                            <img src={eventImg1} alt="" />
                        </div>
                        <div className="desc">
                            <h3>Janmashtami Celebration</h3>
                            <div className="eveDetails">
                                The school organized various Online Activities on Janmashtami such as Matki and Flute Decoration, Bal Krishna Painting, Krishna Bhajan, Speech on Krishna Leela and many more.
                            </div>
                        </div>
                    </div>
                    <div className="eventsCard">
                        <div className="img">
                            <img src={eventImg2} alt="" />
                        </div>
                        <div className="desc">
                            <h3>Janmashtami Celebration</h3>
                            <div className="eveDetails">
                                The school organized various Online Activities on Janmashtami such as Matki and Flute Decoration, Bal Krishna Painting, Krishna Bhajan, Speech on Krishna Leela and many more.
                            </div>
                        </div>
                    </div>
                    <div className="eventsCard">
                        <div className="img">
                            <img src={eventImg3} alt="" />
                        </div>
                        <div className="desc">
                            <h3>Janmashtami Celebration</h3>
                            <div className="eveDetails">
                                The school organized various Online Activities on Janmashtami such as Matki and Flute Decoration, Bal Krishna Painting, Krishna Bhajan, Speech on Krishna Leela and many more.
                            </div>
                        </div>
                    </div>
                    <div className="eventsCard">
                        <div className="img">
                            <img src={eventImg3} alt="" />
                        </div>
                        <div className="desc">
                            <h3>Janmashtami Celebration</h3>
                            <div className="eveDetails">
                                The school organized various Online Activities on Janmashtami such as Matki and Flute Decoration, Bal Krishna Painting, Krishna Bhajan, Speech on Krishna Leela and many more.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="readMore">
                    Read More --->
                </div>
            </div>
        </div>
    )
}

export default NewsEvents