import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'


const PizzaItem = ({ pizza }) => {

    const dispatch = useDispatch()
    const [isAdded, setIsAdded] = useState(false)

    const toggleCartStatus = () => {
        if (!isAdded) {
            dispatch({ type: 'ADD_TO_ORDER', payload: pizza })
        } else if (isAdded) {
            dispatch({ type: 'REM_FROM_ORDER', payload: pizza })
        }
        setIsAdded(!isAdded)
    }

    return (
        <Grid item xs={4}>
            <div className="pizzaItemContainer">
                <img src={pizza.image_path} alt={pizza.description} />
                <div className="descriptionContainer">
                    <h2>{pizza.name}</h2>
                    <p>{pizza.description}</p>
                    <p>{pizza.price}</p>
                </div>
                {isAdded ?
                    <Button variant='outlined' color='secondary' onClick={toggleCartStatus}>REMOVE</Button> :
                    <Button variant='outlined' color='secondary' onClick={toggleCartStatus}>ADD</Button>}


            </div>
        </Grid>
    )
}

export default PizzaItem