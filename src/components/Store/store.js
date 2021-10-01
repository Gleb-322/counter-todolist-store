import React, { Component } from "react";
import StoreList from './StoreLIst'
import StoreHeader from './StoreHeader'

export default class Store extends Component {
    render() {
        return (
            <div className='store'>
                <StoreHeader/>
                <StoreList/>
            </div>
        )
    }
}