import { useState } from "react"
import Navbar from "../components/Navbar"

function ReportLost() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = () => {
    alert("Lost item reported")
  }

  return (
    <div>

      <Navbar />

      <div style={{padding:"30px"}}>

        <h2>Report Lost Item</h2>

        <input
          placeholder="Item Name"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <br/><br/>

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />

        <br/><br/>

        <input
          placeholder="Location"
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
        />

        <br/><br/>

        <button onClick={handleSubmit}>
          Submit
        </button>

      </div>

    </div>
  )
}

export default ReportLost