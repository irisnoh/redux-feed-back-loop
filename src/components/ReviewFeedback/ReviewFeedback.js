
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import AddSharpIcon from '@material-ui/icons/AddSharp';


class ReviewFeedback extends Component {
    handleSubmit = () => {
        axios({
            method:"POST",
            url:"/submit",
            data: this.props.formReducer
        }).then(response => {
            console.log("post success")
            this.props.dispatch({type:"GET_ADMIN", payload:response.data})
        }).catch(error => {
            console.log(error);
        })
        this.props.history.push("/ThankYou");
    }
 
    render() {
        return (    
            <>
            <div className="reviewPage">

                <h1>Review Your Feedback!</h1>
                <p key={this.props.formReducer.id}>Feelings: {this.props.formReducer.feeling} </p>
                <p key={this.props.formReducer.id}>Understanding: {this.props.formReducer.understanding}</p>
                <p key={this.props.formReducer.id}>Supported: {this.props.formReducer.support}</p>
                <p key={this.props.formReducer.id}>Comments: {this.props.formReducer.comments}</p>

                    <AddSharpIcon onClick={this.handleSubmit}>SUBMIT</AddSharpIcon>
                </div>
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

export default connect(mapReduxStateToProps)(ReviewFeedback);

