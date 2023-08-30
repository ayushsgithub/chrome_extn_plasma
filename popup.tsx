import { useEffect, useState } from "react" 
import "./style.css"
import axios from "axios"
 
function IndexPopup() {

  const [button, setButton] = useState(false)
  const [loading, setLoading] = useState(false)
  const [ip, setIp] = useState()

  const handleFetch = async () => {
    setLoading(true);
    setButton(false);

    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      setIp(response.data.ip);
    } catch (error) {
      console.error('Error fetching IP:', error);
    }

    setLoading(false);
    setButton(true);
  };


  return (
    <div className="w-[500px] h-[500px] bg-gray-400 flex flex-col space-y-6 justify-center items-center relative">
      <div className="text-white absolute top-28 text-2xl">
      {button ? `Your IP address is ${ip}`: ""} 
      </div>
      <button onClick={handleFetch} className="bg-gradient-to-b from-blue-600 to-blue-700 text-xl rounded shadow-xl p-4 text-white  hover:bg-blue-800">
        {loading ? "Loading..." : "Show My Location"}
      </button>
    </div>
  )
}
 
export default IndexPopup
