export default function Navbar() {

  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">📖</span>
        <h1>useBooks</h1>
      </div>
      <input className="search" type="text" placeholder="Search books..."  />
      <p className="number-result">Found X results</p>
    </nav>
  )
}