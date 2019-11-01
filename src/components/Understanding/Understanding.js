
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Understanding extends Component {
    render() {
        return (
            <>
                IN UNDERSTANDING COMPONENT
                <Link to="/Supported">
                    <button>NEXT</button>
                </Link>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Understanding);
