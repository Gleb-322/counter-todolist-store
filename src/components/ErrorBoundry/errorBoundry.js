import React, {Component} from 'react';


export default class ErrorBoundry extends Component {

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }
    render() {
        if(this.state.error) {
            return <h2>Sorry something goes wrong...</h2>
        }
        return this.props.children
    }
}