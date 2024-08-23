import React, { useState } from "react";

const ItemCount =( {item} ) => {

    const [cantidad, setCantidad] = useState(1);
    return (
        <div>
            <div className="item-count">
                <button onClick={ () => { cantidad >1 && setCantidad(cantidad - 1 ) } }>-</button>
                <p>{cantidad}</p>
                <button onClick={ () => { setCantidad(cantidad + 1 ) } }>+</button>

            </div>
            <button className="agregar-al-carrito">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount