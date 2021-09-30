import React, { Component } from "react";
import './toDoHeader.scss'

export default class ToDoHeader extends Component {
    render() {
        const {statusLiked, statusImportant, totalPosts} = this.props
        return (
            <div className='header d-flex'>
                <h1>My Todo List</h1>
                <h2>Total posts: {totalPosts}<br/> liked: {statusLiked} <br/> Important: {statusImportant}</h2>
            </div>
        )
    }
}