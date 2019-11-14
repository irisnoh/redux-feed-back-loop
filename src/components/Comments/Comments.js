
import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import { TextField } from '@material-ui/core';
class Comments extends Component {
    handleChangeFor = (propertyName) => (event) => {
        this.props.dispatch({
            type: 'GET_FEELING',
            payload: { [propertyName]: event.target.value },
        })
    }

    handleNextButton = () => {
        this.props.history.push('/ReviewFeedback')
    }

    render() {
        return (
            <>
                <h1>Any comments you want to leave?</h1>
                <TextField onChange={this.handleChangeFor('comments')}>  </TextField>
                <AddSharpIcon onClick={this.handleNextButton}>Submit</AddSharpIcon>
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

export default connect(mapReduxStateToProps)(Comments);
