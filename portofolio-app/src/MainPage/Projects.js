import '../App.css';

function Projects() {
    return (
        <div className='bg-blue-950 flex flex-col justify-center pb-20'>
            <section id="projects" />
            <p className="pt-16 text-5xl pb-20 text-center font-bold text-amber-600"> My Projects </p>
            <div className='w-3/4 flex flex-row justify-evenly mx-auto'>
                <div class="flex flex-col padding-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {/* <a href="#"> */}
                        <img class="rounded-t-lg" src="portofolio-snip.png" alt="Portofolio Example" />
                    {/* </a> */}
                    <div class="p-5 h-full flex flex-col justify-between">
                        <div>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Portofolio Page</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Portofolio page in order to showcase personal programming skills and web design abilities.</p>
                        </div>
                        <a href="#projects" class="self-start inline-flex items-center px-3 py-2 mt-auto text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                        </a>
                    </div>
                </div>
                <div class="flex flex-col padding-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {/* <a href="#"> */}
                        <img class="rounded-t-lg" src="js-bot.png" alt="Portofolio Example" />
                    {/* </a> */}
                    <div class="p-5 h-full flex flex-col justify-between">
                        <div>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Discord Bot</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A JavaScript implementation of a Discord bot, with features regarding music and message management. </p>
                        </div>
                        <a href="#projects" class="self-start inline-flex items-center px-3 py-2 mt-auto text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
