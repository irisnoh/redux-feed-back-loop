
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddSharpIcon from '@material-ui/icons/AddSharp';
class Feeling extends Component {


    // state = {
    //     input: ''
    // }

    handleChangeFor = (propertyName) => (event) => {
        // if (this.state.input === '')
        // {alert('opps no good')}
        // else if (this.state)
        // return console.log('cannot be nothing')
        this.props.dispatch({
            type: 'GET_FEELING',
            payload: { [propertyName]: event.target.value },
        })

    }
    // function to alert if not value was selected
    // handleClickNothing = () => {
    //     if (this.state.empty === '') {
    //         alert("Oops, values can not be empty!"
    //         )
    //     }
    // }
    //function to clear all the input and start again
    handleClearAll = () => {
        this.props.dispatch({
            type: 'CLEAR_FEEDBACK',
        })
    }

    handleNextButton = () => {
        this.props.history.push('/Understanding')
    }

    render() {
        return (
            <>
                <h1>How are you feeling today?</h1>
                <FormControl>
                    <InputLabel htmlFor="feeling">Feeling</InputLabel>
                    {/* drop down list in scale 1-5 */}
                    <Select
                        onChange={this.handleChangeFor('feeling')}
                    >
                        <MenuItem ><em></em></MenuItem>
                        <MenuItem placeholder="1" value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                        <AddSharpIcon onClick={this.handleNextButton}>Next</AddSharpIcon>
                    
                </FormControl>
                <h1>Feedback:</h1>
                <p key={this.props.formReducer.id}>Feelings: {this.props.formReducer.feeling} </p>
                <p key={this.props.formReducer.id}>Understanding: {this.props.formReducer.understanding}</p>
                <p key={this.props.formReducer.id}>Supported: {this.props.formReducer.support}</p>
                <p key={this.props.formReducer.id}>Comments: {this.props.formReducer.comments}</p>

            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Feeling);
