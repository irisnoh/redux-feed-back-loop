
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Feeling extends Component {
    state = {
        results: ''
    }

    // getFeeling = () => {
    //     axios.get('/api/results')
    //         .then((response) => {
    //             console.log("GET got ", response.data);
    //             this.props.dispatch({ type: "GET_FEELING", payload: response.data })
    //         })
    //         .catch((error) => {
    //             console.log("GET error", error);
    //         })
    // }
    handleChangeFeeling = (event) => {
        this.setState({
            results: event.target.value,
        });
    }


    getFeeling = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: "GET_FEELING", payload: this.state
        })
        this.setState({
            results: ''
        });
    }
    render() {
        return (
            <>
                <h1>How are you feeling today?</h1>
                <h3>Feeling?</h3>

                <form className="feedback-form" onSubmit={this.getFeeling}>
                    <input placeholder="feelings" 
                    onChange={this.handleChangeFeeling} 
                    value={this.state.results}
                    type="text"
                    />
                    
                    <input type="submit" value="Next" />
                </form>

                {/* <input onClick={this.onChange}
                value={this.state.results}></input> */}
                {/* {this.props.formReducer.map(result =>
                    result
                )} */}
                {/* <Link to="/Understanding">
                    <button onClick={this.getFeeling}>NEXT</button>
                </Link> */}
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>

            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Feeling);
