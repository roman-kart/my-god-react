import React, { Component } from "react";

export default class SimpleCounter extends Component{
    constructor(props){
        super(props);
        this.state = {countOfClick : 0}
        this.counterEditValue = this.counterEditValue.bind(this);
        this.resetValue = this.resetValue.bind(this);
        this.counterEditValueMinus = this.counterEditValueMinus.bind(this);
    }

    counterEditValue(){
        this.setState({
            countOfClick: this.state.countOfClick + 1
        })
    }

    counterEditValueMinus(){
        this.setState({
            countOfClick: this.state.countOfClick - 1
        })
    }

    resetValue(){
        this.setState({
            countOfClick: 0
        })
    }

    render(){
        return(
            <div>
                <p aria-live="polite">Count = {this.state.countOfClick}</p>
                <button className="btn btn-primary" onClick={this.counterEditValue}>Plus</button>
                <button className="btn btn-primary" onClick={this.counterEditValueMinus}>Minus</button>
                <button className="btn btn-primary" onClick={this.resetValue}>Reset</button>
            </div>
        );
    }
};