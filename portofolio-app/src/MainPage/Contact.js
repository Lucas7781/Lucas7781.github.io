import { useState } from 'react';
import '../App.css';

function Contact() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div>
            <section id="contact"/>
            <div class=" bg-blue-950 min-h-screen font-bold text-amber-600">
                <div class="text-center">
                    <text class="pt-16 text-5xl inline-block"> Contact Me! </text>
                </div>
                <form class="flex flex-col w-3/5 mx-auto m-8 my-20">
                    <text class="text-xl"> Your email: </text>
                    <input class="h-8 my-4 pl-2 rounded-md"
                        content={name} 
                        onChange={(e) => {setName(e.target.value)}}
                        placeholder='Your email here'
                    />
                    <text class="text-xl"> Your message: </text>
                    <textarea class="my-4 h-64 rounded-md pl-2 pt-1"
                        content={message}
                        onChange={(e) => {setMessage(e.target.value)}}
                        placeholder='Your message here'
                        onKeyDown={(event) => {handleKeyDown(event)}}
                    />
                    <button class="bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-full">
                        Submit
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

export default Contact;
