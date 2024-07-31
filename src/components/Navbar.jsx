import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <a href="#" className="logo"><h1>Lucia's Shop</h1></a>
            <ul className='menu'>
            <li><a className="menu-link" to="/">Inicio</a></li>
            <li><a className="menu-link" to="/">Nosotros</a></li>
            <li><a className="menu-link" to="/">Productos</a></li>
            <li><a className="menu-link" to="/">Contacto</a></li>
            </ul>
        </nav>
    )
}

export default Navbar