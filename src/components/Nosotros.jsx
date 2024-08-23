import React, { useEffect } from "react"

const Nosotros = () => {
    useEffect(() => {

        const clickear = () => {
            console.log("click");
        }
        window.addEventListener("click", clickear)

        return () => {
            window.removeEventListener("click", clickear)

        }
        }, [])

    return (
        <div className="container"> 
            <h1 className="main-title">Nosotros</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At repellendus aliquam expedita quidem soluta? Non quod aliquam, veniam molestiae nam praesentium autem reiciendis molestias dolorum laboriosam accusantium at perferendis saepe?</p>
        </div>
    )
}

export default Nosotros