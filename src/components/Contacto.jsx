import React from "react"

const Contacto = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviado") 
    }
    return (
        <div className="container"> 
            <h1 className="main-title">Contacto</h1>
                <form class="formulario" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Ingresa tu nombre" />
                    <input 
                        type="email"
                        placeholder="Ingresa tu e-mail"/>
                    
                    <button type="submit">Enviar</button>
                </form>

        </div> 

    )

}

export default Contacto