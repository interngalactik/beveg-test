import React, { Component } from 'react';
import './style.css';

import Button from '../button';

export default class Coupon extends Component {
    constructor() {
        super();
        this.state = {
            type: 'Food',
            discount: 0,
            limit: 0,
            couponCode: 'XSJ-SXJ'
        }

        this.handleType = this.handleType.bind(this);
        this.handleDiscount = this.handleDiscount.bind(this);
        this.handleLimit = this.handleLimit.bind(this);
    }

    handleType(event) {
        this.setState({
            type: event.target.value
        })
    }

    handleDiscount(event) {
        this.setState({
            discount: event.target.value
        })
    }

    handleLimit(event) {
        this.setState({
            limit: event.target.value
        })
    }

    generateCode(event) {
        const body = {
            type: this.state.type,
            discount: this.state.discount,
            limit: this.state.discount
        };
        console.log(body)

        fetch('https://bevveg-app-test.herokuapp.com/coupons/generate', {
            method: 'POST',
            body: JSON.stringify(body)
        }).then(function(response) {
            console.log(response);
        });

        event.preventDefault();
    }

    copyCoupon() {
        const doc = document.getElementById('coupon');
        doc.select();
        document.execCommand('copy');
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return(
            <div className="coupon">
                <div className="coupon-bg"></div>
                <div className="coupon-container">
                    <div className="coupon-header">
                        <h2>Create Coupon Code</h2>
                    </div>
                    <div className="coupon-values">
                        <form onSubmit={this.handleSumbit}>
                            <label>
                                Discount Percentage:
                                <input type="number" name="discount" onChange={this.handleDiscount} />
                            </label>
                            <label>
                                Usage Limit:
                                <input type="number" name="limit" onChange={this.handleLimit} />
                            </label>
                            <label>
                                Discount For:
                                <select value={this.state.type} onChange={this.handleType}>
                                    <option value="Food">Food Companies</option>
                                    <option value="Alcohol">Alcohol</option>
                                    <option value="Business">Business</option>
                                </select>
                            </label>

                        </form>
                    </div>
                    <div className="coupon-generator">
                        <p>Coupon Code: </p>
                        <div className="coupon-code">
                            <input id="coupon" type="text"  value={this.state.couponCode} readOnly />
                            <p onClick={() => this.copyCoupon()}>click to copy code</p>
                        </div>
                        <Button btnName="generate code" onClick={(event) => this.generateCode(event)} />
                    </div>
                </div>
            </div>
        )
    }
}