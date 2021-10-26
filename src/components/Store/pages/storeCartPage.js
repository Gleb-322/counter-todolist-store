import React from "react";
import StoreCartTable from '../StoreCartTable'

const CartPage = ({items, totalPrice, deleteFromCart}) => {
    return (
        <StoreCartTable items={items} totalPrice={totalPrice} deleteFromCart={deleteFromCart}/>
    )
}
export default CartPage