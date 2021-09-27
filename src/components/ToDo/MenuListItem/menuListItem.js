import React from "react";
import './menuListItem.scss'

const MenuListItem = ({label}) => {
    
    return (
        <div className='app-list-item'>
                <span 
                className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                    type="button"
                    className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                    type="button"
                    className="btn-trash btn-sm">
                        <i className="fa fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
    )
    
}

export default MenuListItem