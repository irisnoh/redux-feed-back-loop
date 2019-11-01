
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class ReviewFeedback extends Component {
 
    render() {
        return (
            <>
                <h1>Review Your Feedback!</h1>
                <p>Feelings:</p>
                <p>Understanding:</p>
                <p>Supported:</p>
                <p>Comments:</p>

                <Link to="/">
                    <button>SUBMIT</button>
                </Link>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(ReviewFeedback);
