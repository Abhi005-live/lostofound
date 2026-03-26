import { useState } from "react"
import Navbar from "../components/Navbar"

function ReportFound() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [image, setImage] = useState(null)

  const handleSubmit = () => {

    const item = {
      title,
      description,
      location,
      image,
      date: new Date().toLocaleDateString(),
      type: "found"
    }

    console.log(item)

    alert("Found item reported!")

  }

  return (
    <div>

      <Navbar />

      <div style={{padding:"20px"}}>

        <h2>Report Found Item</h2>

        <input
          placeholder="Item Name"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Location"
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
        />

        <br /><br />

        <input
          type="file"
          onChange={(e)=>setImage(URL.createObjectURL(e.target.files[0]))}
        />

        <br /><br />

        <button onClick={handleSubmit}>
          Submit
        </button>

      </div>

    </div>
  )
}

export default ReportFound