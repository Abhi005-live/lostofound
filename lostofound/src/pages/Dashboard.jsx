import { useState } from "react"
import Navbar from "../components/Navbar"
import ItemCard from "../components/ItemCard"

function Dashboard() {

  const [items] = useState([
    {
      id: 1,
      title: "Lost Wallet",
      description: "Black wallet lost near library",
      location: "Library",
      date: "2026-03-25",
      type: "lost",
      image: "https://godbolegear.com/cdn/shop/files/BlackLeatherCoinPocketWallet.jpg?v=1686498152&width=1445"
    },
    {
      id: 2,
      title: "Found Phone",
      description: "Samsung phone",
      location: "Wow Momos",
      date: "2026-03-24",
      type: "found",
      image: "https://static.toiimg.com/thumb/msid-129796346%2Cimgsize-25482%2Cwidth-400%2Cresizemode-4/samsung-galaxy-s26-ultra-review.jpg"
    },
    {
      id: 3,
      title: "Lost Keys",
      description: "Bike keys with red keychain",
      location: "CS Parking Area",
      date: "2026-03-23",
      type: "lost",
      image: "https://store.royalenfield.com/media/catalog/product/d/a/day_401065.jpg"
    }
  ])

  const [search, setSearch] = useState("")

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>

      <Navbar />

      <div style={{ padding: "30px" }}>

        <h2>Lost & Found Dashboard</h2>

        <input
          placeholder="Search items..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <div style={{marginTop:"20px", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px,1fr))", gap:"20px"}}>

          {filteredItems.map(item => (
            <ItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              location={item.location}
              date={item.date}
              image={item.image}
            />
          ))}

        </div>

      </div>

    </div>
  )
}

export default Dashboard