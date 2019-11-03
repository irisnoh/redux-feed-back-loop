
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class ReviewFeedback extends Component {
    handleSubmit = () => {
        axios({
            method:"POST",
            url:"/results",
            data: {
                ...this.props.formReducer,
            }
        }).then(response => {
            console.log("post success")
        }).catch(error => {
            console.log(error);
        })
        this.props.history.push("/");
    }
 
    render() {
        return (
            <>
            <div className="reviewPage">

                <h1>Review Your Feedback!</h1>
                <p>Feelings: {this.props.formReducer.feeling} </p>
                <p>Understanding:{this.props.formReducer.understanding}</p>
                <p>Supported:{this.props.formReducer.support}</p>
                <p>Comments:{this.props.formReducer.comments}</p>

                <Link to="/">
                    <button onClick={this.handleSubmit}>SUBMIT</button>
                </Link>
                </div>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(ReviewFeedback);

