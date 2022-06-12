import {useEffect, useState} from 'react'

const url = "https://countries.trevorblades.com"

const useFetch = (query) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)


  useEffect(() => {
    const fetchData = async (query) => {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({query})
        })
        if (!res.ok) {
          throw Error('Could not fetch data')
        }
        const data = await res.json()
        setData(data.data)
        setError(null)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchData(query)
  }, [query]);

  return {data, error}
}

export default useFetch