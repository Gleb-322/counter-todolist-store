import React, { Component } from "react";
import './statusFilter.scss'

export default class StatusFilter extends Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'important', label: 'Important'},
        {name: 'liked', label: 'Liked'}
    ]
    
    render() {
        return (
            <div className='btn-group'>
                {
                    this.buttons.map(({name, label}) => {
                        const active = this.props.filter === name
                        const clazz = active ? 'btn-filter btn-info' : 'btn-filter btn-outline-secondsry'
                        return (
                            <button 
                                onClick={() => this.props.onFilterSelect(name)}
                                key={name} 
                                className={`${clazz}`}>
                                    {label}
                            </button>
                        )
                    })
                }
            </div>
        )
    }
}
