import testDataURL from "raw-env:./test.json"
import { useEffect, useState } from "react" 
import "./style.css"
// import axios from "axios"

function IndexPopup() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(testDataURL)
      .then((res) => res.json())
      .then((data) => setData(data))
  })

  const [button, setButton] = useState(false)
  const [loading, setLoading] = useState(false)
  // const [ip, setIp] = useState()
  const [country, setCountry] = useState()
  const [city, setCity] = useState()
    const key = process.env.PLASMO_PUBLIC_API_KEY

  const handleFetch = async () => {
    setLoading(true);
    setButton(false);
    try {

      // ipify api
      // const response = await axios.get('https://api.ipify.org?format=json');
      // setIp(response.data.ip);

      // ipinfo.io api
      const request = await fetch(`https://ipinfo.io/json?token=${key}`)
      const jsonResponse = await request.json()
      setCountry(jsonResponse.country)
      setCity(jsonResponse.city)
      console.log(jsonResponse.ip, jsonResponse.country)

    } catch (error) {
      console.error('Error fetching IP:', error);
    }
    setLoading(false);
    setButton(true);
  };


  return (
    <div className="w-[500px] h-[500px] bg-gradient-to-bl from-white to-gray-300 flex flex-col space-y-6 justify-center items-center relative">
      <div className="text-gray-700 text-2xl font-medium absolute top-28">
      {button ? `Your country is ${country} and city is ${city}`: ""} 
      </div>
      <button onClick={handleFetch} className="bg-gradient-to-b from-blue-500 to-blue-700 text-xl rounded shadow-xl p-4 text-white hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-800 focus:outline-none focus:ring-1 focus:ring-violet-300">
        {loading ? "Loading..." : "Show My Location"}
      </button>
    </div>
  )
}
 
export default IndexPopup
