import '../App.css';

function Intro() {
  return (
    <div>
      <section id="intro" />
      <div className="bg-gradient-to-b from-blue-950 to-blue-900 min-h-screen flex flex-row justify-around">
        <div className="flex flex-col justify-around">
          <img className="w-28 object-scale-down" src='image1.png' alt="logo1" />
          <img className="w-28 object-scale-down" src='image2.png' alt="logo2" />
          <img className="w-28 object-scale-down" src='image3.png' alt="logo3" />
        </div>
        {/* <div className="flex flex-col justify-center">
          <p className="text-amber-600 text-center text-5xl font-bold"> Luca's Portofolio </p>
        </div> */}
        <div className="flex flex-col justify-around object-contain">
          <img className="w-28 object-scale-down" src='image4.png' alt="logo4" />
          <img className="w-28 object-scale-down" src='image5.png' alt="logo5" />
          <img className="w-28 object-scale-down" src='image6.png' alt="logo6" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
