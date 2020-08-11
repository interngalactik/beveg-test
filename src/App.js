import React, { Component } from 'react';
import logo from './beveg-logo.png';
import './App.css';

import Button from './components/button';
import Coupon from './components/coupon';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  showCoupon() {
    this.setState({
      show: true
    })
  }
  
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <Button btnName="create coupon" onClick={() => this.showCoupon()} />
          <Coupon show={this.state.show} />
        </header>
      </div>
    );
  }
};