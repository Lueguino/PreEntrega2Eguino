import { createContext, useEffect, useState } from "react";

export const CartContext = createContext ();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(carritoInicial);
  
    const agregarAlCarrito = (item, cantidad) => {
      const itemAgregado = {...item, cantidad};
  
    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = carrito.find((producto) => producto.id === itemAgregado.id);
  
      if (estaEnElCarrito) {
        estaEnElCarrito.cantidad += cantidad;
        setCarrito(nuevoCarrito);
      } else {
        nuevoCarrito.push(itemAgregado);
      }
      setCarrito(nuevoCarrito);
    }
    
    const cantidadEnCarrito = () => {
      return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }
  
    const preciototal = () => {
      return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }
  
    const vaciarCarrito = () => {
      setCarrito([]);
    }

    useEffect (() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])

    return ( 
    <CartContext.Provider value={{carrito, 
    agregarAlCarrito, 
    cantidadEnCarrito, 
    preciototal, 
    vaciarCarrito
    }}>{children}
    </CartContext.Provider>
    )
} 