import './Aboutcard.css';
import Zoom from 'react-reveal/Zoom';

const AboutCard = () => {
  return <div className="about-card">
    <img src="https://avatars.githubusercontent.com/u/89755646?v=4" width="200" height="200"></img>
    <Zoom left>
      <p>Hi, I'm Sebastian!
        <br />
        I attended <a href="https://www.lewagon.com" target="_blank">le Wagon</a> bootcamp in Stockholm where I discovered my love for developing.
      </p>
      <img src="https://dwj199mwkel52.cloudfront.net/assets/core/svg/logo-lewagon-5ff5f090209d8d3bf493790d7935822208011748adb83a2fbc6bcaaf05a289ef.svg"></img>
    </Zoom>
  </div>
}

export default AboutCard;
