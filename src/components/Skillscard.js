import './Skillscard.css'
import Zoom from 'react-reveal/Zoom';


const Skillscard = () => {
    return <div className="skills-card">
        <Zoom left>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" width="100" height="100"></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" width="100" height="100"></img>
            <img src="https://www.kindpng.com/picc/m/23-237385_transparent-jquery-logo-png-html-css-logo-png.png" width="100" height="100"></img>
            </Zoom>
    </div>
}

export default Skillscard;