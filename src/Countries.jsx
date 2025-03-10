import Card from "./Card";
import { useState, useEffect } from "react";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try{
                const res = await fetch("https://xcountries-backend.azurewebsites.net/all");
                const data = await res.json();
                setCountries(data);
                console.log(data);
            }catch(err){
                console.error(err);
            }
        }
        fetchCountries();
    },[]);
    return (
        <div className="component">{countries.map((country) => (
                <Card key={country.abbr} name={country.name} flag={country.flag}/>
        ))}</div>
    );
};

export default Countries;