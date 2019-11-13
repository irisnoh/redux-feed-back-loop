
import React, { Component } from 'react';
import { connect } from 'react-redux'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

class ThankYou extends Component {
    handleNextButton = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <>
                <h1>Feedback!</h1>
                <h3>Thank You!</h3>
                <HomeOutlinedIcon onClick={this.handleNextButton}>Home</HomeOutlinedIcon>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(ThankYou);
