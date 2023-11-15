import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountries}) => {
    const {name,flags,population,area,cca3}=country;
    const [visited,setVisited]=useState(false)

    const handleVisited=()=>{
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name : {name.common}</h3>
            <img src={flags.png}></img>
            <p>Population: {population}</p>
            <p>Area : {area}</p>
            <p>Code : {cca3}</p>
            <button>Mark visited</button>
            <button onClick={handleVisited}>{visited ? 'Visited':'Going'}</button>
            {
                visited ? 'I have Visited this country.' : `I want to visit ${name.common} `
            }
        </div>
    );
};

export default Country;