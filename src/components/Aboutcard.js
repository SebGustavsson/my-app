import './Aboutcard.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const AboutCard = (props) => {
  return <div className="about-card">
    <div data-aos="zoom-in">
      <img src={props.avatar} width="200"
        height="200"></img>
    </div>
    <div data-aos="zoom-in">
      <p>Hi, I'm Sebastian!
        <br />
        I attended <a href="https://www.lewagon.com" target="_blank">le Wagon</a> bootcamp in Stockholm where I discovered my love for developing.
        When I'm not coding I enjoy studying Korean, working out and spending time in nature, especially with my dog.
      </p>
      <a href="https://www.lewagon.com" target="_blank">
        <img src={props.logo}></img>
      </a>
    </div>
  </div>
}

export default AboutCard;
