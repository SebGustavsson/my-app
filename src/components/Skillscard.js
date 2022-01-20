import './Skillscard.css'
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faHtml5, faReact, faJsSquare, faNode, faGitAlt, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faFile, faGem } from '@fortawesome/free-solid-svg-icons'
import './Skillsrow.css'
//import AOS from 'aos';
//import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
//AOS.init();

const Skillscard = () => {
    return <div className="skills-card" data-aos="fade-in">
        <div className="skills-row-between">
           <div className="skills-row-column"><FontAwesomeIcon icon={faCss3Alt} size="5x" color="#0073ff" /><p>CSS</p></div>
           <div className="skills-row-column"><FontAwesomeIcon icon={faHtml5} size="5x" color="#f30" /><p>HTML</p></div>
        </div>
        <div className="skills-row-between">
        <div className="skills-row-column"><FontAwesomeIcon icon={faJsSquare} size="4x" color="#ffe500" /><p>JavaScript</p></div>
        <div className="skills-row-column"><FontAwesomeIcon icon={faReact} size="4x" color="#00bfff" /><p>React</p></div>
        </div>
        <div className="skills-row-between">
        <div className="skills-row-column"><FontAwesomeIcon icon={faNode} size="4x" color="#39a23d" /><p>Node.js</p></div>
        <div className="skills-row-column"><FontAwesomeIcon icon={faGem} size="4x" color="#ff001e" /><p>Ruby on Rails</p></div>
        <div className="skills-row-column"><FontAwesomeIcon icon={faGitAlt} size="4x" color="#000000" /><p>Git</p></div>
        <div className="skills-row-column"><FontAwesomeIcon icon={faGithubAlt} size="4x" color="#000000" /><p>GitHub</p></div>
        </div>
            </div>
}

export default Skillscard;