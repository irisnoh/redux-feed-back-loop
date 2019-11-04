
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { TextField } from '@material-ui/core';
class Comments extends Component {
    handleChangeFor = (propertyName) => (event) => {
        this.props.dispatch({
            type: 'GET_FEELING',
            payload: { [propertyName]: event.target.value },
        })
    }
    //function to clear all the input and start again
    handleClearAll = () => {
        this.props.dispatch({
            type: 'CLEAR_FEEDBACK',
        })
    }
    render() {
        return (
            <>
                <h1>Any comments you want to leave?</h1>
                <h3>Comments</h3>
                <TextField onChange={this.handleChangeFor('comment')}>

                </TextField>
                <Link to="/ReviewFeedback">
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
