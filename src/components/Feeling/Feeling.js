
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Feeling extends Component {
    state = {
        results: ''
    }
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

    // getFeeling = () => {
    //     axios({
    //         method: 'GET',
    //         url: '/feedback'
    //     }).then(
    //         response => {
    //             this.props.dispatch({
    //                 type: 'GET_FEELING',
    //                 payload: response.data,
    //             })
    //                 .catch(error => {
    //                     console.log('Error in GET', error);
    //                 })
    //         }
    //     )
    // }

    handleChangeFeeling = (event) => {
        this.setState({
            results: event.target.value,
        });
    }


    // getFeeling = (event) => {
    //     event.preventDefault();
    //     this.props.dispatch({
    //         type: "GET_FEELING", payload: this.state
    //     })
    //     this.setState({
    //         results: ''
    //     });
    // }
    render() {
        return (
            <>
                <h1>How are you feeling today?</h1>
                <h3>Feeling?</h3>
                <form className="feedback-form" onSubmit={this.handleClearAll}>
                    <input placeholder="feelings"
                        onChange={this.handleChangeFor('feeling')}
                        value={this.props.formReducer}
                        type="text"
                    />
                    <input type="submit" value="Next" />
                </form>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>

            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Feeling);
