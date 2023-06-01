import { Scrollchor } from 'react-scrollchor';
import './App.css';

function NavigationBar() {
  return (
    <div>
        <div class=" bg-slate-900 min-h-fit flex flex-row pr-6 align-middle justify-end text-xl font-bold text-center text-slate-300">
            <div>
                <button class="border-8 border-transparent hover:text-amber-600">
                    <Scrollchor to="#intro" >
                            Home
                    </Scrollchor>
                </button>
                <button class="border-8 border-transparent hover:text-amber-600">
                    <Scrollchor to="#aboutme">
                        About Me
                    </Scrollchor>
                </button>
                <button class="border-8 border-transparent hover:text-amber-600">Projects</button>
                <button class="border-8 border-transparent hover:text-amber-600">
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
