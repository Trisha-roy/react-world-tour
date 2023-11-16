import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country";
import './Countries.css'


const countries = () => {
    const [countries,setCountries]=useState([]);
    const [visitedCountries,setVisitedCountries]=useState([])
    const[visitedFlags,setVisitedFlags]=useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

    const handleVisitedCountires=country=>{
        console.log(country);
        const newVisitedCountry=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountry)
    }
    const handleVisitedFlags=flag=>{
        const newVisitedFlags=[...visitedFlags,flag]
        setVisitedFlags(newVisitedFlags)
    }
    return (
        <div>
            <h3>Total Country: {countries.length}</h3>
            <div>
                <h3>Visited Countries : {visitedCountries.length} </h3>
                
                {
                    visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
                }
                
            </div>
            <div className="flag-Container">
                {visitedFlags.map(flag =><img src={flag}></img>)}
            </div>
        <div className="country-container">
            <h3>Countries</h3>
            {
                countries.map(country=><Country key={country.cca3} handleVisitedCountires={handleVisitedCountires} handleVisitedFlags={handleVisitedFlags} country={country}> </Country>)
            }
        </div>
       </div> 
    );
};

export default countries;