import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'

const Checkout = () => {

    const history = useHistory();
    const handleReturn = () => {
        console.log(`Returning to Order Page 1:`);
        history.push('/');
    }

    
    // Remove when real data is set up.
    const pizzaOrder = useSelector(store => store.orderReducer)
    
    const customer = useSelector(store => store.customerReducer)
    

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
