import React, { Component } from 'react';

import logo from '../logo.svg';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-faded nav-bar-shadow">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Welcome to Songza</h1>
            </nav>

        )
    }
}