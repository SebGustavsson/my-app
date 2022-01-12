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
      <AboutCard />
      <MySkills />
      <Skillscard />
    </div>
  );
}

export default App;
