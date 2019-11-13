
import React, { Component } from 'react';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import { connect } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class Supported extends Component {


    handleChangeFor = (propertyName) => (event) => {
        this.props.dispatch({
            type: 'GET_SUPPORT',
            payload: { [propertyName]: event.target.value },
        })
    }

    handleNextButton = () => {
        this.props.history.push('/Comments')
    }

    render() {
        return (
            <>
                <h1>How well are you being supported?</h1>
                <FormControl>
                    <InputLabel htmlFor="support">Support</InputLabel>
                    {/* drop down list in scale 1-5 */}

                    <Select
                        onChange={this.handleChangeFor('support')} >
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
                <p>Feelings: {this.props.formReducer.feeling} </p>
                <p>Understanding: {this.props.formReducer.understanding}</p>
                <p>Supported: {this.props.formReducer.support}</p>
                <p>Comments: {this.props.formReducer.comments}</p>

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
