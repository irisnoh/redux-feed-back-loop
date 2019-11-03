
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
                <h2>How are you feeling today?</h2>
                    <FormControl>
                        <InputLabel htmlFor="feeling">Feeling</InputLabel>
                        {/* drop down list in scale 1-5 */}
                        <Select
                            value={this.props.formReducer.feeling}
                            onChange={this.handleChangeFor('feeling')}
                        >
                            <MenuItem value=""><em></em></MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                {/* <h3>Feeling?</h3>
                <form className="feedback-form" onSubmit={this.handleClearAll}>
                    <input placeholder="feelings"
                        onChange={this.handleChangeFor('feeling')}
                        value={this.props.formReducer}
                        type="text"
                    />
                    <input type="submit" value="Next" />
                </form> */}
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
