import { useState } from 'react';
import '../App.css';
import PortofolioModal from './Modals/PortofolioModal';
import DiscordBotModal from './Modals/DiscordBotModal';

function Projects() {
    const [showPortofolioModal, setShowPortofolioModal] = useState(false)
    const [showDiscordBotModal, setShowDiscordBotModal] = useState(false)


    return (
        <div className='bg-blue-950 flex flex-col justify-center pb-20'>
            <section id="projects" />
            <p className="pt-16 text-5xl pb-20 text-center font-bold text-amber-600"> My Projects </p>
            <div className='w-3/4 flex flex-row justify-around mx-auto'>
                <div className="flex flex-col sm:w-1/3 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-xl">
                    <img className="rounded-t-lg" src="portofolio-snip.png" alt="Portofolio Example" />
                    <div className="p-5 h-full flex flex-col justify-between">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Portofolio Page</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Portofolio page in order to showcase personal programming skills and web design abilities.</p>
                        </div>
                        <button
                            className='self-start inline-flex items-center px-3 py-2 mt-auto text-sm font-medium text-center text-white bg-amber-600 hover:bg-amber-800 rounded-lg'
                            type='button'
                            onClick={() => setShowPortofolioModal(true)}>
                            Read more
                        </button>
                    </div>
                </div>
                <div className="flex flex-col sm:w-1/3 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-xl">
                    <img className="rounded-t-lg" src="js-bot.png" alt="Portofolio Example" />
                    <div className="p-5 h-full flex flex-col justify-between">
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Discord Bot</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A JavaScript implementation of a Discord bot, with features regarding music and message management. </p>
                        </div>
                        <button
                            className='self-start inline-flex items-center px-3 py-2 mt-auto text-sm font-medium text-center text-white bg-amber-600 hover:bg-amber-800 rounded-lg'
                            type='button'
                            onClick={() => setShowDiscordBotModal(true)}>
                            Read more
                        </button>
                    </div>
                </div>
            </div>
            {showPortofolioModal? <PortofolioModal disable={setShowPortofolioModal}/> : null}
            {showDiscordBotModal? <DiscordBotModal disable={setShowDiscordBotModal}/> : null}
        </div>
    );
}

export default Projects;
