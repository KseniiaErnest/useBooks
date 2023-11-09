export default function Navbar({ children }) {


  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">📖</span>
        <h1>useBooks</h1>
      </div>
      {children}
      <p className="number-result">Found X results</p>
    </nav>
  )
}