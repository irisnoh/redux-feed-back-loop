
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Comments extends Component {
    render() {
        return (
            <>
                <h1>Any comments you want to leave?</h1>
                <h3>Comments</h3>
                <input></input><Link to="/ReviewFeedback">
                    <button>Submit</button>
                </Link>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Comments);
