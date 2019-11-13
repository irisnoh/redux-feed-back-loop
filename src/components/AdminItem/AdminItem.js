
import React, { Component } from 'react';
import { connect } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import axios from 'axios'
import swal from 'sweetalert';


class AdminItem extends Component {


    //function to trigger the delete route and delete one feedback from database
    handleDeleteFeedback = () => {
        //add sweet alert to confirm the deletion
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this feedback!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
              //if confirm => axios request
            if (willDelete) {
                swal("Your feedback has been deleted!", {
                icon: "success",
              });
              axios({
                method: 'DELETE',
                url: '/form/'+this.props.feedback.id,
            }).then(
                () => {
                    //reload page
                    this.props.refreshFeedback();
                }
            ).catch(
                error => {
                    console.log('error with axios delete', error);
                }
            )
            } else {
                //if cancel do nothing
                swal("Your feedback hasn't been deleted!");
            }
          });
    }
  

    render() {
        return (
            <>
                <TableRow key={this.props.feedback.id}>
                    <TableCell>{this.props.feedback.feeling}</TableCell>
                    <TableCell>{this.props.feedback.understanding}</TableCell>
                    <TableCell>{this.props.feedback.support}</TableCell>
                    <TableCell>{this.props.feedback.comments}</TableCell>
                    <TableCell>
                        <DeleteIcon onClick={this.handleDeleteFeedback}>  Delete</DeleteIcon>
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
