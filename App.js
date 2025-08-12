import React from 'react';
import DropdownWithSearchBar from './DropdownWithSearchBar';
import ChatIcon from './ChatIcon'; // Import the ChatIcon component
import Collage from './Collage' // Import the Collage component
import './App.css';

function App() {
    const handleSearch = (query) => {
        console.log('Searching for:', query); // Handle search logic here
    };

    return (
        <div className="animated-bg"> {/* Applying the animated background */}
         <header>
                <a href="/" className="logo-link">
                    <img src={`${process.env.PUBLIC_URL}/bg1.png`} alt="Website Logo" className="logo" />
                </a>
                <h1 className="title">Journey Through India's Cultural Heritage</h1>
            </header>

            <div className="BOT">
                <DropdownWithSearchBar onSearch={handleSearch} />
                 <Collage />  
                <ChatIcon />
            </div>
        </div>
    );
}

export default App;
