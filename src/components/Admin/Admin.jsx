import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import axios from 'axios';


function Admin (){

    useEffect(() => getOrders(), [])

    // const orders = (useSelector(store => store.adminReducer))
    const [ orders, setOrders ] = useState([])
    const getOrders = (event) => {
        console.log('Getting orders');

        axios.get('/api/order').then((result) => {
            console.log(result.data);
            setOrders(result.data)
        })
    }

    const history = useHistory();
    const handleReturn = () => {
        console.log(`Returning to Order Page 1:`);
        history.push('/');
    }

    



    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order, i) => {
                    return (
                        <tr key={i}>
                            <td>{order.customer_name}</td>
                            <td>{order.time}</td>
                            <td>{order.type}</td>
                            <td>{order.total}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <button onClick={handleReturn}>FLEE YOU FOOLS</button>
        </>
    )
}

export default Admin