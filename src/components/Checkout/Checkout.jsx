import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

const Checkout = () => {

    const history = useHistory();
    const handleReturn = () => {
        console.log(`Returning to Order Page 1:`);
        history.push('/');
    }


    // Remove when real data is set up.
    const pizzaOrder = useSelector(store => store.orderReducer)
    const customer = useSelector(store => store.customerReducer)
    const total = useSelector(store => store.totalReducer)

    const handleCheckout = () => {
    axios.post('/api/order', {
            customer_name: customer[0].name,
            street_address: customer[0].address,
            city: customer[0].city,
            zip: customer[0].zip,
            type: customer[0].type,
            total: total,
            pizzas: pizzaOrder
        })
        .then((response) => {
            console.log('Order info submitted. Redirecting to main page.');
            history.push('/');
        }).catch((err) => {
            alert((`ERROR on POST: ${err}`));
            console.log(`ERROR on POST: ${err}`);
        })
    }

    return (
        <>
            <h3>Welcome to Checkout Page</h3>
        
            <div className="customerInfo">
                <ul>
                    <li>{customer[0].name}</li>
                    <li>{customer[0].address}</li>
                    <li>{customer[0].city}</li>
                    <li>{customer[0].zip}</li>
                </ul>
            </div>
            <table className="pizzaTable">
                <thead>
                    <tr>
                        <td>Name of Pizza</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {pizzaOrder.map((pizza) =>
                        <tr key={pizza.id}><td>{pizza.name}</td><td>{pizza.price}</td></tr>)}
                </tbody>
            </table>
            <Button variant='contained' color='primary' onClick={handleReturn}>CHECKOUT</Button>
        </>
    )
}

export default Checkout
