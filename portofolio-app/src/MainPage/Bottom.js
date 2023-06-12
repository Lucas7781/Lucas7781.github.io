import '../App.css';

function Bottom() {
    return (
        <div>
            <div className=" bg-slate-900 min-h-fit flex flex-column pr-6 align-middle justify-center">
                <a className='p-3' href='https://github.com/Lucas7781' target="_blank" rel="noreferrer">
                    <img className="h-10 object-scale-down brightness-75" src='github-mark-white.svg' alt="Github" />
                </a>
                <a className='p-3' href='https://www.linkedin.com/in/spataruluca/' target="_blank" rel="noreferrer">
                    <img className="h-10 object-scale-down brightness-75" src='linkedin-icon-2.svg' alt="Github" />
                </a>
                <a className='p-3' href='mailto:spataruluca@gmail.com?subject=Contact from portofolio'>
                    <img className="h-10 object-scale-down brightness-75" src='gmail-icon.svg' alt="Github" />
                </a>
                <a className='p-3' href='CV.pdf' download>
                    <img className="h-10 object-scale-down brightness-75" src='cv-icon.png' alt="Curriculum Vitae" />
                </a>
            </div>
        </div>
    );
}

export default Bottom;
