import "./style.css"
import image1 from "../../assets/images/Group 34.png"
import image2 from "../../assets/images/Group 35.png"
import mark from "../../assets/images/mark.png"
const OurParent = () => {
    return (
        <div className="ourParent">
            <div className="heading">
                <div className="text">
                    What Our Parents Says
                </div>
            </div>
            <div className="cardSection">
                <div className="card">
                    <div className="quots">
                        <img src={mark} alt="mark" />
                    </div>
                    <div className="image">
                        <img src={image1} alt="image1" />
                    </div>
                    <div className="name">Shilpa Kumar</div>
                    <div className="profileDesc">
                        The school is living upto the standards of parents expectations. The staff whether being it teaching faculty or the governesses or the transportation faculty are immensely understanding and supportive. The canteen and mess are appluadable regarding healthy food. The managing committee and principal welcomes the negative points of school with open mind and take the necessary actions in this regard. We are happy the ways the children are being taught the academics and the way to be a better human being in future. A big kudos to the DPS faculty for doing so.
                    </div>
                </div>
                <div className="card">
                <div className="quots">
                        <img src={mark} alt="mark" />
                    </div>
                    <div className="image">
                        <img src={image2} alt="image1" />
                    </div>
                    <div className="name">Jasmeen Bhatia</div>
                    <div className="profileDesc">
                        DPS ynr is a school every parent could dream for their child. A school with intriguing staff, infrastructure, studies, and every thing necessary for a perfect education of our child. An epitome of excellence in the field of both education and sports, hence giving a fare chance of all round growth to every single student.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurParent