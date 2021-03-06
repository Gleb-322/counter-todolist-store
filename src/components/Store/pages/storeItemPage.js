import React, { Component } from "react";
import './storeItemPage.scss'

class StoreItemPage extends Component {

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
                    <button onClick={onAddToCart} >Add to Cart</button>
                </div>
            </>
        )
    }
}

export default StoreItemPage


