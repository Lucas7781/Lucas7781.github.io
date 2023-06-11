import '../App.css';
const description = `As a highly motivated Bachelor of Computer Science and Engineering student at TU Delft, 
I possess a genuine passion for software development, both as a profession and a personal interest. Over the course of my studies, 
I have honed my skills and gained a diverse range of knowledge, which I am eager to put into practice in a professional setting 
where I can make a meaningful impact. With a strong desire to contribute to the field of software development, 
I am confident in my ability to bring value to any team or project.`

function AboutMe() {
  return (
    <div>
        <section id="aboutme"/>
        <div class="bg-gradient-to-b from-blue-900 to-blue-950 min-h-screen flex flex-col font-bold text-amber-600">
          <text class="pt-16 text-5xl pb-20 text-center"> About Me </text>
          <div class="w-3/4 px-5 shadow-lg text-gray-100 text-sm subpixel-antialiased 
                      bg-slate-900 pb-6 pt-4 rounded-lg leading-normal overflow-hidden mx-auto">
              <div class="top mb-2 flex">
                  <div class="h-3 w-3 bg-red-500 rounded-full"></div>
                  <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                  <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
              <div class="mt-4 flex flex-row h-96 text-base">
                <span class="text-green-400">computer:~$</span>
                <text class="pl-2">
                    {description} 
                </text>
                <br/>
              </div>
          </div>
        </div>
    </div>
  );
}

export default AboutMe;
