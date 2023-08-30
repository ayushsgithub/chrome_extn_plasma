import { useState } from "react" 
import "./style.css"
import axios from "axios"
 
function IndexPopup() {

  const [button, setButton] = useState(false)
  const [loading, setLoading] = useState(false)
  const [ip, setIp] = useState()

  const handlefetch = async () => {
    setLoading(true)
    setButton(false)
    setTimeout(() => {
      setButton(true)
      setLoading(false)
    }, 3000);

    const response = await axios.get('http://api.ipify.org');
    const ip = response.data;
    setIp(ip)
  }

  return (
    <div className="w-[500px] h-[500px] bg-blue-500 flex flex-col space-y-6 justify-center items-center relative">
      <div className="text-white absolute top-28 text-2xl">
      {button ? `Your IP address is ${ip}`: ""} 
      </div>
      <button onClick={handlefetch} className="bg-blue-700 text-xl rounded-full p-4 text-white hover:bg-blue-800">
        {loading ? "Loading..." : "Show My Location"}
      </button>
    </div>
  )
}
 
export default IndexPopup
