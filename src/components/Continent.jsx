import Country from './Country'
import {useState} from "react";

const Continent = ({name, code}) => {
  const [show, setShow] = useState(false)
  const [countries, setCountries] = useState([])

  const fetchData = async (code) => {
    const res = await fetch("https://countries.trevorblades.com", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
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

  const toggleContinents = () => {
    fetchData(code)
    setShow(prevState => !prevState)
  }

  return (
      <div>
        <div className='continent-container' onClick={toggleContinents}>{name}</div>
        {show && countries.map(country => (
            <Country key={country.code} code={country.code} country={country.name}/>
        ))}
      </div>
  )
}

export default Continent