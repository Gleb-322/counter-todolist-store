import React, { Component } from "react"
import { StoreCartPage, StoreItemPage, StoreMainPage } from "./pages"
import { Switch, Route } from "react-router"
import StoreHeader from './StoreHeader'
import ShoesService from "../../services/shoesService"

export default class Store extends Component {

    state = {
        items: [],
        error: false,
        loading: true,
        totalPrice: 0,
        totalItems: 0
    }

    ShoesService = new ShoesService()
    
    componentDidMount() {
        this.updateItems()
    }

    updateItems = () => {
        this.ShoesService.getStoreItems()
        .then(this.receivedAllItems)
        .catch(this.onError)
    }

    
    receivedAllItems = (items) => {
        this.setState({
            items,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true
        })
    }


    addedToCart(id) {
        this.setState(({items}) => {
            const item = items.find(elem => elem.id === id)
            const newItem = {
                id: item.id,
                name: item.name,
                description: item.description,
                price: item.price,
                image: item.image,
                qtty: 1
            }
            return {
                items: [
                    newItem
                ],
                totalPrice: this.state.totalPrice + newItem.price,
                totalItems: items.length
            }
        })
         
    }

    deleteFromCart() {
        
    }
    
    render() {
        const {items, error, loading, totalItems, totalPrice} = this.state
        if(loading) {
            return <h2>Loading...</h2>
        }
        if (error) {
            return <h2>Server error</h2>
        }
        return (
            <div className='store'>
                <StoreHeader totalItems={totalItems}/>
                <Switch>
                    <Route 
                        path='/store' 
                        exact 
                        render={() => <StoreMainPage 
                            items={items} 
                            addedToCart={this.addedToCart}/>
                        }
                    />
                    <Route 
                        path='/store/:id' 
                        exact 
                        render={() => <StoreItemPage 
                            items={items} />
                        }
                    />
                    <Route 
                        path='/store/cart' 
                        exact 
                        render={() => <StoreCartPage 
                            items={items} 
                            totalPrice={totalPrice} 
                            deleteFromCart={this.deleteFromCart}/>
                        }
                    />
                </Switch>
            </div>
        )
    }
}