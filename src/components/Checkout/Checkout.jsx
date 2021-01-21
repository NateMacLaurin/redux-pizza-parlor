import {useHistory} from 'react-router-dom';

const Checkout = () => {

    const history = useHistory();
    const handleReturn = () => {
        console.log(`Returning to Order Page 1:`);
        history.push('/');
    }

    return (
        <>
        <h3>Welcome to Checkout Page</h3>
        <button onClick={handleReturn}>FLEE YOU FOOLS</button>
        </>
    )
}

export default Checkout
