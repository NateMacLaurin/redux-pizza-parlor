import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function CustomerForm(params) {

    const dispatch = useDispatch();
    const history = useHistory()

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [type, setType] = useState('delivery')



    const handleNext = event => {
        event.preventDefault()
        console.log('Customer info submitted');

        const action = {
            type: 'CUSTOMER_INFO',
            payload: {
                name: name,
                address: address,
                city: city,
                zip: zip,
                type: type
            }
        }

        dispatch(action)
        history.push('/checkout')
    }

    return (
        <>
            <form onSubmit={handleNext} className="customerForm">

                <h3>Step 2: Customer Info</h3>
                <select name="type" id="" onChange={(event) => setType(event.target.value)}>
                    <option value="delivery">Delivery</option>
                    <option value="pickUp">Pick-up</option>
                </select>

                <div>
                    <br />
                    <input
                        required
                        type="text"
                        placeholder="Name"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                    />
                </div>
                <br />
                <div>
                    <input
                        type="text"
                        placeholder="Street Address"
                        onChange={(event) => setAddress(event.target.value)}
                        value={address}
                    />
                </div>
                <br />
                <div>
                    <input
                        type="text"
                        placeholder="City"
                        onChange={(event) => setCity(event.target.value)}
                        value={city}
                    />
                </div>
                <br />
                <div>
                    <input
                        type="number"
                        placeholder="Zip Code"
                        onChange={(event) => setZip(event.target.value)}
                        value={zip}
                    />
                </div>
                <br />
                <button className="formBtn" onSubmit={handleNext}>NEXT</button>
            </form>

        </>
    )
}

export default CustomerForm;