import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux'

function Admin (){

    const orders = useSelector(store => store.adminReducer)
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
                            <td>{order.name}</td>
                            <td>{order.timePlaced}</td>
                            <td>{order.type}</td>
                            <td>{order.cost}</td>
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