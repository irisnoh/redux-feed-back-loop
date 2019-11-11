
import React, { Component } from 'react';
import { connect } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete';
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
                   
                  <DeleteIcon>  Delete</DeleteIcon>
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
