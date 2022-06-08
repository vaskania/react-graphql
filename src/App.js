import {useState, useEffect} from 'react'
import {useQuery} from "@apollo/client";
import {GET_ALL_CONTINENTS} from "./query/data";

const App = () => {
  const {data, loading, error} = useQuery(GET_ALL_CONTINENTS)
  const [continents, setContinents] = useState([])

  useEffect(() => {
    if (!loading) {
      const arr = []
      data.continents.map(continent => arr.push(continent.name))
      setContinents(prevState => [...prevState,arr])
    }
  }, [data]);

  console.log(continents)
  return (
      <div>
        <button>get data</button>
        <div></div>
      </div>

  )
}

export default App;
