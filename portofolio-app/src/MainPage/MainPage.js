import '../App.css';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Intro from './Intro';

function MainPage() {
  return (
    <div>  
      <Intro/>
      <AboutMe/>
      <Contact/>
    </div>
  );
}

export default MainPage;
