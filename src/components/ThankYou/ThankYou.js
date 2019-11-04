
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ThankYou extends Component {
    
    render() {
        return (
            <>
                <h1>Feedback!</h1>
                
                <h3>Thank You!</h3>

                    <Link to="/">
                    <button>Home</button>
                </Link>
             
               
            
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(ThankYou);
