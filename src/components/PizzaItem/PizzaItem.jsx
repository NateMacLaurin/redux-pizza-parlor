import { useState } from 'react'


const PizzaItem = ({pizza}) => {

    const [isAdded, setIsAdded] = useState(false)

    const toggleCartStatus = () => {
        setIsAdded(!isAdded)
    }

    return (
        <div className="pizzaItemContainer">
            <img src={pizza.image_path} alt={pizza.description}/>
            <div className="descriptionContainer">
                <h2>{pizza.name}</h2>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
            </div>
            {isAdded ? 
                <button onClick={toggleCartStatus}>REMOVE</button> : 
                <button onClick={toggleCartStatus}>ADD</button>}
            
            
        </div>
    )
}

export default PizzaItem