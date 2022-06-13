import Country from './Country'
import { useState } from "react";

const Continent = ({ name, code }) => {
  const [show, setShow] = useState(false)
  const [countries, setCountries] = useState([])


  const fetchData = async (code) => {
    const res = await fetch("https://countries.trevorblades.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query {
            continent (code: "${code}"){
              countries {
                          name
                          code
                     }
                  }
              }
      `
      })
    })
    const data = await res.json()
    setCountries(data.data.continent.countries)
  }

  const toggleCountries = () => {
    fetchData(code)
    setShow(prevState => !prevState)
  }

  return (
     <div>
       <div className='continent-container' onClick={toggleCountries}>{name}</div>
       {show && countries.map(country => (
          <Country key={country.code} code={country.code} country={country.name} toggleCountries={toggleCountries}/>
       ))}
     </div>
  )
}

export default Continent