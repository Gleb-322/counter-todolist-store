import React, { Component } from 'react'
import WithShoesService from '../../hoc'
import './storeList.scss'

export default class StoreList extends Component {
    componentDidMount() {
        console.log(this.props)
        const {ShoesService} = this.props
        console.log(ShoesService)
        ShoesService.getStoreItems()
        .then(data => this.itemLoaded(data))
        .catch(() => this.onError())
    }

    onError() {
        return (
            <h1>Server Error</h1>
        )
    }
    
    itemLoaded(data) {
        console.log(data)
    }

    render() {
        
        return (
            <div>
            </div>
        )
    }
}



WithShoesService()(StoreList)