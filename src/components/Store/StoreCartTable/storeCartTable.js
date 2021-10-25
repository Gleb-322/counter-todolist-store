import React, {Component} from "react";
import './storeCartTable.scss'


export default class StoreCartTable extends Component {
render() {
        const {items, deleteFromCart} = this.props
        return (
            <>  
                <div>Your Order:</div>
                <div>
                    {
                        items.map(item => {
                            const {id, name, description, price, image, qtty} = item
                            return (
                                <div key={id}>
                                    <img src={image} alt={name}></img>
                                    <div>{name}</div>
                                    <div>{description}</div>
                                    <div>{price}$ * {qtty}</div>
                                    <div onClick={() => deleteFromCart(id)} >&times;</div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}