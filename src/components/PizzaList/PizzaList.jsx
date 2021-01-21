import PizzaItem from '../PizzaItem/PizzaItem'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const PizzaList = () => {


    const pizzas = useSelector(store => store.pizzaReducer)
    const history = useHistory()

    const handleNext = () => {
        history.push('/order')
    }

    return(
        <>
        <div className="pizzaList">
            {pizzas.map((pizza) => (
                <PizzaItem key={pizza.id} pizza={pizza}/>
            ))}
        </div>
        <button onClick={handleNext}>NEXT</button>
        </>
    )
}

export default PizzaList
