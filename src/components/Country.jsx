import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountires,handleVisitedFlags}) => {
    const {name,flags,population,area,cca3}=country;
    const [visited,setVisited]=useState(false)

    const handleVisited=()=>{
        setVisited(!visited)
    }

    // const passWithParams=()=>{
    //     handleVisitedCountries(country)
    // }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name : {name.common}</h3>
            <img src={flags.png}></img>
            <p>Population: {population}</p>
            <p>Area : {area}</p>
            <p>Code : {cca3}</p>
            <button onClick={()=>handleVisitedCountires(country)}>Mark visited</button>
            <br></br>
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br></br>
            <button className='visited' onClick={handleVisited}>{visited ? 'Visited':'Going'}</button>
            <br></br>
            {
                visited ? 'I have Visited this country.' : `I want to visit ${name.common} `
            }
        </div>
    );
};

export default Country;