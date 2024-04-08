import { NavLink, Route, Routes } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import Home from './Home'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">jewllery</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/about">men cloth</NavLink>
            </li>
            <li>
              <NavLink to="/contact">women cloth</NavLink>
            </li>
          </ul>
        </div>
      </div>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </nav>
  )
}

export default Navbar