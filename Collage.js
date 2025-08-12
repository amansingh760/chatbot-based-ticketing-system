import React from 'react';
import './Collage.css';

const sites = [
    {
        name: 'Taj Mahal',
        image: './tajmahal.jpeg',
        url: 'https://en.wikipedia.org/wiki/Taj_Mahal'
    },
    {
        name: 'Sarnath Museum',
        image: './sarnath.webp',
        url: 'https://en.wikipedia.org/wiki/Sarnath_Museum'
    },
    {
        name: 'Redfort',
        image: './red fort.webp',
        url: 'https://en.wikipedia.org/wiki/Red_Fort'
    },
    {
        name: 'Allahabad Museum',
        image: './allahabadm.jpg',
        url: 'https://en.wikipedia.org/wiki/Allahabad_Museum'
    },
    {
        name: "Delhi illusion museum",
        image: './delhim.webp',
        url: 'https://museumofillusions.in/'
    },
    {
        name: "Chhatrapati Shivaji MVS",
        image: './CSMVS.jpeg',
        url: 'https://en.wikipedia.org/wiki/Chhatrapati_Shivaji_Maharaj_Vastu_Sangrahalaya'
    },
    {
        name:"Hampi",
        image:'hampi.jpeg',
        url:'https://en.wikipedia.org/wiki/Hampi'
    },
    {
        name:"Mahabalipuram",
        image:'maha.jpeg',
        url:'https://en.wikipedia.org/wiki/Mamallapuram'
    },
    {
        name:"Victoria Memorial",
        image:'vm.jpeg',
        url:'https://en.wikipedia.org/wiki/Victoria_Memorial,_Kolkata'
    },
    {
        name:"Salar Jung Museum",
        image:'sj.jpeg',
        url:'https://en.wikipedia.org/wiki/Salar_Jung_Museum'
    },
    {
        name:"Sanchi Stupa",
        image:'ss.jpeg',
        url:'https://en.wikipedia.org/wiki/Sanchi'
    }

    
    // Add more sites as needed
];

const Collage = () => {
    return (
        <div className="collage-container">
            {sites.map((site, index) => (
                <a href={site.url} key={index} className="collage-item">
                    <img src={site.image} alt={site.name} className="collage-image" />
                    <div className="collage-title">{site.name}</div>
                </a>
            ))}
        </div>
    );
};

export default Collage;
