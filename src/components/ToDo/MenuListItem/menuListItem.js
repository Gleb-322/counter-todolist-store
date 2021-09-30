import React, { Component } from "react";
import './menuListItem.scss'

export default class MenuListItem extends Component {
    
    render() {
        const {label, important, liked, onToggleImportant, onToggleLiked, onDelete} = this.props

        let classNames = 'app-list-item'

        if (important) {
            classNames += ' important'
        }

        if (liked) {
            classNames += ' like'
        }
        return (
            <div className={classNames}>
                <span 
                    onClick={onToggleLiked}
                    className="app-list-item-label">
                    {label}
                </span>
                <div className="app-list-item-block">
                    <button
                        onClick={onToggleImportant}
                        type="button"
                        className="btn-star btn-sm">
                            <i className="fa fa-star"></i>
                    </button>
                    <button
                        onClick={onDelete}
                        type="button"
                        className="btn-trash btn-sm">
                            <i className="fa fa-trash"></i>
                    </button>
                        <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
    
    
}