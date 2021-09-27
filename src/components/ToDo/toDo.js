import React, { Component } from "react";
import ToDoHeader from "./ToDoHeader";
import AddPanel from './AddPanel'
import MenuList from './MenuList'
import SearchPanel from './SearchPanel'
import './toDo.scss'

export default class ToDo extends Component {

    state = {
        data: [
            {label: 'Junior Front-end dev', important: false, liked: false, id: 1},
            {label: 'Middle Front-end dev', important: false, liked: false, id: 2},
            {label: 'Senior Front-end dev', important: false, liked: false, id: 3}
        ]
    }

    render() {
        const {data} = this.state
        return (
            <div className="todo">
                <ToDoHeader />
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                </div>
                <AddPanel/>
                <MenuList posts={data}/>
                
            </div>
        )
    }


}
