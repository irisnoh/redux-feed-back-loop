
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import AddSharpIcon from '@material-ui/icons/AddSharp';

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
    handleNextButton = () => {
        this.props.history.push('/Supported')
    }
    render() {
        return (
            <>
                <h1>How well are you understanding the content?</h1>
                <FormControl>
                    <InputLabel htmlFor="understanding">Understanding</InputLabel>
                                            {/* drop down list in scale 1-5 */}

                    <Select
                        onChange={this.handleChangeFor('understanding')}
                    >
                        <MenuItem ><em></em></MenuItem>
                        <MenuItem value={1}>1</MenuItem>
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

export default connect(mapReduxStateToProps)(Understanding);
