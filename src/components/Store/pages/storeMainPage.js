import React from "react";
import StoreList from '../StoreLIst'

const StoreMainPage = ({items, addedToCart}) => {
    return (
        <StoreList items={items} addedToCart={addedToCart}/>
    )
}
export default StoreMainPage