import { LoremIpsum } from "react-lorem-ipsum";
import headshot from "./images/headshot.jpg";
import heroBackground from "./images/hero-background.jpg";
import "./App.scss";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="app">
      <div className="profile">
        <NavBar />
        <div className="profile__backgroundImg">
          <img className="profile__wallPaper" src={heroBackground} />
        </div>
        <div className="profile__aboutContainer">
          <div className="profile__profileImage">
            <img className="profile__headShot" src={headshot} />
          </div>
          <div className="profile__aboutMe">
            <h2>A little about me</h2>
            <LoremIpsum p={5} />
          </div>
        </div>
        <div className="profile__fotter">
          <span>@ 2020 Travelize</span>
          <span>Privacy Policy Terms and conditions</span>
        </div>
      </div>
    </div>
  );
}

export default App;
