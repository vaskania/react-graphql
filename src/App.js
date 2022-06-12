import {useState, useEffect} from 'react'
import Continent from "./components/Continent";
import useFetch from "./hooks/useFetch";
import {GET_ALL_CONTINENTS} from "./query/data";

const App = () => {
  const [continents, setContinents] = useState([])
  const data = useFetch(GET_ALL_CONTINENTS)

  useEffect(() => {
    setContinents(data.data.continents)
  }, [data])


  return (
      <div>
        {continents && continents.map(continent => (
                <Continent key={continent.code} code={continent.code} name={continent.name}/>
            )
        )}
      </div>

  )
}

export default App;
