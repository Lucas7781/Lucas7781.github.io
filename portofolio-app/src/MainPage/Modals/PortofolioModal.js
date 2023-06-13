import '../../App.css'

function PortofolioModal(props) {

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl shadow-xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-700 outline-none focus:outline-none">
                        {/*header*/}
                        <div className=" ps-5 pt-5 flex">
                            <h3 className="text-3xl font-semibold text-amber-600">
                                Portofolio Website
                            </h3>
                            <a className='pl-2 sm:pl-5 pt-1 pr-2' href='https://github.com/Lucas7781/Lucas7781.github.io' target="_blank" rel="noreferrer">
                                <img className="h-8 object-scale-down brightness-75" src='github-mark-white.svg' alt="Github" />
                            </a>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto text-white text-lg">
                            <p className="leading-relaxed">
                                This is a website specifically made for personal use in order to showcase
                                technical skills and web design abilities. It features multiple components and
                                a contact form which sends automatically an email to the owner of the website.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed">
                                For the website I made use of the following tech stack:
                            </p>
                            <ul className="p-4 list-disc leading-relaxed">
                                <li>ReactJS</li>
                                <li>Tailwind CSS</li>
                                <li>Express</li>
                                <li>Node.js</li>
                            </ul>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-3">
                            <button
                                className="bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-full"
                                type="button"
                                onClick={() => props.disable(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default PortofolioModal