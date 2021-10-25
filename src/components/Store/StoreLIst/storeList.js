import React, { Component } from 'react'
import StoreListItem from '../StoreListItem'
import './storeList.scss'

class StoreList extends Component {
    

    render() {
        const {items, addedToCart} = this.props
        return (
            <div>
                {
                    items.map(item => {
                        return (
                            <div key={item.id}>
                                <StoreListItem item={item} onAddToCart={() => addedToCart(item.id)}/>
                            </div>
                            
                        )
                    })
                }
            </div>
        )
    }
}



export default StoreList