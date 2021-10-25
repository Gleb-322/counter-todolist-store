import React, {Component} from "react";
import { Link } from "react-router-dom";

import './storeHeader.scss'

export default class StoreHeader extends Component {
    render() {
        const {totalItems} = this.props
        return (
            <header>
                <Link to='/store'>Shoes Shop</Link>
                <h3>Total items: {totalItems}</h3>
                <Link to='/store/cart'>
                    <button><i class="fas fa-shopping-cart"></i></button>
                </Link>
            </header>
        )
    }
}