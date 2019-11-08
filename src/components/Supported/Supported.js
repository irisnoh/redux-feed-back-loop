
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const marks = [
   
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 5,
        label: '5',
    },
];
function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
  }
  function valuetext(value) {
    return `${value}`;
  }

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

    setStore = (actionType) => {
        this.props.dispatch({ type: actionType, payload: this.state.value });
    }

    render() {
        return (
            <>
                <h1>How well are you being supported?</h1>
                <h3>Support?</h3>
                <FormControl>
                    <InputLabel htmlFor="support">Support</InputLabel>
                    {/* drop down list in scale 1-5 */}
                    <Typography id="discrete-slider-restrict" gutterBottom>
                        Restricted values
      </Typography>
      {/* <Slider
                    defaultValue={this.props.default}
                    // aria-valuetext={this.marks.value}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    range="false"
                    value={marks}
                    marks={this.marks}
                   
                    //set value as slider moves
                    onChange={(e, val) => this.val = val}
                    //set state to value when mouse released
                    onChangeCommitted={() => this.setValue(this.val)}
                /> */}
                    <Slider
                        defaultValue={5}
                        valueLabelFormat={valueLabelFormat}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-restrict"
                        step={null}
                        range="false"
                        valueLabelDisplay="auto"
                        marks={marks}
                        min={0}
                        max={5}
                        onChange={(e, val) => this.val = val}
                        onChange={this.handleChangeFor('support')}
                    onChangeCommitted={() => this.setValue(this.val)}

                    />
                   
                    {/* <Select
                        onChange={this.handleChangeFor('support')} >
                        <MenuItem ><em></em></MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select> */}
                    <Link to="/Comments">
                        <button>Next</button>
                    </Link>
                </FormControl>

                {/* <pre>
                    {JSON.stringify(this.props.formReducer, null, 2)}
                </pre> */}
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Supported);
