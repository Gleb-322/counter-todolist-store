import React, {Component} from "react"
import './counter.scss'
import minus from './icons/Minus.svg'
import plus from './icons/Plus.svg'
import reset from './icons/Reset.svg'

class Counter extends Component {
    state = {
        counter: 23
    }

    counterInc = () => {
        this.setState(({counter}) => {
            return {
                counter: counter + 1
            }
        })
    }

    counterDec = () => {
        this.setState(({counter}) => {
            return {
                counter: counter - 1
            }
        })
    }

    counterRes = () => {
        this.setState(() => {
            return {
                counter: 23
            }
        })
    }

    render() {
        const {counter} = this.state
        return (
            <div className="counter">
                <div className="counter_block">
                    <h1>{counter}</h1>
                </div>
                <div className="counter_btn">
                    <button 
                        onClick={this.counterInc} 
                        className="btn counter_btn-inc">
                            <img src={plus} alt="plus"/>
                    </button>
                    <button 
                        onClick={this.counterDec} 
                        className="btn counter_btn-dec">
                            <img src={minus} alt="minus"/>
                    </button>
                    <button 
                        onClick={this.counterRes} 
                        className="btn counter_btn-res">
                            <img src={reset} alt="reset"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter