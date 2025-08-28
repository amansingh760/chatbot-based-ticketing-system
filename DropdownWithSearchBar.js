import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const DropdownWithSearchBar = ({ onSearch }) => {
    //const [query, setQuery] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [options, setOptions] = useState([]);
    const [tabledata, settabledata] = useState([]);


    useEffect(() => {
        fetch('https://ticketbooking-site.vercel.app/state-data')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setOptions(data);    // Set the data to state
            });
        // .catch((error) => {
        //     alert('something went wrong !');
        // });
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log('Selected option:', selectedOption);
        const response = await fetch('https://ticketbooking-site.vercel.app/get-museum-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "state": selectedOption }), // Send the selected option
        });

        if (!response.ok) {
            throw new Error('Network response was not ok'); // Handle network errors
        }

        const data = await response.json(); // Parse JSON response
        console.log('Success:', data);
        settabledata(data);
        // You can add further logic here, like sending data to an API

        setSelectedOption('');
    };



    return (
        <>
            {/* <div className="search-container">


            </div> */}

            <div className="container mt-4">
                <form onSubmit={handleSubmit}>
                    <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="search-input">
                        <option value="" disabled>Select the state</option>
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <button type="submit" className="search-button">Explore</button>
                </form>
                {tabledata.length > 0 ? (
                    <>

                        <h2>Bootstrap Table in React</h2>
                        <table className="table table-striped table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>state</th>
                                    <th>nameofmuseum</th>
                                    <th>nameofdistrict</th>
                                    <th>location</th>
                                    <th>openingtime</th>
                                    <th>closingtime</th>
                                    <th>ticketprice</th>
                                    <th>closingdays</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tabledata.map((row) => (
                                    <tr key={row._id}>
                                        <td>{row.state}</td>
                                        <td>{row.nameofmuseum}</td>
                                        <td>{row.nameofdistrict}</td>
                                        <td>{row.location}</td>
                                        <td>{row.openingtime}</td>
                                        <td>{row.closingtime}</td>
                                        <td>{row.ticketprice}</td>
                                        <td>{row.closingdays}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                ) : (
                    <p></p> // You can customize this message as needed
                )}
            </div>
        </>

    );
};

export default DropdownWithSearchBar;

