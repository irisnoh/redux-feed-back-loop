
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class AdminItem extends Component {
    
    render() {
        return (
            <>
               <TableRow key={this.props.feedback.id}>
                <TableCell key={this.props.feedback.id} >{this.props.feedback.feeling}</TableCell>
                <TableCell key={this.props.feedback.id}>{this.props.feedback.understanding}</TableCell>
                <TableCell key={this.props.feedback.id}>{this.props.feedback.support}</TableCell>
                <TableCell key={this.props.feedback.id}>{this.props.feedback.comments}</TableCell>
                <TableCell key={this.props.feedback.id}>
                   
                  <button>  Delete</button>
                    </TableCell>
            </TableRow>
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(AdminItem);
