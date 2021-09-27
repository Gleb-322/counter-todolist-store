import React, { Component } from "react";
import './searchPanel.scss'

export default class SearchPanel extends Component {
    render() {
        return (
            <input type="text" placeholder="Search post..." className="form-control search-input"/>
        )
    }
}