import React, { Component } from "react";
import nextId from 'react-id-generator'
import ToDoHeader from "./ToDoHeader";
import PostAddForm from './PostAddForm'
import StatusFilter from "./StatusFilter";
import MenuList from './MenuList'
import SearchPanel from './SearchPanel'
import './toDo.scss'

export default class ToDo extends Component {

    state = {
        data: [
            {label: 'Junior Front-end dev', important: false, liked: false, id: nextId()},
            {label: 'Middle Front-end dev', important: false, liked: false, id: nextId()},
            {label: 'Senior Front-end dev', important: false, liked: false, id: nextId()}
        ],
        term: '',
        filter: 'all'
    }

    
    onToggleStatus = (id, status) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const oldItem = data[index]
            const newItem = {...oldItem, [status]: !oldItem[status]}
            const before = data.slice(0, index)
            const after = data.slice(index + 1)
            const newArr = [...before, newItem, ...after]
            return {
                data: newArr
            }
        })
    }

    onDelete = (id) => {
        this.setState(({data}) => {

            /* вариант Райчева */
            // const newArr = data.filter(e => e.id !== id)

            /* мой вариант */
            const index = data.findIndex(elem => elem.id === id)
            const before = data.slice(0, index)
            const after = data.slice(index + 1)
            const newArr = [...before, ...after]
            return {
                data: newArr
            }
        })
    }

    addItem = (text) => { 
        if (text.length !== 0) {
            const newItem = {
                label: text,
                important: false,
                liked: false,
                id: nextId()
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem]
                return {
                    data: newArr
                }
            })
        }
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    filterPosts(items, filter) {
        switch (filter) {
            case 'liked':
                return items.filter(item => item.liked)
            case 'important':
                return items.filter(item => item.important)
            default: 
                return items
        }
    }

    render() {
        const {data, term, filter} = this.state
        const likedPosts = data.filter(data => data.liked === true).length
        const importantPosts = data.filter(data => data.important === true).length
        const allPosts = data.length
        const visiblePosts = this.filterPosts(this.searchPost(data, term), filter)
        return (
            <div className="todo">
                <ToDoHeader statusImportant={importantPosts} statusLiked={likedPosts} totalPosts={allPosts}/>
                <div className='search-panel d-flex'>
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <StatusFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostAddForm 
                    onAdd={this.addItem}/>
                <MenuList 
                    posts={visiblePosts}
                    onToggleImportant={this.onToggleStatus}
                    onToggleLiked={this.onToggleStatus}
                    onDelete={this.onDelete}/>
            </div>
        )
    }


}
