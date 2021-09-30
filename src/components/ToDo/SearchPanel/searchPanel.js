import React, { Component } from "react";
import './searchPanel.scss'

export default class SearchPanel extends Component {
    state = {
        term: ''
    }
    onUpdateSearch = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSearch(term)
        
    }
    render() {
        return (
            <input 
                onChange={this.onUpdateSearch}
                value={this.state.term}
                type="text" 
                placeholder="Search post..." 
                className="form-control search-input"
            />
        )
    }
}