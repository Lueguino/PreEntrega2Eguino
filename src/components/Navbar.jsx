import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className="logo"><h1>Lucia's Shop</h1></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link> </li>
                <li><Link className="menu-link" to="/productos">Productos</Link> </li>
                <li><Link className="menu-link" to="/productos/berries">Berries</Link> </li>
                <li><Link className="menu-link" to="/Nosotros">Nosotros</Link> </li>
            </ul>
        </nav>
    )
}

export default Navbar