import '../App.css';

function AboutMe() {
    return (
        <div>
            <section id="aboutme"/>
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
                                I'm Luca, a Software Engineer at TomTom, passionate about building scalable and
                                efficient software solutions.
                                My work focuses on backend development, automation, and optimizing critical services for
                                electric vehicles.
                            </p>
                            <br/>
                        </div>
                        <div className="flex flex-row">
                            <span className="text-green-400">computer:~$</span>
                            <p className="pl-2">
                                Having studied Computer Science and Engineering at TU Delft, I developed a strong
                                foundation in software engineering and problem-solving.
                                My experience spans working with large-scale infrastructure, AI-driven tools, and
                                high-performance systems.
                            </p>
                            <br/>
                        </div>
                        <div className="flex flex-row">
                            <span className="text-green-400">computer:~$</span>
                            <p className="pl-2">
                                I thrive on solving complex engineering challenges and continuously improving software
                                performance and reliability.
                                With a keen eye for innovation, I enjoy collaborating with teams to create impactful
                                technology solutions.
                            </p>
                            <br/>
                        </div>
                        <div className="flex flex-row">
                            <span className="text-green-400">computer:~$</span>
                            <p className="pl-2">
                                Feel free to explore my projects and reach out to discuss exciting opportunities.
                            </p>
                            <br/>
                        </div>
                        <div className="flex flex-row">
                            <span className="text-green-400">computer:~$</span>
                            <p className="pl-2 animate-blink">| </p>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
