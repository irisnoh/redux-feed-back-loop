
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Feeling extends Component {
    render() {
        return (
            <>
                IN UNDERSTANDING Feeling
                <Link to="/Understanding">
                    <button>NEXT</button>
                </Link>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Feeling);
