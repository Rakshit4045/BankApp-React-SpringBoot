import { useEffect, useState } from "react"

const useFetchCustomerApi = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const fetchApi = () => {
    fetch(url) 
    .then(response => {
      return response.json()
    })
    .then(json => {
      setLoading(false)
      setData(json)
    })
  };

  useEffect(() => {
    fetchApi();
  },[]);

  return { loading, data }
};

export default useFetchCustomerApi;


