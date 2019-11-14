
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
                <div key={this.props.formReducer.id}>
                <p>Feelings: {this.props.formReducer.feeling} </p>
                <p>Understanding: {this.props.formReducer.understanding}</p>
                <p>Supported: {this.props.formReducer.support}</p>
                <p>Comments: {this.props.formReducer.comments}</p>
                </div>

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

