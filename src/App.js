import './App.css';
import Banner from './components/Banner';
import AboutCard from './components/Aboutcard.js';
import AboutMe from './components/Aboutme';
import Skillscard from './components/Skillscard';
import MySkills from './components/Myskills';

function App() {
  return (
    <div >
      <Banner />
      <AboutMe />
      <AboutCard 
      logo="https://dwj199mwkel52.cloudfront.net/assets/core/svg/logo-lewagon-5ff5f090209d8d3bf493790d7935822208011748adb83a2fbc6bcaaf05a289ef.svg" 
      avatar="https://avatars.githubusercontent.com/u/89755646?v=4"
      width="200" 
      height="200"
      />
      <MySkills />
      <Skillscard />
    </div>
  );
}

export default App;
