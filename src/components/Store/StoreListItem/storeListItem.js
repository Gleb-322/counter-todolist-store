import React, {Component} from "react";
// import { Link } from "react-router-dom";
import './storeListItem.scss'

export default class StoreListItem extends Component {
    render() {
        const {item} = this.props
        const {name, description, price, image, onAddToCart} = item
        return (
            <>
                <div>
                    <img src={image} alt={name}/>
                    <div>{name}</div>
                    <div>Description: {description}</div>
                    <div>Price: {price} $</div>
                    {/* <Link to={`/store/${id + 1}`}> */}
                        <button>View</button>
                    {/* </Link> */}
                    <button onClick={onAddToCart} >Add to Cart</button>
                </div>
            </>
        )
    }
}