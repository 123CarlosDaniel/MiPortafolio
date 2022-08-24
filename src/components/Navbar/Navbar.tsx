import { useState } from 'react';
import Hamburger from './Hamburger'
import './Navbar.css'
import './Hamburger.css'
const Navbar = () => {
  const [hamburger, setHamburger] = useState(false)

  return (
    <nav className="nav-container">
      <span className='nav-title'>Portfolio</span>
      <div className="nav-items">
        <ul className={hamburger ? 'items active': 'items'}>
          <li><a href="#principal">Who am I</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        {/* hamburger buttom */}
        <Hamburger hamburger={hamburger} setHamburger={setHamburger}/>
      </div>
    </nav>
  )
}

export default Navbar
