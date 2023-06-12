import { useState } from 'react';
import '../App.css';

function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [buttonText, setButtonText] = useState('Submit');

    const handleSubmit = (e, email, message) => {
        e.preventDefault();

        // Disable the button and change the text
        setButtonDisabled(true);

        //Create the POST request which will be sent to the backend
        const req = new XMLHttpRequest();
        req.open("POST", "http://localhost:3002/email");
        req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

        const body = JSON.stringify({
            email: email,
            message: message
        });

        req.onload = () => {
            if (req.readyState === 4 && req.status === 201) {
                console.log(JSON.parse(req.responseText));
            } else {
                console.log(`Error: ${req.status}`);
            }
        };
        req.send(body);

        //Reflect in the UI that an email has been sent
        setButtonText('Email sent!')

        // Simulate a delay of 2 seconds
        setTimeout(() => {
            // Re-enable the button and change the text back to 'Submit'
            setButtonDisabled(false);
            setButtonText('Submit');
        }, 2000);
    };

    return (
        <div>
            <section id="contact" />
            <div className="bg-blue-950 font-bold text-amber-600 pb-24">
                <div className="text-center">
                    <text className="pt-16 text-5xl inline-block"> Contact Me! </text>
                </div>
                <form className="flex flex-col w-3/5 mx-auto m-8 my-20">
                    <text className="text-xl"> Your email: </text>
                    <input className="h-8 my-4 pl-2 rounded-md"
                        content={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder='Your email here'
                    />
                    <text className="text-xl"> Your message: </text>
                    <textarea className="my-4 h-64 rounded-md pl-2 pt-1"
                        content={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                        placeholder='Your message here'
                        onKeyDown={(event) => { handleKeyDown(event) }}
                    />
                    <button className={`bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-full ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={(e) => handleSubmit(e, email, message)}
                        disabled={isButtonDisabled}>
                        {buttonText}
                    </button>
                </form>
            </div>
        </div>
    );
}

function handleKeyDown(event) {
    if (event.key === "Tab") {
        event.preventDefault();
        var textarea = event.target;
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        textarea.value = textarea.value.substring(0, start) + "\t" + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
}

export default Contact