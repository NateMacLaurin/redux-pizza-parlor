import PizzaItem from '../PizzaItem/PizzaItem'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const PizzaList = () => {


    const pizzas = useSelector(store => store.pizzaReducer)
    const history = useHistory()

    const handleNext = () => {
        history.push('/order')
    }

    return (
        <>
            <div className="pizzaList">
                <Grid container spacing={3}>
                    {pizzas.map((pizza) => (
                        <PizzaItem key={pizza.id} pizza={pizza} />
                    ))}
                </Grid>
            </div>

            <Button variant='contained' color='primary' onClick={handleNext}>NEXT</Button>
        </>
    )
}

export default PizzaList
