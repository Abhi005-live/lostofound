import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav
      style={{
        background: "#2c3e50",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        color: "white"
      }}
    >
      <h2>Lost & Found Portal</h2>

      <div>
        <Link to="/dashboard" style={{ color: "white", margin: "10px" }}>
          Dashboard
        </Link>

        <Link to="/report-lost" style={{ color: "white", margin: "10px" }}>
          Report Lost
        </Link>

        <Link to="/report-found" style={{ color: "white", margin: "10px" }}>
          Report Found
        </Link>
      </div>
    </nav>
  )
}

export default Navbar