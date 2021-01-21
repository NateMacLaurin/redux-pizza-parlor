import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function CustomerForm(params) {

    const dispatch = useDispatch();
    const history = useHistory()

    const [name, setName ] = useState('')
    const [address, setAddress ] = useState('')
    const [city, setCity ] = useState('')
    const [zip, setZip ] = useState('')



    const submitInfo = event => {
        event.preventDefault()
        console.log('Customer info submitted');

        const action = {
            type: 'CUSTOMER_INFO',
            payload: {
                name : name,
                address : address,
                city : city,
                zip : zip
            }}

        dispatch(action)

    }

    const handleNext = () => {
        history.push('/checkout')
    }

    return (
        <>
        <form onSubmit={submitInfo} className="customerForm">

            <h3>Step 2: Customer Info</h3>
            <div>
                <input 
                type="text" 
                placeholder="Name" 
                onChange={(event) => setName(event.target.value)}
                value={name}
                />
            </div>
            <br/>
            <div>
                <input 
                type="text" 
                placeholder="Street Address" 
                onChange={(event) => setAddress(event.target.value)}
                value={address}
                />
            </div>
            <br/>
            <div>
                <input 
                type="text" 
                placeholder="City" 
                onChange={(event) => setCity(event.target.value)}
                value={city}
                />
            </div>
            <br/>
            <div>
                <input 
                type="number" 
                placeholder="Zip Code" 
                onChange={(event) => setZip(event.target.value)}
                value={zip}
                />
            </div>
        </form>
        <button onClick={handleNext}>NEXT</button>
        </>
    )
}

export default CustomerForm;