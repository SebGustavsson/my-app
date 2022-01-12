import './Aboutcard.css';
import Zoom from 'react-reveal/Zoom';

const AboutCard = (props) => {
  return <div className="about-card">
    <img src={props.avatar} width="200" 
      height="200"></img>
    <Zoom left>
      <p>Hi, I'm Sebastian!
        <br />
        I attended <a href="https://www.lewagon.com" target="_blank">le Wagon</a> bootcamp in Stockholm where I discovered my love for developing.
        When I'm not coding I enjoy studying Korean, working out and spending time in nature, especially with my dog. 
      </p>
      <a href="https://www.lewagon.com" target="_blank">
        <img src={props.logo}></img>
      </a>
    </Zoom>
  </div>
}

export default AboutCard;