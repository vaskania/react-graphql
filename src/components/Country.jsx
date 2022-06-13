import {useState} from "react";
import Language from "./Language";

const Country = ({country, code, toggleCountries}) => {
  const [show, setShow] = useState(false)
  const [languages, setLanguages] = useState([])

  const fetchData = async (code) => {
    const res = await fetch("https://countries.trevorblades.com", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        query: `
        query {
            country (code: "${code}"){
                languages{
                    name
               }
             }
         }
      `
      })
    })

    const data = await res.json()
    setLanguages(data.data.country.languages)
  }


  const toggleLanguage = () => {
    fetchData(code)
    setShow(prevState => !prevState)
  }

  return (
      <div>
        <div className='country-container' onClick={toggleLanguage}>{country}</div>
        {show && languages.map(language => (
            <Language key={language.name} language={language.name} toggleCountries={toggleCountries}/>
        ))}
      </div>
  )
}

export default Country