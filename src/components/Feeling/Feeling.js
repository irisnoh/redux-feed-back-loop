
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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

    handleNextPage =()=>{
        // link and alert functon
    }

    //look into min and max values
    render() {
        return (
            <>
                <h1>How are you feeling today?</h1>
                <h3>Feeling?</h3>
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
                    <Link to="/Understanding">
                        <button>Next</button>
                    </Link>
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



            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Feeling);
