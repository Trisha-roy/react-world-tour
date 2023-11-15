import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country";
import './Countries.css'


const countries = () => {
    const [countries,setCountries]=useState([]);
    const [visitedCountries,setVisitedCountries]=useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

    const handleVisitedCountires=country=>{

    }
    return (
        <div>
            <h3>Total Country: {countries.length}</h3>
            <div>
                <h3>Visited Countries : </h3>
                <ul>

                </ul>
            </div>
        <div className="country-container">
            <h3>Countries</h3>
            {
                countries.map(country=><Country handleVisitedCountires={handleVisitedCountires} country={country}> </Country>)
            }
        </div>
       </div> 
    );
};

export default countries;