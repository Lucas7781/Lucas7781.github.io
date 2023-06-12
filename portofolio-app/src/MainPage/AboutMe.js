import '../App.css';

function AboutMe() {
  return (
    <div>
      <section id="aboutme" />
      <div className="bg-gradient-to-b pb-20 from-blue-900 to-blue-950 min-h-fit flex flex-col">
        <p className="pt-16 text-5xl pb-20 text-center font-bold text-amber-600"> About Me </p>
        <div className="w-3/4 px-5 shadow-lg text-gray-100 text-sm subpixel-antialiased 
                      bg-slate-900 pb-6 pt-4 rounded-lg leading-normal overflow-hidden mx-auto">
          <div className="top mb-2 flex">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="mt-4 text-base h-96 overflow-auto">
            <div className="flex flex-row">
              <span className="text-green-400">computer:~$</span>
              <p className="pl-2">
                I'm Luca, a passionate Bachelor of Computer Science and Engineering student at TU Delft.
                With a genuine love for software development, I've dedicated my academic journey to honing my skills and gaining diverse knowledge.
              </p>
              <br />
            </div>
            <div className="flex flex-row">
              <span className="text-green-400">computer:~$</span>
              <p className="pl-2">
                My studies have provided me with a solid foundation in programming languages, software engineering principles, and problem-solving techniques.
                Through challenging projects and collaborations with diverse teams, I've showcased my ability to deliver high-quality software solutions.
              </p>
              <br />
            </div>
            <div className="flex flex-row">
              <span className="text-green-400">computer:~$</span>
              <p className="pl-2">
                I'm driven by the transformative power of technology and eager to contribute to projects that make a meaningful impact.
                With strong communication skills and a collaborative mindset, I thrive in environments where ideas are shared and collective efforts lead to remarkable outcomes.
                I'm a continuous learner, staying up-to-date with the latest advancements in the field.
              </p>
              <br />
            </div>
            <div className="flex flex-row">
              <span className="text-green-400">computer:~$</span>
              <p className="pl-2">
                I invite you to explore my projects and connect with me to discuss exciting opportunities.
              </p>
              <br />
            </div>
            <div className="flex flex-row">
              <span className="text-green-400">computer:~$</span>
              <p className="pl-2 animate-blink">| </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
