import { Scrollchor } from 'react-scrollchor';
import { gsap } from 'gsap';
import '../App.css';
import { useEffect, useRef } from 'react';

function Intro() {
  return (
    <div>
      <section id="intro" />
      <div className="bg-gradient-to-b from-blue-950 to-blue-900 min-h-screen flex flex-row justify-between">
        <div className="flex flex-col justify-around pl-5 md:pl-20">
          <img className="w-24 object-scale-down" src='image1.png' alt="logo1" />
          <img className="w-28 object-scale-down" src='image2.png' alt="logo2" />
          <img className="w-24 object-scale-down" src='image3.png' alt="logo3" />
        </div>
        <div className="flex flex-col justify-center">
          <NameComponent />
          <ButtonGroup />
        </div>
        <div className="flex flex-col justify-around pr-5 md:pr-20">
          <img className="w-24 object-scale-down" src='image4.png' alt="logo4" />
          <img className="w-24 object-scale-down" src='image5.png' alt="logo5" />
          <img className="w-24 object-scale-down" src='image6.png' alt="logo6" />
        </div>
      </div>
    </div>
  );
}

const NameComponent = () => {
  const name = "Vlad Luca Spătaru";
  const characters = name.split('');
  const characterRefs = useRef([]);

  useEffect(() => {
    gsap.from(characterRefs.current, {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      delay: 0.02,
      duration: 0.5,
      ease: 'power2.out'
    });
  }, []);

  return (
    <div className="text-amber-600 text-center text-lg md:text-4xl lg:text-7xl font-bold">
      {characters.map((character, index) => (
        <span
          key={index}
          ref={el => (characterRefs.current[index] = el)}
          className={`inline-block ${character === ' ' ? 'ml-2 md:ml-4' : ''}`}
        >
          {character}
        </span>
      ))}
    </div>
  );
};

const ButtonGroup = () => {
  const buttons = [
    { id: 0, text: 'About Me' },
    { id: 1, text: 'Projects' },
    { id: 2, text: 'Contact' }
  ];

  const characterRefs = useRef([]);

  useEffect(() => {
    gsap.from(characterRefs.current, {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      delay: 0.02,
      duration: 0.5,
      ease: 'power2.out'
    });
  }, []);

  return (
    <div className="justify-end text-xs lg:text-xl xl:text-2xl font-bold flex text-white">
      {buttons.map(button => (
        <button
          key={button.id}
          className="border-8 border-transparent hover:text-amber-600"
        >
          <Scrollchor to={`#${button.text.toLowerCase().replace(/\s/g, "")}`}>
            {button.text.split('').map((character, index) => (
              <span
                key={index}
                ref={el => (characterRefs.current.push(el))}
              >
                {character}
              </span>
            ))}
          </Scrollchor>
        </button>
      ))}
    </div>
  );
};

export default Intro;
