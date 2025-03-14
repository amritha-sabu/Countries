import Card from "./Card";
import { useState, useEffect } from "react";
import './Countries.css';
import Search from "./Search";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries");
                const data = await res.json();
                setCountries(data);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        fetchCountries();
    }, []);

    const filteredCountries = countries.filter((country) => 
    country.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Search setSearchTerm={setSearchTerm}/>
            <div className="component">
                {filteredCountries.length > 0 ? (
                    filteredCountries.map((country, index) => (
                        <Card key={index} name={country.common} flag={country.png} />
                    ))
                ) : (
                    <p>No matching countries found.</p>
                )}
            </div>
        </div>
    );
};

export default Countries;
