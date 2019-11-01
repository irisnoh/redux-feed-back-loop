
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Understanding extends Component {
    render() {
        return (
            <>
                <h1>How well are you understanding the content?</h1>
                <h3>Understanding?</h3>
                <input></input>
                <Link to="/Supported">
                    <button>NEXT</button>
                </Link>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Understanding);
