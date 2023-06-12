import '../App.css';
import AboutMe from './AboutMe';
import Bottom from './Bottom';
import Contact from './Contact';
import Intro from './Intro';
import Projects from './Projects';

function MainPage() {
  return (
    <div>  
      <Intro/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Bottom/>
    </div>
  );
}

export default MainPage;
