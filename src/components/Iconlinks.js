import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import './Iconlinks.css'



const IconLinks = () => {
  return <div className="iconlinks">
    <a href="https://www.linkedin.com/in/sebastian-gustavsson-62b563200/" target="_blank">
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    <a href="https://github.com/SebGustavsson" target="_blank">
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    <a href="https://drive.google.com/file/d/1l6V_8Ui4aHVz842tTt_KmGkXtmwg2L0-/view?usp=sharing" target="_blank">
      <FontAwesomeIcon icon={faFile} size="2x" />
    </a>
  </div >
}

export default IconLinks;
