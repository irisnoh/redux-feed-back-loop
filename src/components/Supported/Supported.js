
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
class Supported extends Component {

    handleChangeFor = (propertyName) => (event) => {
        this.props.dispatch({
            type: 'GET_SUPPORT',
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
                <h1>How well are you being supported?</h1>
                <h3>Support?</h3>
                <FormControl>
                        <InputLabel htmlFor="support">Support</InputLabel>
                        {/* drop down list in scale 1-5 */}
                        <Select
                            value={this.props.formReducer}
                            onChange={this.handleChangeFor('support')}
                        >
                            <MenuItem value=""><em></em></MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                <Link to="/Comments">
                    <button>NEXT</button>
                </Link>
                <pre>
                    {JSON.stringify(this.props.formReducer, null, 2)}
                </pre>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Supported);
