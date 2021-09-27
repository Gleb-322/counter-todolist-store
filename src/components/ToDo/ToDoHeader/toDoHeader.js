import React, { Component } from "react";
import './toDoHeader.scss'

export default class ToDoHeader extends Component {
    render() {
        return (
            <div className='header d-flex'>
                <h1>My Todo List</h1>
                <h2>Total posts: 1<br/> liked: 1</h2>
            </div>
        )
    }
}