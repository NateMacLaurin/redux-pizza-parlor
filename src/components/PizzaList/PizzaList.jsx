import PizzaItem from '../PizzaItem/PizzaItem'
import { useSelector } from 'react-redux'

const PizzaList = () => {

    const pizzas = useSelector(store => store.pizzaReducer)

    return(
        <div className="pizzaList">
            {pizzas.map((pizza) => (
                <PizzaItem key={pizza.id} pizza={pizza}/>
            ))}
        </div>
    )
}