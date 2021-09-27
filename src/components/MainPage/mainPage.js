import React, { Component }  from "react";
import {Link} from 'react-router-dom'
import './mainPage.scss'

export default class MainPage extends Component {
    render() {
        return (
            <div className="main">
                <ul className="main-ul">
                    <li>
                        <Link className='main-link' to='/counter'>Counter</Link>
                    </li>
                    <li>
                        <Link className='main-link' to='/todo'>To do list</Link>
                    </li>
                    <li>
                        <Link className='main-link' to='/store'>Shoes Store</Link>
                    </li>
                </ul>
            </div>
        )
    }
}