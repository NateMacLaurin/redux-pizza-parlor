
const PizzaItem = ({pizza}) => {


    return (
        <div className="pizzaItemContainer">
            <img src={pizza.image_path} alt={pizza.description}/>
            <div className="descriptionContainer">
                <h2>{pizza.name}</h2>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
            </div>
            <button>ADD</button>
        </div>
    )
}

export default PizzaItem