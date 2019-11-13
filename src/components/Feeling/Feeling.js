
import React, { Component } from 'react';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import { connect } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class Feeling extends Component {

    handleChangeFor = (propertyName) => (event) => {
        this.props.dispatch({
            type: 'GET_FEELING',
            payload: { [propertyName]: event.target.value },
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
                        onChange={this.handleChangeFor('feeling')}>
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
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Feeling);
