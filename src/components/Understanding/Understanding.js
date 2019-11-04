
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
class Understanding extends Component {
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
                <h1>How well are you understanding the content?</h1>
                <h3>Understanding?</h3>
                <FormControl>
                        <InputLabel htmlFor="understanding">Understanding</InputLabel>
                        {/* drop down list in scale 1-5 */}
                        <Select
                            value={this.props.formReducer}
                            onChange={this.handleChangeFor('understanding')}
                        >
                            <MenuItem value=""><em></em></MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
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
