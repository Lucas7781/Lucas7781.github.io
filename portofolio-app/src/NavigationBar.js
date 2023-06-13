import { Scrollchor } from 'react-scrollchor';
import './App.css';

function NavigationBar() {
    return (
        <div>
            <div className=" bg-slate-900 min-h-fit flex pr-6 align-middle text-slate-300 justify-between">
                <button className="border-8 border-transparent hover:text-amber-600 font-serif text-2xl pl-4">
                    <Scrollchor to="#intro" >
                        VLS
                    </Scrollchor>
                </button>
                <div className='justify-end text-sm sm:text-xl font-bold flex'>
                    <button className="border-8 border-transparent hover:text-amber-600">
                        <Scrollchor to="#intro" >
                            Home
                        </Scrollchor>
                    </button>
                    <button className="border-8 border-transparent hover:text-amber-600">
                        <Scrollchor to="#aboutme">
                            About Me
                        </Scrollchor>
                    </button>
                    <button className="border-8 border-transparent hover:text-amber-600">
                        <Scrollchor to="#projects">
                            Projects
                        </Scrollchor>
                    </button>
                    <button className="border-8 border-transparent hover:text-amber-600">
                        <Scrollchor to="#contact">
                            Contact
                        </Scrollchor>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;
