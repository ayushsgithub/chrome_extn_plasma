// import { useState } from "react"

// function IndexPopup() {
//   const [data, setData] = useState("")

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         width: 200,
//         padding: 10
//       }}>
//       <h2>
//         Welcome to your
//         <a href="https://www.plasmo.com" target="_blank">
//           {" "}
//           Plasmo
//         </a>{" "}
//         Extension!
//       </h2>
//       <input onChange={(e) => setData(e.target.value)} value={data} />
//       <a href="https://docs.plasmo.com" target="_blank">
//         View Docs
//       </a>
//     </div>
//   )
// }

// export default IndexPopup



import { useReducer, useState } from "react"
 
import "./style.css"
 
function IndexPopup() {

  const [button, setButton] = useState(false)
  const [loading, setLoading] = useState(false)

  const handlefetch = () => {
    setLoading(true)
    setButton(false)
    setTimeout(() => {
      setButton(true)
      setLoading(false)
    }, 3000);
  }

  return (
    <div className="w-[500px] h-[500px] bg-blue-500 flex flex-col space-y-6 justify-center items-center relative">
      <div className="text-white absolute top-28 text-2xl">
      {button ? "Your country is India and city is Dumraon": ""} 
      </div>
      <button onClick={handlefetch} className="bg-blue-700 text-xl rounded-full p-4 text-white hover:bg-blue-800">
        {loading ? "Loading..." : "Show My Location"}
      </button>
    </div>
  )
}
 
export default IndexPopup
