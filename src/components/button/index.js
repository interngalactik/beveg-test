import React, { Component } from 'react';
import './style.css';

export default class Button extends Component {
    constructor(props) {
        super();
        this.state = {
            btnName: 'button'
        }
    }

    componentDidMount() {
        this.setState({
            btnName: this.props.btnName
        })
    }

    render() {
        return(
            <div className="btn-container">
                <button className="btn">{this.state.btnName}</button>
            </div>
        )
    }
}