import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country";
import './Countries.css'


const countries = () => {
    const [countries,setCountries]=useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div className="country-container">
            <h3>Countries</h3>
            {
                countries.map(country=><Country country={country}> </Country>)
            }
        </div>
    );
};

export default countries;