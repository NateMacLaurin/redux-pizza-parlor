import {useHistory} from 'react-router-dom';
import { prependOnceListener } from '../../../../server/modules/pool';

function Admin (){

    const history = useHistory();
    const handleReturn = () => {
        console.log(`Returning to Order Page 1:`);
        history.push('/');
    }
    return(
        <>
        <h3>Welcome to Admin Page</h3>
        <button onClick={handleReturn}>FLEE YOU FOOLS</button>
        </>
    )
}

export default Admin