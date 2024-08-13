import About from "./components/About";
import Banner from "./components/Banner";
import BeyoundClassroom from "./components/BeyondClassroom";
import DetailAbout from "./components/DetailAbout";
import DetailsBody from "./components/DetailsBody";
import Footer from "./components/Footer";
import MeetInspiration from "./components/MeetInspiration";
import NewsEvents from "./components/NewsEvents";
import OurParent from "./components/OurParent";
import RohitAcademy from "./components/RohitAcademy";
import SchoolHilight from "./components/SchoolHilights";

function App() {


  return (
    <div className="">
      <Banner />
      <DetailsBody />
      <About />
      <DetailAbout />
      <MeetInspiration />
      <SchoolHilight/>
      <RohitAcademy/>
      <BeyoundClassroom/>
      <NewsEvents/>
      <OurParent/>
      <Footer />
    </div>
  );
}

export default App;
