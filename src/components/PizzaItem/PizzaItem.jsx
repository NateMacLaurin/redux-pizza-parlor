import { useState } from 'react'
import { useDispatch } from 'react-redux'


const PizzaItem = ({pizza}) => {

    const dispatch = useDispatch()
    const [isAdded, setIsAdded] = useState(false)

    const toggleCartStatus = () => {
        if (isAdded === 'true') {
            dispatch({ type: 'ADD_TO_ORDER', payload: pizza})
        } else if (isAdded === 'false') {
            dispatch({ type: 'REM_FROM_ORDER', payload: pizza})
        }
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