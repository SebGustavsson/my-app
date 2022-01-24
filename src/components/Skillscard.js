import './Skillscard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faHtml5, faReact, faJsSquare, faNode, faGitAlt, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faFile, faGem, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Skillsrow.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const Skillscard = () => {
  return <div className="skills-card">
    <div className="skills-row-between">
      <div className="skills-row-column" data-aos="zoom-in-left"><FontAwesomeIcon icon={faCss3Alt} size="5x" color="#0073ff" /><p>CSS</p></div>
      <div className="skills-row-column" data-aos="zoom-in-right"><FontAwesomeIcon icon={faHtml5} size="5x" color="#f30" /><p>HTML</p></div>
    </div>
    <div className="skills-row-between">
      <div className="skills-row-column" data-aos="zoom-in-left"><FontAwesomeIcon icon={faJsSquare} size="4x" color="#ffe500" /><p>JavaScript</p></div>
      <div className="skills-row-column" data-aos="zoom-in-right"><FontAwesomeIcon icon={faReact} size="4x" color="#00bfff" /><p>React</p></div>
    </div>
    <div className="skills-row-bottom">
      <div className="skills-row-column" data-aos="zoom-in-right"><FontAwesomeIcon icon={faNode} size="4x" color="#39a23d" /><p>Node.js</p></div>
      <div className="skills-row-column" data-aos="zoom-in"><FontAwesomeIcon icon={faGem} size="4x" color="#ff001e" /><p>Ruby on Rails</p></div>
      <div className="skills-row-column" data-aos="zoom-in"><FontAwesomeIcon icon={faGitAlt} size="4x" color="#000000" /><p>Git</p></div>
      <div className="skills-row-column" data-aos="zoom-in-left"><FontAwesomeIcon icon={faGithubAlt} size="4x" color="#000000" /><p>GitHub</p></div>
    </div>
  </div >
}

export default Skillscard;
