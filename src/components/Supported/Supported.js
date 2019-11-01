
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Supported extends Component {
    render() {
        return (
            <>
                <h1>How well are you being supported?</h1>
                <h3>Support?</h3>
                <input></input><Link to="/Comments">
                    <button>NEXT</button>
                </Link>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Supported);
