import React, { Component } from "react";
import './postAddForm.scss'

export default class PostAddForm extends Component {

    state = {
        text: ''
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const {onAdd} = this.props
        onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form
                onSubmit={this.onSubmit}
                className="bottom-panel d-flex">
                <input 
                    value={this.state.text}
                    onChange={this.onChange}
                    className="form-control new-post-label"
                    placeholder="What are your next steps?"/>
                <button
                    type='submit'
                    className="btn_add btn-outline-success">
                    Add Post
                </button>
            </form>
        )
    }
}

