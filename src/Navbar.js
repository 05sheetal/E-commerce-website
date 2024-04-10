import { NavLink, Route, Routes } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import Home from './Home'
import Jewellery from './Jewellery'
import Electronics from './Electronics'
import Mencloth from './Mencloth'
import Womencloth from './Womencloth'
import Item from './Item'



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
              <NavLink to="/Jewellery">Jewellery</NavLink>
            </li>
            <li>
              <NavLink to="/Electronics">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/Mencloth">Men cloth</NavLink>
            </li>
            <li>
              <NavLink to="/Womencloth">women cloth</NavLink>
            </li>
          </ul>
        </div>
      </div>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Jewellery' element={<Jewellery></Jewellery>}></Route>
        <Route path='/Electronics' element={<Electronics></Electronics>}></Route>
        <Route path='/Mencloth' element={<Mencloth></Mencloth>}></Route>
        <Route path='/Womencloth' element={<Womencloth></Womencloth>}></Route>
        <Route path='/Item' element={<Item></Item>}></Route>
      </Routes>
    </nav>
  )
}

export default Navbar