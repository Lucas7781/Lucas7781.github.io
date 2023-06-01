import { useState } from 'react';
import '../App.css';

function Contact() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div>
            <section id="contact"/>
            <div class=" bg-blue-950 min-h-screen flex flex-col font-bold text-center text-amber-600">
                <text class="pt-16 text-2xl"> If you wish to contact me, send me an email through the following form </text>
                <form>
                    <label> Text input: </label>
                    <input type="text" 
                        content={name} 
                        onChange={(e) => {setName(e.target.value)}}
                    />
                    <textarea 
                        content={message} 
                        onChange={(e) => {setMessage(e.target.value)}} 
                        placeholder='Your message here'
                    />
                </form>
            </div>
        </div>
    );
}

export default Contact;
