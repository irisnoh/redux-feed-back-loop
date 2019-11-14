
import React, { Component } from 'react';
import { connect } from 'react-redux'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { Link } from 'react-router-dom';

class ThankYou extends Component {
   
    handleChangeFor = (event) => {
        this.props.dispatch({
            type: 'CLEAR_FEEDBACK',
            payload: event.target.value,
        })
    }
    render() {
        return (
            <>
                <h1>Feedback!</h1>
                <h3>Thank You!</h3>
              <Link to="/"><HomeOutlinedIcon onClick={this.handleChangeFor} color="action">Home</HomeOutlinedIcon></Link>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(ThankYou);
