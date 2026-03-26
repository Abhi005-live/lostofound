import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const handleRegister = () => {

    if(username && password){
      alert("User Registered Successfully")

      navigate("/") // go back to login
    }
    else{
      alert("Enter username and password")
    }

  }

  return (
    <div style={{padding:"30px"}}>

      <h2>Register</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />

      <br/><br/>

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <br/><br/>

      <button onClick={handleRegister}>
        Register
      </button>

    </div>
  )
}

export default Register