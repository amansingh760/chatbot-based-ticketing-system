import React, { useState } from 'react';
import Chatbot from './Chatbot'; // Import the Chatbot component
import './Chatbot.css'; // Ensure styles are applied

const ChatIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatbox = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="chat-icon" onClick={toggleChatbox}>
                <div className="help-message">Can I help you?</div>
                <center>
                    <img src={`${process.env.PUBLIC_URL}/Chatbot icon.jpeg`} alt="Chatbot Logo" className="chat-bubble" />
                </center>
            </div>
            {isOpen && <Chatbot />}
        </div>
    );
};

export default ChatIcon;
