import './Contactcard.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const ContactCard = () => {
  return <div className="contact-card" data-aos="zoom-in">
    <a href="mailto:sebastian.gus@icloud.com"><h4>sebastian.gus@icloud.com</h4></a>
    <h4>Banner photo credits: <a href="https://www.moaalexandersson.com/" target="_blank">https://www.moaalexandersson.com/</a></h4>
  </div>
}

export default ContactCard;
