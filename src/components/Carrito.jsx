import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

    const { carrito, preciototal, vaciarCarrito } = useContext(CartContext);
    const handleVaciar = () => {
        vaciarCarrito();

    } 
  return (
    <div className='container'>
        <h1 className='main-title'>Carrito</h1>
        
        {
            carrito.map((prod) => (
                <div key={prod.id}>  
                <br />
                <h3>{prod.titulo}</h3>
                <p>Precio unitario: ${prod.precio}</p>
                <p>Precio total: ${prod.precio * prod.cantidad}</p>
                <p>Cantidad: {prod.cantidad}</p>
                <br />
                </div>
            ))
        }

        { 
            carrito.length > 0 ? 
            <>
                <h2>Precio total: ${preciototal()}</h2> 
                <button onClick={handleVaciar}>Vaciar</button>
            </> :
            <h2>El carrito esta vacio</h2>
            }

    </div>
  )
}

export default Carrito
