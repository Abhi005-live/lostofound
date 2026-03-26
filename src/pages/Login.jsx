import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if(username && password){
      navigate("/dashboard")
    } else {
      alert("Enter username and password")
    }
  }

  return (
    <div style={{padding:"40px"}}>

      <h2>Login</h2>

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

      <button onClick={handleLogin}>
        Login
      </button>

      <br/><br/>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>

    </div>
  )
}

export default Login