import { useState, useEffect } from "react"

const useFetcher = (url) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect (() => {
    setLoading(true)
    const fetchMeals = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setData(data.meals)
      }
      catch (err) {
        setError (err)
      }
      finally {
        setLoading(false)
      }
    }
    fetchMeals ()
  }, [url])

  return { data, loading, error}
}

export default useFetcher