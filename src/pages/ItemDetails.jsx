import { Link } from "react-router-dom"

function ItemCard({ id, title, description, location, date, image }) {
  return (
    <div>

      <img src={image} alt={title} style={{width:"100%", height:"150px"}} />

      <h3>{title}</h3>
      <p>{description}</p>
      <p><b>Location:</b> {location}</p>
      <p><b>Date:</b> {date}</p>

      <Link to={`/item/${id}`}>
        <button>View Details</button>
      </Link>

    </div>
  )
}

export default ItemCard